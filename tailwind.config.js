const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = require("./src/utils/colors");

module.exports = {
  content: ["lib/theme.ts", "./src/**/*.{jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        info: colors.info,
        success: colors.success,
        warning: colors.warning,
        danger: colors.danger,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
