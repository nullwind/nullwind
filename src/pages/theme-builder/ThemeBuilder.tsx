import Nullstack, { NullstackNode } from "nullstack";

import { Textarea } from "nullwind";
import { Title } from "nullwind";
import { theme } from "nullwind";

import ListItem from "./ListItem";

declare function Config(): NullstackNode;

class ThemeBuilder extends Nullstack {
  theme = theme;
  _script: HTMLScriptElement;
  iframe: HTMLIFrameElement;
  hydrate() {
    // this._script = document.createElement("script");
    // this._script.src = "https://unpkg.com/tailwindcss-jit-cdn";
    // this._script.async = true;
    // document.body.appendChild(this._script);
    // console.log(this._script);
  }
  terminate() {
    // this._script.parentNode.removeChild( this._script );
  }
  _formatString(str: string) {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
  }

  update() {
    this.iframe.contentWindow.postMessage({ theme: JSON.parse(JSON.stringify(this.theme)) });
  }

  renderConfig({ obj }) {
    return (
      <ul>
        {Object.keys(obj).map((key) => (
          <ListItem label={this._formatString(key)}>
            {typeof obj[key] === "object" && <Config obj={obj[key]} />}
            {typeof obj[key] === "string" && <Textarea bind={obj[key]} />}
          </ListItem>
        ))}
      </ul>
    );
  }

  render({ instances, router }) {
    console.log(instances);
    return (
      <>
        <h1>Theme Builder</h1>
        <div class="flex flex-row">
          <div class="basis-1/2">
            <Title h={3}>Configs</Title>
            <Config obj={this.theme} />
          </div>
          <div class="flex flex-row basis-1/2">
            <iframe ref={this.iframe} src={`${router.base}/iframe`} frameborder="0" />
          </div>
        </div>
      </>
    );
  }
}

export default ThemeBuilder;
