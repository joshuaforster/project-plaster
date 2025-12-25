/* eslint-disable @typescript-eslint/no-require-imports */

const withMDX = require("@next/mdx");

const mdxConfig = withMDX({
  extension: /\.mdx?$/
});

module.exports = mdxConfig({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"]
});
