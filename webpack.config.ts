import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
  entry: {
    index: path.resolve(__dirname, "dev/index.ts")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home",
      filename: "index.html",
      template: path.resolve(__dirname, "dev/index.html"),
      scriptLoading: "module",
      inject: "body",
      favicon: path.resolve(__dirname, "dev/content/media/globe-logo.png"),
    }),
    new HtmlWebpackPlugin({
      title: "Web Projects",
      filename: "projects.html",
      template: path.resolve(__dirname, "dev/projects.html"),
      scriptLoading: "module",
      inject: "body",
    })
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4|ico)/,
        type: "asset/resource",
      },
    ],
  },
  ignoreWarnings: [{ module: /node_modules/ }],
};
export default config;

