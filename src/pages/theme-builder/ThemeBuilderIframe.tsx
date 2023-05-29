import Nullstack from "nullstack";

import { Button, Title } from "nullwind";

class ThemeBuilderIframe extends Nullstack {
  theme;

  updateTheme({ event }) {
    if (event.data?.theme) {
      this.theme = event.data?.theme;
    }
  }

  hydrate() {
    window.addEventListener("message", (event) => this.updateTheme({ event }));
  }

  render() {
    return (
      <div class="flex-col gap-4">
        <Title h={2}> Buttons </Title>
        <div class="flex gap-4">
          <Button theme={this.theme}>Normal</Button>
          <Button theme={this.theme} outline>
            Outline
          </Button>
        </div>
        <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
      </div>
    );
  }
}

export default ThemeBuilderIframe;
