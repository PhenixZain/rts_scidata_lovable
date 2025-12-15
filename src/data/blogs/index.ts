import { BlogPost, BlogMeta } from '../../types/blog';
import { researchLabDataManagement } from './research-lab-data-management';

// Registry of all blog posts
export const blogPosts: BlogPost[] = [
  researchLabDataManagement,
];

// Get all blog metadata for listing
export const getBlogList = (): BlogMeta[] => {
  return blogPosts.map(post => post.meta);
};

// Get a single blog post by slug
export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.meta.slug === slug);
};

// Get posts by category
export const getBlogsByCategory = (category: string): BlogMeta[] => {
  return blogPosts
    .filter(post => post.meta.category === category)
    .map(post => post.meta);
};

// Get posts by tag
export const getBlogsByTag = (tag: string): BlogMeta[] => {
  return blogPosts
    .filter(post => post.meta.tags.includes(tag))
    .map(post => post.meta);
};

// Get all unique tags
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  blogPosts.forEach(post => {
    post.meta.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

// Get all categories with counts
export const getCategoryCounts = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  blogPosts.forEach(post => {
    const category = post.meta.category;
    counts[category] = (counts[category] || 0) + 1;
  });
  return counts;
};
