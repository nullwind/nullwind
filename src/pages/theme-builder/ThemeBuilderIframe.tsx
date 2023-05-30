import Nullstack from "nullstack";

import AlertIframe from "./iframe/AlertIframe";
import AvatarIframe from "./iframe/AvatarIframe";
import ButtonsIframe from "./iframe/ButtonsIframe";

class ThemeBuilderIframe extends Nullstack {
  theme;
  colors;
  recived_data = false;

  updateTheme({ event }) {
    if (event.data?.theme) {
      this.theme = event.data?.theme;
    }
    if (event.data?.colors) {
      this.colors = event.data?.colors;
      globalThis.tailwind.config = {
        theme: {
          extend: {
            colors: this.colors,
          },
        },
      };
    }
    //if (event.data?.scrollTo) {

    //}
  }

  hydrate() {
    window.parent.postMessage("loaded");
    window.addEventListener("message", (event) => this.updateTheme({ event }));
    globalThis.tailwind = {
      config: {
        theme: {
          extend: {
            colors: this.colors,
          },
        },
      },
    };
    this.recived_data = true;
  }

  handleLoad({ event }) {
    globalThis.tailwind.config = {
      theme: {
        extend: {
          colors: this.colors,
        },
      },
    };
  }
  render() {
    if (!this.theme && !this.colors) return false;
    return (
      <div class="flex flex-col gap-4">
        <AlertIframe theme={this.theme} />
        <AvatarIframe theme={this.theme} />
        <ButtonsIframe theme={this.theme} />
        <script
          src="https://cdn.tailwindcss.com?plugins=forms,typography"
          onload={this.handleLoad}
        ></script>
      </div>
    );
  }
}

export default ThemeBuilderIframe;
