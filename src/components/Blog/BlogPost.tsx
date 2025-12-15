import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost as BlogPostType, ContentBlock, TOCItem } from '../../types/blog';
import TableOfContents from './TableOfContents';
import CodeBlock from './CodeBlock';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Tag, 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Quote
} from 'lucide-react';
import './BlogPost.scss';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPostComponent: React.FC<BlogPostProps> = ({ post }) => {
  const { meta, content } = post;

  // Extract TOC items from headings
  const tocItems: TOCItem[] = content
    .filter((block): block is ContentBlock & { type: 'heading' } => block.type === 'heading')
    .map(heading => ({
      id: heading.id,
      title: heading.content,
      level: heading.level
    }));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderCalloutIcon = (variant: string) => {
    switch (variant) {
      case 'info': return <Info size={20} />;
      case 'warning': return <AlertTriangle size={20} />;
      case 'success': return <CheckCircle size={20} />;
      case 'error': return <XCircle size={20} />;
      default: return <Info size={20} />;
    }
  };

  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={index} className="blog-post__paragraph">{block.content}</p>;

      case 'heading':
        const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag key={index} id={block.id} className={`blog-post__heading blog-post__heading--h${block.level}`}>
            {block.content}
          </HeadingTag>
        );

      case 'quote':
        return (
          <blockquote key={index} className="blog-post__quote">
            <Quote className="blog-post__quote-icon" size={32} />
            <p className="blog-post__quote-content">{block.content}</p>
            {block.author && (
              <footer className="blog-post__quote-footer">
                <cite>— {block.author}</cite>
                {block.source && <span className="blog-post__quote-source">{block.source}</span>}
              </footer>
            )}
          </blockquote>
        );

      case 'code':
        return (
          <CodeBlock
            key={index}
            code={block.code}
            language={block.language}
            filename={block.filename}
            highlightLines={block.highlightLines}
          />
        );

      case 'image':
        return (
          <figure key={index} className="blog-post__image">
            <img src={block.src} alt={block.alt} />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        );

      case 'list':
        const ListTag = block.style === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag key={index} className={`blog-post__list blog-post__list--${block.style}`}>
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ListTag>
        );

      case 'callout':
        return (
          <div key={index} className={`blog-post__callout blog-post__callout--${block.variant}`}>
            <div className="blog-post__callout-icon">
              {renderCalloutIcon(block.variant)}
            </div>
            <div className="blog-post__callout-content">
              {block.title && <strong className="blog-post__callout-title">{block.title}</strong>}
              <p>{block.content}</p>
            </div>
          </div>
        );

      case 'divider':
        return <hr key={index} className="blog-post__divider" />;

      default:
        return null;
    }
  };

  return (
    <article className="blog-post">
      <header className="blog-post__header">
        <div className="blog-post__header-container">
          <Link to="/blog" className="blog-post__back">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="blog-post__meta">
            <span className="blog-post__category">{meta.category}</span>
            <span className="blog-post__date">
              <Calendar size={14} />
              {formatDate(meta.publishedAt)}
            </span>
            <span className="blog-post__read-time">
              <Clock size={14} />
              {meta.readTime} min read
            </span>
          </div>

          <h1 className="blog-post__title">{meta.title}</h1>
          
          <p className="blog-post__excerpt">{meta.excerpt}</p>

          <div className="blog-post__tags">
            {meta.tags.map(tag => (
              <span key={tag} className="blog-post__tag">
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>

          <div className="blog-post__author-info">
            <div className="blog-post__author-avatar">
              {meta.author.name.charAt(0)}
            </div>
            <div className="blog-post__author-details">
              <span className="blog-post__author-name">{meta.author.name}</span>
              <span className="blog-post__author-role">{meta.author.role}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="blog-post__body">
        <aside className="blog-post__sidebar">
          <TableOfContents items={tocItems} />
        </aside>

        <div className="blog-post__content">
          {content.map((block, index) => renderBlock(block, index))}
        </div>
      </div>
    </article>
  );
};

export default BlogPostComponent;
