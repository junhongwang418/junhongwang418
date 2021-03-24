/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              backgroundColor: "transparent",
            },
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: "Junhong Wang",
    description: "I'm Junhong. I'm a student at UCLA studying Computer Science. On this website, I document interesting things I learned and share my knowledge with you.",
    url: "https://junhongwang.me", // No trailing slash allowed!
    image: "/profile.png", // Path to your image you placed in the 'static' folder
  },
}
