"use client"
import React from 'react';
import MarkdownRender from "@/app/componments/MarkdownRender";

const App = () => {
  const markdownContent = `
  # 示例文档

  这是一个包含LaTeX公式的Markdown文档。

  行内公式：\\(x^2 + y^2 = z^2\\)

  块级公式：

  \\[
  \\int_0^\\infty e^{-x} dx = 1
  \\]
  `;

  return (
    <div>
      <MarkdownRender content={markdownContent}/>
    </div>
  );
};

export default App;
