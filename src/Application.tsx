import Nullstack, { NullstackClientContext, NullstackNode } from "nullstack";

import { AppShell } from "./AppShell";
import ThemeProvider from "./lib/providers/ThemeProvider";
import type { Theme } from "./lib/types";
import NotFound from "./pages/NotFound.mdx";
import { routes } from "./routes";

import "prism-themes/themes/prism-shades-of-purple.css";
import "./styles.css";
import "../tailwind.css";

declare function Head(): NullstackNode;

class Application extends Nullstack {
  prepare(context: NullstackClientContext) {
    context.page.locale = "en-US";
  }

  renderHead() {
    return (
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />
      </head>
    );
  }

  render() {
    const allRoutes = routes.map((section) => section.routes).flat();
    const customTheme = {
      tab: {
        item: {
          active: "after:bg-primary-600",
        },
      },
    } as Theme;

    return (
      <ThemeProvider theme={customTheme} persistent>
        <body class="bg-white text-secondary-500 antialiased">
          <Head />
          <AppShell>
            {allRoutes.map(({ component: Component, path }) => (
              <Component route={path} persistent />
            ))}
            <NotFound route="*" persistent />
          </AppShell>
        </body>
      </ThemeProvider>
    );
  }
}

export default Application;
