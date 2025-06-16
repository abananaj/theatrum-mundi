import path from "path";
import webpack from "webpack";
import 'webpack-dev-server';
import merge from "webpack-merge";
import config from "./webpack.config";

const devConfig: webpack.Configuration = merge(config, {
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'prod'),
        liveReload: true,
        devMiddleware: {
            publicPath: '/'
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", /* Use style-loader for dev builds */
                    // MiniCssExtractPlugin.loader /* Use MiniCssExtractPlugin.loader for production builds */,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
});

export default devConfig;