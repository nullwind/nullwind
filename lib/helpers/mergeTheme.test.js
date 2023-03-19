import mergeTheme from "./mergeTheme";

describe("mergeTheme", () => {
  const theme = {
    modal: {
      wrapper: {
        base: "fixed inset-0 z-50 flex items-center justify-center",
      },
    },
  };

  const overrides = {
    modal: {
      wrapper: {
        base: "z-100",
      },
    },
  };

  it("should merge two theme objects", () => {
    const result = mergeTheme(theme, overrides);

    expect(result).toEqual({
      modal: {
        wrapper: {
          base: "fixed inset-0 flex items-center justify-center z-100",
        },
      },
    });
  });

  describe("when the first argument is undefined", () => {
    it("should throw an exception", () => {
      expect(() => mergeTheme(undefined, overrides)).toThrow("Theme is required");
    });
  });

  describe("when the second argument is undefined", () => {
    it("should return the first argument", () => {
      const result = mergeTheme(theme);

      expect(result).toEqual(theme);
    });
  });
});
