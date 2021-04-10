module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Enquanto Isso - CTI",
        short_name: "Enquanto Isso",
        start_url: "/",
        background_color: "#DD6B2E",
        theme_color: "#FACF54",
        display: "standalone",
        icon: "static/cat-icon.png",
      },
    },
    "gatsby-plugin-offline",
  ],
}
