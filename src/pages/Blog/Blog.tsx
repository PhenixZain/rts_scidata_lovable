import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { getBlogList, getAllTags, getCategoryCounts } from '../../data/blogs';
import BlogCard from '../../components/Blog/BlogCard';
import { BLOG_CATEGORIES } from '../../types/blog';
import { 
  PenTool, 
  Search,
  Filter,
  X,
  Grid,
  List as ListIcon
} from 'lucide-react';
import './Blog.scss';

const Blog: React.FC = () => {
  const { gradientMode } = useTheme();
  const { t } = useLanguage();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const blogList = getBlogList();
  const allTags = getAllTags();
  const categoryCounts = getCategoryCounts();

  const filteredPosts = useMemo(() => {
    return blogList.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => post.tags.includes(tag));
      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [blogList, searchQuery, selectedCategory, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTags([]);
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedTags.length > 0;

  return (
    <main className="blog">
      <section className="blog__hero">
        <div className="blog__hero-container">
          <span className="blog__hero-tag">{t.blog.tag}</span>
          <h1 className="blog__hero-title">
            <span className={gradientClass}>{t.blog.heroTitle}</span>
          </h1>
          <p className="blog__hero-subtitle">{t.blog.heroSubtitle}</p>
        </div>
      </section>

      <section className="blog__filters">
        <div className="blog__filters-container">
          <div className="blog__search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="blog__search-clear" onClick={() => setSearchQuery('')}>
                <X size={16} />
              </button>
            )}
          </div>

          <div className="blog__filter-row">
            <div className="blog__categories">
              <button
                className={`blog__category-btn ${selectedCategory === 'all' ? 'blog__category-btn--active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All ({blogList.length})
              </button>
              {BLOG_CATEGORIES.map(category => (
                <button
                  key={category}
                  className={`blog__category-btn ${selectedCategory === category ? 'blog__category-btn--active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({categoryCounts[category] || 0})
                </button>
              ))}
            </div>

            <div className="blog__view-toggle">
              <button 
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={18} />
              </button>
              <button 
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
              >
                <ListIcon size={18} />
              </button>
            </div>
          </div>

          {allTags.length > 0 && (
            <div className="blog__tags-filter">
              <Filter size={16} />
              <span>Tags:</span>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`blog__tag-btn ${selectedTags.includes(tag) ? 'blog__tag-btn--active' : ''}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {hasActiveFilters && (
            <button className="blog__clear-filters" onClick={clearFilters}>
              <X size={14} />
              Clear all filters
            </button>
          )}
        </div>
      </section>

      <section className="blog__content">
        <div className="blog__content-container">
          {filteredPosts.length > 0 ? (
            <div className={`blog__grid blog__grid--${viewMode}`}>
              {filteredPosts.map((post, index) => (
                <BlogCard 
                  key={post.slug} 
                  post={post} 
                  featured={index === 0 && viewMode === 'grid'}
                />
              ))}
            </div>
          ) : blogList.length === 0 ? (
            <div className="blog__empty">
              <div className="blog__empty-icon">
                <PenTool size={48} />
              </div>
              <h2>{t.blog.comingSoon}</h2>
              <p>{t.blog.comingSoonDesc}</p>
            </div>
          ) : (
            <div className="blog__no-results">
              <h3>No posts found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button onClick={clearFilters}>Clear filters</button>
            </div>
          )}
        </div>
      </section>

      <section className="blog__cta">
        <div className="blog__cta-container">
          <h2 className="blog__cta-title">{t.blog.comingSoon}</h2>
          <p className="blog__cta-desc">{t.blog.comingSoonDesc}</p>
          <Link to="/contact" className="blog__cta-button">
            {t.blog.subscribe}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Blog;
