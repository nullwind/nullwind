export const configuration = `
  // tailwind.config.js
  const defaultTheme = require("tailwindcss/defaultTheme");
  const colors = require("tailwindcss/colors");

  module.exports = {
    content: ["node_modules/nullwind/theme.ts", "src/**/*.{jsx,tsx}"],
    theme: {
      extend: {
        // Set font family
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
        // Set theme colors (Required config!)
        colors: {
          primary: colors.pink,
          secondary: colors.gray,
          info: colors.blue,
          success: colors.green,
          warning: colors.orange,
          danger: colors.red,
        },
      },
    },
    // Add plugins
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  };
`;

export const usage = `
  // Application.js
  import Nullstack from "nullstack";
  import { Button } from "nullwind";

  import "../tailwind.css";

  class Application extends Nullstack {
    renderHead() {
      return (
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
            rel="stylesheet"
          />
        </head>
      );
    }

    render() {
      return (
        <main>
          <Head />
          <Button>Click me</Button>
        </main>
      );
    }
  }

  export default Application;
`;