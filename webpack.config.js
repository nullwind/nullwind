const path = require("path");
const [server, client] = require("nullstack/webpack.config");

const mdxRule = {
  test: /\.mdx?$/,
  use: [
    {
      loader: "string-replace-loader",
      options: {
        search: "className",
        replace: "class",
        flags: "g",
      },
    },
    {
      loader: "@mdx-js/loader",
      options: {
        jsxRuntime: "classic",
        pragma: "$runtime.element",
        pragmaFrag: "$runtime.fragment",
        pragmaImportSource: "nullstack/runtime",
      },
    },
  ],
};

const alias = {
  "~": path.resolve(__dirname, "src/"),
  nullwind: path.resolve(__dirname, "lib/"),
};

function customServer(...args) {
  const config = server(...args);

  config.module.rules.push(mdxRule);

  config.resolve.alias = {
    ...config.resolve.alias,
    ...alias,
  };

  return config;
}

function customClient(...args) {
  const config = client(...args);
  const rule = config.module.rules.find((rule) => rule.test && rule.test.test(".css"));

  rule.use.push({
    loader: require.resolve("postcss-loader"),
    options: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  });

  config.module.rules.push(mdxRule);

  config.resolve.alias = {
    ...config.resolve.alias,
    ...alias,
  };

  return config;
}

module.exports = [customServer, customClient];
