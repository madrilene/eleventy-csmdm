/** All blog posts as a collection. */
export const getAllArticles = collection => {
  const articles = collection.getFilteredByGlob("./src/articles/**/*.md");
  return articles.reverse();
};

/** All markdown files as a collection for sitemap.xml */
export const onlyMarkdown = collection => {
  return collection.getFilteredByGlob("./src/**/*.md");
};
