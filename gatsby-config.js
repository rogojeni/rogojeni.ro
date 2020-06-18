module.exports = {
  siteMetadata: {
    title: `Alianta Rogojeni`,
    siteTitle: `rogojeni`,
    siteTitleAlt: `rogojeni`,
    siteHeadline: `Alianta Rogojeni`,
    siteUrl: `https://rogojeni.ro`,
    siteDescription: `Home Page for Rogojeni Alliance`,
    siteLanguage: `ro`,
    siteImage: `/banner.jpg`,
    author: `Tiberiu Tofan`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rogojeni`,
        short_name: `Rogojeni`,
        start_url: `/gallery`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `browser`,
        icon: `src/images/banner.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
