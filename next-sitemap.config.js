/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://envaseslamerced.mx",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  sourceDir: "./.next",
  outDir: "./out",
  robotsTxtOptions: {
    additionalSitemaps: ["https://envaseslamerced.mx/sitemap.xml"],
  },
  transform: async (config, path) => {
    if (path === "/cdmx") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.7,
    };
  },
};
