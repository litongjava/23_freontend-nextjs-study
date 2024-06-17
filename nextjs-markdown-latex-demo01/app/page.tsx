import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const markdown = `
This is a simple example:

Inline math: $E = mc^2$

Block math:

$$
\\int_{a}^{b} x^2 \\, dx = \\left[ \\frac{x^3}{3} \\right]_{a}^{b} = \\frac{b^3}{3} - \\frac{a^3}{3}
$$
`;

function App() {
  return (
    <div>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
    </div>
  );
}

export default App;
