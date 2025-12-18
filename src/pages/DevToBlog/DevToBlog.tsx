import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useDevToArticles } from '../../hooks/useDevToArticles';
import { Search, Clock, Heart, MessageCircle, ExternalLink, Tag } from 'lucide-react';
import './DevToBlog.scss';

import { useTheme } from '../../context/ThemeContext';

const DevToBlog = () => {
  const { t } = useLanguage();
  const { articles, loading, error } = useDevToArticles();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { gradientMode } = useTheme();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    articles.forEach(article => {
      article.tag_list.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [articles]);

  // Filter articles
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = !selectedTag || article.tag_list.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [articles, searchQuery, selectedTag]);

  if (loading) {
    return (
      <main className="devto-blog">
        <div className="container">
          <div className="devto-blog__loading">
            <div className="loading-spinner"></div>
            <p>Loading articles from Dev.to...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="devto-blog">
        <div className="container">
          <div className="devto-blog__error">
            <p>Error loading articles: {error}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dev.to Articles | Zain Aldin - Scientific Data Manager</title>
        <meta name="description" content="Read my latest articles on Dev.to about data science, Python, automation, and scientific computing." />
      </Helmet>

      <main className="devto-blog">
        {/* Hero Section */}
        <section className="devto-blog__hero">
          <div className="container">
            <span className="devto-blog__badge">Dev.to Articles</span>
            <h1 className="services__hero-title">
              <span className={gradientClass}>My Dev.to Blog</span>
            </h1>
            <p className="devto-blog__subtitle">
              Sharing knowledge about data science, Python, automation, and scientific computing
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="devto-blog__filters">
          <div className="container">
            {/* Search */}
            <div className="devto-blog__search">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Tags */}
            <div className="devto-blog__tags">
              <button
                className={`devto-blog__tag ${!selectedTag ? 'active' : ''}`}
                onClick={() => setSelectedTag(null)}
              >
                All
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`devto-blog__tag ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="devto-blog__content">
          <div className="container">
            {filteredArticles.length === 0 ? (
              <div className="devto-blog__empty">
                <p>No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="devto-blog__grid">
                {filteredArticles.map(article => (
                  <article key={article.id} className="devto-article-card">
                    {article.cover_image && (
                      <div className="devto-article-card__image">
                        <img src={article.cover_image} alt={article.title} />
                      </div>
                    )}
                    <div className="devto-article-card__content">
                      <div className="devto-article-card__tags">
                        {article.tag_list.slice(0, 3).map(tag => (
                          <span key={tag} className="devto-article-card__tag">
                            <Tag size={12} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="devto-article-card__title">
                        <Link to={`/devto/${article.id}`}>{article.title}</Link>
                      </h2>
                      <p className="devto-article-card__description">
                        {article.description}
                      </p>
                      <div className="devto-article-card__meta">
                        <span className="devto-article-card__date">
                          {article.readable_publish_date}
                        </span>
                        <span className="devto-article-card__reading-time">
                          <Clock size={14} />
                          {article.reading_time_minutes} min read
                        </span>
                      </div>
                      <div className="devto-article-card__stats">
                        <span className="devto-article-card__reactions">
                          <Heart size={14} />
                          {article.positive_reactions_count}
                        </span>
                        <span className="devto-article-card__comments">
                          <MessageCircle size={14} />
                          {article.comments_count}
                        </span>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="devto-article-card__external"
                        >
                          <ExternalLink size={14} />
                          View on Dev.to
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default DevToBlog;
