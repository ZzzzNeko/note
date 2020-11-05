function mermaidPlugin(md) {
  const rules = md.renderer.rules;
  const originalLogic = rules.fence
    ? rules.fence.bind(md.renderer.rules)
    : undefined;
  rules.fence = (tokens, idx, ...rest) => {
    const token = tokens[idx];
    const { info, content } = token;
    if (info.trim() === "mermaid") {
      return `<Mermaid>${content}</Mermaid>`;
    } else {
      return originalLogic ? originalLogic(tokens, idx, ...rest) : "";
    }
  };
}
module.exports = {
  extendMarkdown(md) {
    md.use(mermaidPlugin);
  },
};
