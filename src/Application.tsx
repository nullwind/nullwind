import Nullstack, { NullstackNode } from "nullstack";

import { AppShell } from "./layouts/AppShell";
import Customize from "./layouts/Customize";
import NotFound from "./pages/NotFound.mdx";
import { routes } from "./routes";
import { buildColorsVars } from "./utils/colors";

import "./styles.css";
import "../tailwind.css";

declare function Head(): NullstackNode;

const defaultColors = {
  primary: "#0ea5e9",
  secondary: "#6b7280",
  success: "#22c55e",
  danger: "#ef4444",
  warning: "#eab308",
  info: "#3b82f6",
};

class Application extends Nullstack {
  prepare(context) {
    context.page.locale = "en-US";
    context.colors = defaultColors;
  }

  renderHead({ colors }) {
    return (
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />
        <style>
          {`
            @layer base {
              :root {
                ${buildColorsVars(colors)}
              }
            }
          `}
        </style>
      </head>
    );
  }

  render() {
    if (!this.hydrated) return false;

    const allRoutes = routes.map((section) => section.routes).flat();

    return (
      <body class="bg-white text-secondary-500 antialiased">
        <Head />
        <AppShell>
          <Customize />
          {allRoutes.map(({ component: Component, path }) => (
            <Component route={path} persistent />
          ))}
          <NotFound route="*" persistent />
        </AppShell>
      </body>
    );
  }
}

export default Application;
