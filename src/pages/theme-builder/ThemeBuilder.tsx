import Nullstack, { NullstackNode } from "nullstack";

import { CodeIcon, SettingsIcon } from "nullstack-feather-icons";
import { Button, Textarea } from "nullwind";
import { theme } from "nullwind";
import getPalette from "tailwindcss-palette-generator";

import ListItem from "./ListItem";

const colorsTw = require("tailwindcss/colors");

declare function Config(): NullstackNode;
declare function Colors(): NullstackNode;

class ThemeBuilder extends Nullstack {
  showColors = true;
  showConfigs = true;
  teste = false;
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
  toogleColors() {
    this.showColors = !this.showColors;
  }
  toogleConfigs() {
    this.showConfigs = !this.showConfigs;
  }

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
            <h2 class={"my-0 flex justify-between"}>
              Colors
              <Button size="sm" onclick={this.toogleColors}>
                {this.showColors && <CodeIcon size={18} />}
                {!this.showColors && <SettingsIcon size={18} />}
              </Button>
            </h2>
            {this.showColors && <Colors obj={this.colors} />}
            {!this.showColors && <pre>{JSON.stringify(this._getColors(), null, 2)}</pre>}
            <h2 class={"my-0 flex justify-between"}>
              Configs
              <Button size="sm" onclick={this.toogleConfigs}>
                {this.showConfigs && <CodeIcon size={18} />}
                {!this.showConfigs && <SettingsIcon size={18} />}
              </Button>
            </h2>
            {this.showConfigs && <Config obj={this.theme} />}
            {!this.showConfigs && <pre>{JSON.stringify(this.theme, null, 2)}</pre>}
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
