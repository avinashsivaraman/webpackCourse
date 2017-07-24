const commonPaths = require("./commonPaths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: "./src/",
    output: {
        filename: "bundle.js",
        path: commonPaths.outputPath
    },
    module: {
        rules: [
            {
                test: /\.jpeg/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin()
    ]
}

module.exports = config;