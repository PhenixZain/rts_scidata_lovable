import React, { useState } from 'react';
import { Copy, Check, FileCode } from 'lucide-react';
import './CodeBlock.scss';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  highlightLines?: number[];
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename, highlightLines = [] }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="code-block">
      <div className="code-block__header">
        <div className="code-block__info">
          <FileCode size={14} />
          {filename && <span className="code-block__filename">{filename}</span>}
          <span className="code-block__language">{language}</span>
        </div>
        <button className="code-block__copy" onClick={handleCopy}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="code-block__content">
        <pre>
          <code>
            {lines.map((line, index) => (
              <div
                key={index}
                className={`code-block__line ${highlightLines.includes(index + 1) ? 'code-block__line--highlighted' : ''}`}
              >
                <span className="code-block__line-number">{index + 1}</span>
                <span className="code-block__line-content">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
