/**
 * Created by pusti on 22.08.2017.
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
module.exports = (PATHS,isDebug) => merge([
    {
        entry: {
            main: ['babel-polyfill', PATHS.source+'/index.js']
        },
        output: {
            path: PATHS.build,
            filename: "bundle.js"
        },
        devtool: 'source-map',
        resolve: {
            alias: {
                styles: PATHS.build
            }
        },
        plugins: [
            new webpack.IgnorePlugin(
                /caniuse-lite\/data\/regions/
                ),
            new CleanWebpackPlugin(
                [PATHS.build]
                ),
            new webpack.DefinePlugin({
                _DEBUG: isDebug
                }),
            new webpack.HotModuleReplacementPlugin(),
            new FaviconsWebpackPlugin({
                logo: PATHS.source+'/favicon.png',
                inject: true,  // Inject the html into the html-webpack-plugin
                //background: '#fff',// favicon background color
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    opengraph: false,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            })
        ]
    },
]);