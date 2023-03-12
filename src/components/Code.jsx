import hljs from "highlight.js";

export default function ({ language, content }) {
  const highlighted = language
    ? hljs.highlight(content, {language})
    : hljs.highlightAuto(content);

  return (
    <pre className="hljs">
      <code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
    </pre>
  );
}
