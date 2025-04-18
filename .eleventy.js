module.exports = function(eleventyConfig) {
  // Set layout aliases
  eleventyConfig.addLayoutAlias("base", "base.njk");
  eleventyConfig.addLayoutAlias("project", "project.njk");

  // Copy assets directory to _site
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  };
};