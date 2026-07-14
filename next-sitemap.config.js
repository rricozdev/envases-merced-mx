/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://envaseslamerced.mx",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  sourceDir: "./.next",
  outDir: "./out",
  robotsTxtOptions: {
    // Genera un doble index que confunde a Google console search
    //additionalSitemaps: ["https://envaseslamerced.mx/sitemap.xml"],
  },
  transform: async (config, path) => {
    const loc = path === "/" ? path : `${path}.html`;
    if (path === "/cdmx") {
      return {
        loc,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    return {
      loc,
      changefreq: "weekly",
      priority: 0.7,
    };
  },
};
