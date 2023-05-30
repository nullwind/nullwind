import Nullstack from "nullstack";

import { Button, Title } from "nullwind";

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
      <div class="flex-col gap-4">
        <Title h={2}> Buttons </Title>
        <div class="flex gap-4">
          <Button theme={this.theme} color="primary">
            Normal
          </Button>
          <Button theme={this.theme} color="primary" outline>
            Outline
          </Button>
        </div>
        <script
          src="https://cdn.tailwindcss.com?plugins=forms,typography"
          onload={this.handleLoad}
        ></script>
      </div>
    );
  }
}

export default ThemeBuilderIframe;
