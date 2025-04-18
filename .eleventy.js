module.exports = function(eleventyConfig) {
  // Add a custom filter to get the current year
  eleventyConfig.addFilter("getYear", function() {
    return new Date().getFullYear();
  });

  // Layout aliases
  eleventyConfig.addLayoutAlias("base", "base.njk");
  eleventyConfig.addLayoutAlias("project", "project.njk");

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
