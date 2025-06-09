const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
    mode: 'development',
    output: {
        filename: "[name].scripts.js",
        path: path.resolve(__dirname, "production"),
        assetModuleFilename: "media/[name][ext][query]"
    },
    plugins: [new MiniCssExtractPlugin({ filename: "[name].styles.css" })],
    devServer: {
        static: path.resolve(__dirname, './production'),
        liveReload: true,
        devMiddleware: {
            publicPath: '/'
        }
    },
    module: {
        rules: [ ]
    },
    ignoreWarnings: [{ module: /node_modules/ }]
});