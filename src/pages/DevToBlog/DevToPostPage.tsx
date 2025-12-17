import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useDevToArticle } from '../../hooks/useDevToArticles';
import { ArrowLeft, Clock, Heart, MessageCircle, ExternalLink, Calendar, Tag } from 'lucide-react';
import './DevToPostPage.scss';

const DevToPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { article, loading, error } = useDevToArticle(id || '');

  if (loading) {
    return (
      <main className="devto-post">
        <div className="container">
          <div className="devto-post__loading">
            <div className="loading-spinner"></div>
            <p>Loading article...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="devto-post">
        <div className="container">
          <div className="devto-post__error">
            <p>Error loading article: {error || 'Article not found'}</p>
            <Link to="/devto" className="devto-post__back-link">
              <ArrowLeft size={16} />
              Back to articles
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Zain Aldin - Scientific Data Manager</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        {article.cover_image && <meta property="og:image" content={article.cover_image} />}
      </Helmet>

      <main className="devto-post">
        {/* Hero Section */}
        <section className="devto-post__hero">
          {article.cover_image && (
            <div className="devto-post__cover">
              <img src={article.cover_image} alt={article.title} />
            </div>
          )}
          <div className="container">
            <Link to="/devto" className="devto-post__back">
              <ArrowLeft size={16} />
              Back to articles
            </Link>
            
            <div className="devto-post__tags">
              {article.tag_list.map(tag => (
                <span key={tag} className="devto-post__tag">
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="devto-post__title">{article.title}</h1>
            
            <p className="devto-post__description">{article.description}</p>

            <div className="devto-post__meta">
              <div className="devto-post__author">
                <img 
                  src={article.user.profile_image_90} 
                  alt={article.user.name} 
                  className="devto-post__author-avatar"
                />
                <div className="devto-post__author-info">
                  <span className="devto-post__author-name">{article.user.name}</span>
                  <span className="devto-post__author-username">@{article.user.username}</span>
                </div>
              </div>
              
              <div className="devto-post__details">
                <span className="devto-post__date">
                  <Calendar size={14} />
                  {article.readable_publish_date}
                </span>
                <span className="devto-post__reading-time">
                  <Clock size={14} />
                  {article.reading_time_minutes} min read
                </span>
              </div>
            </div>

            <div className="devto-post__stats">
              <span className="devto-post__reactions">
                <Heart size={16} />
                {article.positive_reactions_count} reactions
              </span>
              <span className="devto-post__comments">
                <MessageCircle size={16} />
                {article.comments_count} comments
              </span>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="devto-post__external"
              >
                <ExternalLink size={16} />
                View on Dev.to
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="devto-post__content">
          <div className="container">
            <article 
              className="devto-post__body"
              dangerouslySetInnerHTML={{ __html: article.body_html || '' }}
            />
          </div>
        </section>

        {/* Footer CTA */}
        <section className="devto-post__footer">
          <div className="container">
            <div className="devto-post__footer-content">
              <p>Enjoyed this article?</p>
              <div className="devto-post__footer-actions">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="devto-post__footer-btn primary"
                >
                  <Heart size={16} />
                  React on Dev.to
                </a>
                <Link to="/devto" className="devto-post__footer-btn secondary">
                  Read more articles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DevToPostPage;
