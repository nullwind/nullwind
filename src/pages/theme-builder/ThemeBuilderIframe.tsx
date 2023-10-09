import Nullstack from "nullstack";

// import { parse } from "@ungap/structured-clone/json";
const parse = (_) => {
  return "TODO: Resolve this import";
};
class ThemeBuilderIframe extends Nullstack {
  theme;
  colors;
  recived_data = false;
  custom_children = {};
  div;

  updateTheme({ event }) {
    console.log("updateTheme", event);
    if (event.data?.theme) {
      this.theme = event.data?.theme;
    }
    if (event.data?.children) {
      console.log("event.data?.children", parse(event.data?.children));
      this.div = {
        ...this.div,
        ...event.data?.children,
      };
      this.custom_children = parse(event.data?.children);
      // this.custom_children = event.data?.children;
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

  handleLoad() {
    globalThis.tailwind.config = {
      theme: {
        extend: {
          colors: this.colors,
        },
      },
    };
  }
  render() {
    // if (!this.theme && !this.colors) return false;
    return (
      <>
        <div ref={this.div} {...this.custom_children} />
        {/* {this.custom_children} */}
        <script
          src="https://cdn.tailwindcss.com?plugins=forms,typography"
          onload={this.handleLoad}
        ></script>
      </>
      // <div class="flex flex-col gap-4">
      //   <AlertIframe theme={this.theme} />
      //   <AvatarIframe theme={this.theme} />
      //   <BadgeIframe theme={this.theme} />
      //   <ButtonsIframe theme={this.theme} />
      //   <ButtonGroupIframe theme={this.theme} />
      // </div>
    );
  }
}

export default ThemeBuilderIframe;
