import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getBlogBySlug } from '../../data/blogs';
import BlogPostComponent from '../../components/Blog/BlogPost';
import { Helmet } from 'react-helmet-async';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.meta.title} | Zain Aldin Blog</title>
        <meta name="description" content={post.meta.seoDescription || post.meta.excerpt} />
        <meta name="keywords" content={post.meta.seoKeywords?.join(', ') || post.meta.tags.join(', ')} />
        <meta property="og:title" content={post.meta.title} />
        <meta property="og:description" content={post.meta.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.meta.publishedAt} />
        <meta property="article:author" content={post.meta.author.name} />
        {post.meta.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Helmet>
      <BlogPostComponent post={post} />
    </>
  );
};

export default BlogPostPage;
