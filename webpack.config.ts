import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
  entry: {
    index: path.resolve(__dirname, "dev/index.ts"),
  },
  output: {
    filename: "[name].bundle.[contenthash].js",
    path: path.resolve(__dirname, "prod/"),
    assetModuleFilename: "media/[name].[hash][ext][query]",
    clean: true,
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
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // "style-loader", /* Use style-loader for dev builds */
          MiniCssExtractPlugin.loader /* Use MiniCssExtractPlugin.loader for production builds */,
          "css-loader",
          "sass-loader",
        ],
      },
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

