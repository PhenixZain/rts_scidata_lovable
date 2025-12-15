export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogMeta {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  author: BlogAuthor;
  featuredImage?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

export type ContentBlockType = 
  | 'paragraph'
  | 'heading'
  | 'quote'
  | 'code'
  | 'image'
  | 'list'
  | 'callout'
  | 'divider';

export interface ParagraphBlock {
  type: 'paragraph';
  content: string;
}

export interface HeadingBlock {
  type: 'heading';
  level: 2 | 3 | 4;
  content: string;
  id: string;
}

export interface QuoteBlock {
  type: 'quote';
  content: string;
  author?: string;
  source?: string;
}

export interface CodeBlock {
  type: 'code';
  language: string;
  code: string;
  filename?: string;
  highlightLines?: number[];
}

export interface ImageBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface ListBlock {
  type: 'list';
  style: 'ordered' | 'unordered';
  items: string[];
}

export interface CalloutBlock {
  type: 'callout';
  variant: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  content: string;
}

export interface DividerBlock {
  type: 'divider';
}

export type ContentBlock = 
  | ParagraphBlock
  | HeadingBlock
  | QuoteBlock
  | CodeBlock
  | ImageBlock
  | ListBlock
  | CalloutBlock
  | DividerBlock;

export interface BlogPost {
  meta: BlogMeta;
  content: ContentBlock[];
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export type BlogCategory = 
  | 'Data Management'
  | 'Scientific Analysis'
  | 'Automation'
  | 'Visualization'
  | 'Research'
  | 'Best Practices';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'Data Management',
  'Scientific Analysis',
  'Automation',
  'Visualization',
  'Research',
  'Best Practices'
];
