const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssModules: true,
  webpack: function(config) {
    config.resolve.alias["Image"] = path.resolve(__dirname, "public/images/");
    config.resolve.alias["Font"] = path.resolve(__dirname, "public/fonts/");
    config.resolve.alias["Video"] = path.resolve(__dirname, "public/video/");
    config.resolve.alias["Component"] = path.resolve(__dirname, "./components");
    config.resolve.alias["~"] = path.resolve(__dirname, "./");
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|mp4)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});
