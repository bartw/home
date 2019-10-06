module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: { fonts: [{ family: `Roboto` }] }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bart Wijnants`,
        short_name: `Bart Wijnants`,
        start_url: `/`,
        background_color: `#252525`,
        theme_color: `#86CB92`,
        display: `minimal-ui`,
        icon: `static/bw.svg`
      }
    }
  ]
};
