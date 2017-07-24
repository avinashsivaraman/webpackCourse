// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.join(__dirname, "build")
//     },
//     module: {
//         rules: [
//             // {
//             //     test: /\.js$/,
//             //     use: "babel-loader"
//             // },
//             // {
//             //     test: /\.css$/,
//             //     use: [
//             //         "style-loader",
//             //         "css-loader",
//             //     ]
//             // },
//             {
//                 test: /\.jpeg$/,
//                 use: [
//                     {
//                         loader: "file-loader",
//                         options: {
//                             limit: 10000
//                         }
//                     }
//                 ]
//             }
//         ]
//     },
//     //Plugins are classes, remember that. You have to create the object using new.
//     //
//     plugins: [
//         new webpack.optimize.UglifyJsPlugin(),
//         new webpack.ContextReplacementPlugin()
//     ]
// }
const commonConfig = require("./build-utils/webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = (env) => {
    console.log(env);
    const envConfig = require(`./build-utils/webpack.${env.env}`);
    return webpackMerge(commonConfig, envConfig);
}