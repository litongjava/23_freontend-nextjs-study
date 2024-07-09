import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const preprocessLaTeX = (content: string) => {
  // 替换块级LaTeX界定符 \[ \] 为 $$
  const blockProcessedContent = content.replace(/\\\[(.*?)\\\]/gs, (_, equation) => `$$${equation}$$`);
  // 替换行内LaTeX界定符 \( \) 为 $
  const inlineProcessedContent = blockProcessedContent.replace(/\\\((.*?)\\\)/gs, (_, equation) => `$${equation}$`);
  return inlineProcessedContent;
};

interface MarkdownRenderProps {
  content: string;
}

const MarkdownRender: React.FC<MarkdownRenderProps> = ({content}) => {
  const processedContent = preprocessLaTeX(content);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {processedContent}
    </ReactMarkdown>
  );
};

export default MarkdownRender;
