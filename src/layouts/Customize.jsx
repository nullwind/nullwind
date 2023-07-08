import Nullstack from "nullstack";

import { Cog8ToothIcon, CheckIcon } from "nullstack-heroicons/24/outline";
import { Button, InputWrapper, Title } from "nullwind";

const tailwindConfigTemplate = (colors) => `
  // tailwind.config.js
  const defaultTheme = require("tailwindcss/defaultTheme");
  const { tailwindcssPaletteGenerator } = require("@bobthered/tailwindcss-palette-generator");

  module.exports = {
    content: ["node_modules/nullwind/**/*.tsx", "src/**/*.{jsx,tsx}"],
    theme: {
      extend: {
        // Set font family
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
        // Set theme colors (Required config!)
        colors: tailwindcssPaletteGenerator({
          colors: [${Object.values(colors)
            .map((color) => `"${color}"`)
            .join(", ")}],
          names: [${Object.keys(colors)
            .map((color) => `"${color}"`)
            .join(", ")}],
        })
      },
    },
    // Add plugins
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  };
`;

export default class Customize extends Nullstack {
  opened = false;
  copyLabel = "Copy tailwind.config.json";

  onClickToGenerate({ colors }) {
    this.copyLabel = (
      <>
        <CheckIcon class="mr-1 stroke-2" />
        <span>Copied!</span>
      </>
    );
    navigator.clipboard.writeText(tailwindConfigTemplate(colors));
    setTimeout(() => (this.copyLabel = "Copy tailwind.config.json"), 1000);
  }

  render({ colors }) {
    return (
      <div
        class={[
          "not-prose fixed right-0 top-16 z-50 flex h-screen w-full max-w-[240px] border-l bg-neutral-50 p-4 transition-all",
          this.opened ? "translate-x-0" : "translate-x-full",
        ]}
      >
        <button
          class="group absolute left-0 top-20 -translate-x-full rounded-bl-lg rounded-tl-lg border-b border-l border-t bg-neutral-50 p-2"
          onclick={{ opened: !this.opened }}
        >
          <Cog8ToothIcon class="h-6 w-6 text-gray-600 group-hover:animate-spin" />
        </button>
        <div class="w-full space-y-6 py-3">
          <div class="w-full space-y-4">
            <Title class="font-semibold" h={4}>
              Tailwind Colors
            </Title>
            {Object.keys(colors).map((color) => (
              <InputWrapper
                theme={{
                  inputWrapper: {
                    base: "capitalize font-semibold",
                  },
                }}
                label={color}
              >
                <div class="flex max-w-[120px] items-center justify-normal rounded-lg border">
                  <input class="h-8 w-8 shrink-0 p-1" type="color" bind={colors[color]} />
                  <input
                    class="w-full border-none bg-transparent p-0 text-center text-sm focus:ring-0"
                    type="text"
                    bind={colors[color]}
                  />
                </div>
              </InputWrapper>
            ))}
          </div>
          <Button fullSized onclick={this.onClickToGenerate}>
            {this.copyLabel}
          </Button>
        </div>
      </div>
    );
  }
}
