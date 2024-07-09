export default function remarkMathCustom(Parser) {
  const parser = Parser.prototype.inlineTokenizers.escape;
  const inlineMath = parser.bind(Parser.prototype, '\\(', '\\)')();
  const blockMath = parser.bind(Parser.prototype, '\\[', '\\]')();
  return {
    inlineMath,
    blockMath
  };
}
