import Code from "./Code";

const ThemePreview = ({ theme }) => {
  return <Code code={JSON.stringify(theme, null, 2)} language="json" format={false} />;
};

export default ThemePreview;
