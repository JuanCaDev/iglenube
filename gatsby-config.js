module.exports = {
  pathPrefix: "/gesias",
  siteMetadata: {
    siteUrl: "https://www.iglenube.com",
    title: "Iglenube - Administra la información de tu iglesia",
    titleTemplate: "%s · Iglenube",
    description: "La app que necesitas para gestionar tu iglesia",
    url: "https://www.iglenube.com", // No trailing slash allowed!
    image: "/images/pc.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@iglenube",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "149453311",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-smoothscroll`,
  ],
};