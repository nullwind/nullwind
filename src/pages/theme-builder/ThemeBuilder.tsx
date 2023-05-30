import Nullstack, { NullstackNode } from "nullstack";

import { Textarea } from "nullwind";
import { theme } from "nullwind";
import getPalette from "tailwindcss-palette-generator";

import ListItem from "./ListItem";

const colorsTw = require("tailwindcss/colors");

declare function Config(): NullstackNode;
declare function Colors(): NullstackNode;

class ThemeBuilder extends Nullstack {
  theme = theme;
  colors = {
    primary: "sky",
    secondary: "slate",
    info: "blue",
    success: "green",
    warning: "orange",
    danger: "red",
  };
  _script: HTMLScriptElement;
  iframe: HTMLIFrameElement;

  _formatString(str: string) {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
  }

  update() {
    this.updateIframe();
  }
  _getColor(color: string) {
    if (color.startsWith("#")) return getPalette(color).primary;
    else return colorsTw[color];
  }
  _getColors() {
    const colors = {
      primary: this._getColor(this.colors.primary),
      secondary: this._getColor(this.colors.secondary),
      info: this._getColor(this.colors.info),
      success: this._getColor(this.colors.success),
      warning: this._getColor(this.colors.warning),
      danger: this._getColor(this.colors.danger),
    };
    return colors;
  }

  hydrate() {
    window.addEventListener("message", () => this.updateIframe());
  }

  updateIframe() {
    this.iframe.contentWindow.postMessage({
      theme: JSON.parse(JSON.stringify(this.theme)),
      colors: JSON.parse(JSON.stringify(this._getColors())),
    });
  }

  renderColors({ obj }) {
    return (
      <ul>
        {Object.keys(obj).map((key) => (
          <ListItem label={this._formatString(key)}>
            {typeof obj[key] === "object" && <Colors obj={obj[key]} />}
            {typeof obj[key] === "string" && <input type="color" bind={obj[key]} />}
          </ListItem>
        ))}
      </ul>
    );
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

  render({ router }) {
    return (
      <>
        <h1>Theme Builder</h1>
        <div class="flex flex-row">
          <div class="basis-1/3 sticky inset-0 right-auto z-20 -ml-6 shrink-0 overflow-y-auto max-h-screen">
            <h2 class={"my-0"}>Colors</h2>
            <Colors obj={this.colors} />
            <h2 class={"my-0"}>Configs</h2>
            <Config obj={this.theme} />
          </div>
          <div class="basis-2/3 ml-4 sticky inset-0 right-auto z-20 shrink-0 overflow-y-auto max-h-screen">
            <iframe
              class="w-full h-full"
              ref={this.iframe}
              src={`${router.base}/iframe`}
              frameborder="0"
              onload={this.updateIframe}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ThemeBuilder;
