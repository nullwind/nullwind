import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import parserBabel from "prettier/parser-babel";
import prettier from "prettier/standalone";

import CopyButton from "./CopyButton";

export default function Code({ code, format = true, language = "javascript", class: klass }) {
  if (format) {
    code = prettier.format(code, {
      parser: "babel",
      plugins: [parserBabel],
    });
  }

  const html = hljs.highlightAuto(code, [language]).value;

  return (
    <div class={["relative", klass]}>
      <CopyButton class="absolute right-1.5 top-1.5 z-10" code={code} />
      <pre class="m-0 rounded-none pr-9">
        <code html={html} />
      </pre>
    </div>
  );
}
