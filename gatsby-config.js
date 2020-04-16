/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `gif收藏夹`,
    description: `一个以收藏gif图片为目标的网站`,
    author: `3000`,
    siteUrl: `https://like-gif.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gif收藏夹`,
        short_name: `gif收藏夹`,
        start_url: `/`,
        background_color: `#1ca086`,
        theme_color: `#1ca086`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        siteId: "32c2baf043674b566784329e6663db90",
        head: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
  ]
}
