const ThemePreview = ({ theme }) => {
  return (
    <pre class="language-json">
      <code class="language-json">
        <div html={JSON.stringify(theme, null, 2)}></div>
      </code>
    </pre>
  );
};

export default ThemePreview;
