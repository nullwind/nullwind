import { tailwindcssPaletteGenerator } from "@bobthered/tailwindcss-palette-generator";

const colorNames = ["primary", "secondary", "success", "danger", "warning", "info"];

export function createColorsVariants(name) {
  const colorVariants = {};

  for (let i = 50; i <= 900; i += 50) {
    colorVariants[i] = `var(--color-${name}-${i})`;
  }

  return colorVariants;
}

export const colors = colorNames.reduce((acc, curr) => {
  acc[curr] = createColorsVariants(curr);
  return acc;
}, {});

export function buildColorsVars(colors = {} as Record<string, string>) {
  const colorPalettes = tailwindcssPaletteGenerator({
    colors: colorNames.map((name) => colors[name]),
    names: colorNames,
  });

  return Object.entries(colorPalettes)
    .map(([name, palette]) =>
      Object.entries(palette)
        .map(([shade, color]) => `--color-${name}-${shade}: ${color};`)
        .join("\n")
    )
    .join("\n");
}
