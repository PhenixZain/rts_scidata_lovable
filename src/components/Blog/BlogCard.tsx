import React from 'react';
import { Link } from 'react-router-dom';
import { BlogMeta } from '../../types/blog';
import { Clock, Calendar, ArrowRight, Tag } from 'lucide-react';
import './BlogCard.scss';

interface BlogCardProps {
  post: BlogMeta;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article className={`blog-card ${featured ? 'blog-card--featured' : ''}`}>
      <div className="blog-card__content">
        <div className="blog-card__meta">
          <span className="blog-card__category">{post.category}</span>
          <span className="blog-card__date">
            <Calendar size={12} />
            {formatDate(post.publishedAt)}
          </span>
        </div>
        
        <h3 className="blog-card__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <p className="blog-card__excerpt">{post.excerpt}</p>
        
        <div className="blog-card__tags">
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className="blog-card__tag">
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
        
        <div className="blog-card__footer">
          <div className="blog-card__author">
            <span className="blog-card__author-name">{post.author.name}</span>
            <span className="blog-card__read-time">
              <Clock size={12} />
              {post.readTime} min read
            </span>
          </div>
          
          <Link to={`/blog/${post.slug}`} className="blog-card__link">
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
