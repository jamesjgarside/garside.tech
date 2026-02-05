module.exports = function(eleventyConfig) {
  // ===========================
  // PASSTHROUGH COPIES
  // ===========================
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_headers");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  
  // ===========================
  // COLLECTIONS
  // ===========================
  
  // Roles collection (sorted by start date, newest first)
  eleventyConfig.addCollection("roles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/roles/*.md").sort((a, b) => {
      return b.data.startDate - a.data.startDate;
    });
  });
  
  // Blog posts collection (sorted by date, newest first)
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
      return b.data.date - a.data.date;
    });
  });
  
  // Tag list - extracts all unique tags from blog posts
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tagSet = new Set();
    
    collectionApi.getFilteredByGlob("src/blog/*.md").forEach(post => {
      if (post.data.tags) {
        post.data.tags.forEach(tag => tagSet.add(tag));
      }
    });
    
    // Return sorted array of unique tags
    return Array.from(tagSet).sort();
  });
  
  // ===========================
  // FILTERS
  // ===========================
  
  // Format dates for human reading
  eleventyConfig.addFilter("readableDate", dateObj => {
    const date = new Date(dateObj);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  });
  
  // Format dates for RSS feeds (RFC 3339)
  eleventyConfig.addFilter("rfc3339Date", dateObj => {
    return new Date(dateObj).toISOString();
  });
  
  // Filter posts by tag
  eleventyConfig.addFilter("byTag", (posts, tag) => {
    return posts.filter(post => post.data.tags && post.data.tags.includes(tag));
  });
  
  // Convert relative URLs to absolute URLs (for RSS feeds)
  eleventyConfig.addFilter("htmlToAbsoluteUrls", (htmlContent, base) => {
    if (!htmlContent) return htmlContent;
    return htmlContent.replace(/href="\//g, `href="${base}/`)
                     .replace(/src="\//g, `src="${base}/`);
  });
  
  // Capitalize first letter (optional - for displaying tag names nicely)
  eleventyConfig.addFilter("capitalize", str => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  
  // ===========================
  // CONFIGURATION
  // ===========================
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
