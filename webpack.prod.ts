const path = require('path');
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(config, {
    mode: 'production',
    output: {
        filename: "[name].scripts.[contenthash].js",
        path: path.resolve(__dirname, "production"),
        assetModuleFilename: "media/[name].[hash][ext][query]",
        clean: true,
    },
    plugins: [new MiniCssExtractPlugin({ filename: "[name].styles.[contenthash].css" })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    optimization: {
        realContentHash: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: false,
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                },
            }),
        ],
    }
});