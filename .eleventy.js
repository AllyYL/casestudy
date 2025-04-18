module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias("base", "base.njk");
  eleventyConfig.addLayoutAlias("project", "project.njk");

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};