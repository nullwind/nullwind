import tc from ".";

describe("Nullwind Component", () => {
  it("should return empty classes", () => {
    const button = tc();

    expect(button()).toEqual("");
  });

  it("should return base classes", () => {
    const button = tc({
      base: "px-2 py-1 rounded",
    });

    expect(button()).toEqual("px-2 py-1 rounded");
  });

  it("should return classes with defined variant", () => {
    const button = tc({
      base: "px-2 py-1 rounded",
      variants: {
        color: {
          primary: "bg-red-500",
          secondary: "bg-blue-500",
        },
        size: {
          2: "text-2xl",
          3: "text-3xl",
        },
      },
    });

    expect(button({ color: "primary" })).toEqual("px-2 py-1 rounded bg-red-500");
    expect(button({ size: 3 })).toEqual("px-2 py-1 rounded text-3xl");
    expect(button({ color: "primary", size: 3 })).toEqual("px-2 py-1 rounded bg-red-500 text-3xl");
  });

  it("should return classes with default variant", () => {
    const button = tc({
      base: "px-2 py-1 rounded",
      variants: {
        color: {
          primary: "bg-red-500",
          secondary: "bg-blue-500",
        },
      },
      defaultVariants: {
        color: "secondary",
      },
    });

    expect(button()).toEqual("px-2 py-1 rounded bg-blue-500");
  });

  it("should overwrite default variant if variant set", () => {
    const button = tc({
      base: "px-2 py-1 rounded",
      variants: {
        color: {
          primary: "bg-red-500",
          secondary: "bg-blue-500",
        },
      },
      defaultVariants: {
        color: "secondary",
      },
    });

    expect(button({ color: "primary" })).toEqual("px-2 py-1 rounded bg-red-500");
  });

  it("should return compoundVariants classes if set as string", () => {
    const button = tc({
      base: "px-2 py-1 rounded",
      variants: {
        color: {
          primary: "bg-red-500 border-red-500 text-white",
          secondary: "bg-blue-500 border-blue-500 text-white",
        },
        outline: {
          true: "",
        },
      },
      defaultVariants: {
        color: "secondary",
      },
      compoundVariants: [
        {
          color: "primary",
          outline: true,
          class: "bg-transparent border-red-500 text-red-500",
        },
        {
          color: "secondary",
          outline: true,
          class: "bg-transparent border-blue-500 text-blue-500",
        },
      ],
    });

    expect(button({ color: "secondary" })).toEqual(
      "px-2 py-1 rounded bg-blue-500 border-blue-500 text-white"
    );
    expect(button({ color: "primary", outline: true })).toEqual(
      "px-2 py-1 rounded bg-transparent border-red-500 text-red-500"
    );
    expect(button({ color: "secondary", outline: true })).toEqual(
      "px-2 py-1 rounded bg-transparent border-blue-500 text-blue-500"
    );
  });

  it("should return compoundVariants classes if set as array", () => {
    const button = tc({
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
          lg: "text-lg",
        },
      },
      compoundVariants: [
        {
          size: ["sm", "md"],
          class: "font-bold",
        },
        {
          size: "lg",
          class: "font-normal",
        },
      ],
    });

    expect(button({ size: "sm" })).toEqual("text-sm font-bold");
    expect(button({ size: "md" })).toEqual("text-md font-bold");
    expect(button({ size: "lg" })).toEqual("text-lg font-normal");
  });

  it("should add base element to slots", () => {
    const button = tc({
      base: "px-2 py-1 rounded",
      variants: {
        color: {
          primary: "bg-red-500",
          secondary: "bg-blue-500",
        },
      },
      defaultVariants: {
        color: "secondary",
      },
      slots: {},
    });

    const { base } = button();

    expect(base()).toEqual("px-2 py-1 rounded bg-blue-500");
  });

  it("should return slots elements", () => {
    const button = tc({
      base: "px-2 py-1 rounded",
      variants: {
        color: {
          primary: "bg-red-500",
          secondary: "bg-blue-500",
        },
      },
      defaultVariants: {
        color: "secondary",
      },
      slots: {
        icon: "h-5 w-5",
      },
    });

    const { base, icon } = button();

    expect(base()).toEqual("px-2 py-1 rounded bg-blue-500");
    expect(icon()).toEqual("h-5 w-5");
  });

  it("should return compound slots elements", () => {
    const button = tc({
      base: "px-2 py-1 rounded",
      variants: {
        color: {
          primary: "bg-red-500",
          secondary: "bg-blue-500",
        },
      },
      defaultVariants: {
        color: "secondary",
      },
      slots: {
        icon: {
          base: "h-5 w-5",
          slots: {
            iconButton: {
              base: "block",
              variants: {
                hidden: {
                  true: "hidden",
                },
              },
            },
          },
        },
      },
    });

    const { icon } = button();
    const { iconButton } = icon();

    expect(iconButton()).toEqual("block");
    expect(iconButton({ hidden: true })).toEqual("hidden");
    expect(iconButton({ class: "inline-block" })).toEqual("inline-block");
  });

  it("should return custom slots if variants set", () => {
    const button = tc({
      base: "px-2 py-1 rounded",
      variants: {
        color: {
          primary: "bg-red-500",
          secondary: "bg-blue-500",
        },
      },
      defaultVariants: {
        color: "secondary",
      },
      slots: {
        icon: {
          base: "h-5 w-5",
          variants: {
            visible: {
              true: "block",
            },
          },
        },
      },
    });

    const { base, icon } = button();

    expect(base()).toEqual("px-2 py-1 rounded bg-blue-500");
    expect(icon()).toEqual("h-5 w-5");
    expect(icon({ visible: true })).toEqual("h-5 w-5 block");
  });

  it("should merge options if more than one is provided", () => {
    const baseButton = {
      base: "px-2 py-1 rounded",
      variants: {
        color: {
          primary: "bg-red-500",
          secondary: "bg-blue-500",
        },
      },
    };

    const button = tc(baseButton, {
      base: "px-4",
      variants: {
        color: {
          primary: "text-white",
          secondary: "text-white",
        },
      },
    });

    expect(button({ color: "secondary" })).toEqual("py-1 rounded px-4 bg-blue-500 text-white");
  });

  it("should merge options if more than one is provided and they have slots", () => {
    const baseButton = {
      base: "px-2 py-1 rounded",
      variants: {
        color: {
          primary: "bg-red-500",
          secondary: "bg-blue-500",
        },
      },
      slots: {
        icon: {
          base: "h-5 w-5",
          variants: {
            visible: {
              true: "block",
            },
          },
        },
      },
    };

    const button = tc(baseButton, {
      base: "px-4",
      variants: {
        color: {
          primary: "text-white",
          secondary: "text-white",
        },
      },
      slots: {
        icon: {
          base: "h-10 w-10",
        },
        close: {
          base: "h-5 w-5",
          variants: {
            visible: {
              true: "block",
            },
          },
        },
      },
    });

    const { base, icon, close } = button();

    expect(base()).toEqual("py-1 rounded px-4");
    expect(icon()).toEqual("h-10 w-10");
    expect(close()).toEqual("h-5 w-5");
    expect(close({ visible: true })).toEqual("h-5 w-5 block");
  });
});
