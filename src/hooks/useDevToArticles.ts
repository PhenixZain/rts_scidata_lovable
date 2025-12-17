import { useState, useEffect } from 'react';
import { DevToArticle } from '../types/devto';

const DEVTO_USERNAME = 'phenixzain';
const DEVTO_API_BASE = 'https://dev.to/api';

export const useDevToArticles = () => {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${DEVTO_API_BASE}/articles?username=${DEVTO_USERNAME}&per_page=100`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        
        const data: DevToArticle[] = await response.json();
        setArticles(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export const useDevToArticle = (articleId: string | number) => {
  const [article, setArticle] = useState<DevToArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${DEVTO_API_BASE}/articles/${articleId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch article');
        }
        
        const data: DevToArticle = await response.json();
        setArticle(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);

  return { article, loading, error };
};
