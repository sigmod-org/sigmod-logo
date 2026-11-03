import { HtmlBasePlugin } from "@11ty/eleventy";

// PATH_PREFIX serves the site from a subfolder, e.g. /sigmod-logo/ on GitHub Pages.
const pathPrefix = process.env.PATH_PREFIX || "/";

export default function (eleventyConfig) {
  if (pathPrefix !== "/") eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addGlobalData("layout", "base.njk");
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    htmlTemplateEngine: "njk",
    pathPrefix,
  };
}
