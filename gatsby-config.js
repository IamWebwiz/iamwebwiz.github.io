require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-tidio-chat",
      options: {
        tidioKey: process.env.TIDIO_PUBLIC_KEY,
        enableDuringDevelop: false,
      },
    },
  ],
};
