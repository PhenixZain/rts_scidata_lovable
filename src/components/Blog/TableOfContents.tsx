import React, { useState, useEffect } from 'react';
import { TOCItem } from '../../types/blog';
import { List } from 'lucide-react';
import './TableOfContents.scss';

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className="toc">
      <div className="toc__header">
        <List size={18} />
        <span>Table of Contents</span>
      </div>
      <ul className="toc__list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`toc__item toc__item--level-${item.level} ${activeId === item.id ? 'toc__item--active' : ''}`}
          >
            <button onClick={() => handleClick(item.id)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
