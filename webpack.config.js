import path from "path";
import { fileURLToPath } from 'url';
// import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";
// import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: "production",
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "scripts.js",
        path: path.resolve(__dirname, "public/"),
        assetModuleFilename: "./assets/[name].[ext]",
        clean: true,
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     //     title: "Home",
        //     //     filename: "index.html",
        //     //     template: path.resolve(__dirname, "./src/index.html"),
        //     //     scriptLoading: "module",
        //     //     inject: "body",
        //     favicon: path.resolve(__dirname, "./src/favicon.svg"),
        // }),
        new MiniCssExtractPlugin({ filename: "styles.css" }),
    ],
    // resolve: {
    //     extensions: [".ts", ".js"],
    // },
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            // {
            //     test: /\.html$/,
            //     use: ["html-loader"],
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4|ico)/,
                type: "asset/resource",
            },
        ],
    },
    optimization: {
        realContentHash: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: false,
            }),
        ],
    },
    ignoreWarnings: [{ module: /node_modules/ }],
};