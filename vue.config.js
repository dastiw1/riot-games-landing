// eslint-disable no-var-requires
const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        zf: "foundation-sites/js",
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery",
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/app.scss";
          `,
      },
    },
  },
};
