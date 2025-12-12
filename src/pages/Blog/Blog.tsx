import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  PenTool, 
  Clock
} from 'lucide-react';
import './Blog.scss';

const Blog: React.FC = () => {
  const { gradientMode } = useTheme();
  const { t } = useLanguage();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

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

      <section className="blog__content">
        <div className="blog__content-container">
          <div className="blog__content-intro">
            <div className="blog__content-intro-icon">
              <PenTool />
            </div>
            <h2 className="blog__content-intro-title">{t.blog.comingSoon}</h2>
            <p className="blog__content-intro-text">{t.blog.comingSoonDesc}</p>
          </div>

          <div className="blog__content-grid">
            {t.blog.posts.map((post, index) => (
              <article className="blog__post" key={index}>
                <span className="blog__post-category">{post.category}</span>
                <h3 className="blog__post-title">{post.title}</h3>
                <p className="blog__post-excerpt">{post.excerpt}</p>
                <div className="blog__post-meta">
                  <span><Clock size={12} /> {post.readTime} {t.blog.minRead}</span>
                </div>
              </article>
            ))}
          </div>
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
