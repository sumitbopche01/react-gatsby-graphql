module.exports = {
  siteMetadata: {
    title: `SumitBopche`,
    description: `Software Developer`,
    author: `@sumitbopche`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      // Standard plugin with options example
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
        name: "data",
      },
    },
  ],
}

// module.exports = {
//   siteMetadata: {
//     title: `Travel Made Easy`,
//     description: `Kick off your next journey`,
//     author: `@gatsbyjs`,
//   },
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     `gatsby-plugin-styled-components`,
//     `gatsby-plugin-sharp`,
//     `gatsby-transformer-sharp`,

//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `image`,
//         path: `${__dirname}/src/assets/images`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `video`,
//         path: `${__dirname}/src/assets/videos`,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `gatsby-starter-default`,
//         short_name: `starter`,
//         start_url: `/`,
//         background_color: `#663399`,
//         theme_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//       },
//     },
//     `gatsby-transformer-json`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         path: `${__dirname}/src/data/`,
//       },
//     },
//     // this (optional) plugin enables Progressive Web App + Offline functionality
//     // To learn more, visit: https://gatsby.dev/offline
//     // `gatsby-plugin-offline`,
//   ],
// }
