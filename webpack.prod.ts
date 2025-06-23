import path from "path";
import webpack from 'webpack';
import merge from "webpack-merge";
import config from "./webpack.config";
import TerserPlugin from "terser-webpack-plugin";

const prodConfig: webpack.Configuration = merge(config, {
    mode: 'production',
    optimization: {
        realContentHash: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: false,
            }),
        ],
    }
});

export default prodConfig;