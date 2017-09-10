/**
 * Created by pusti on 29.07.2017.
 */
const webpack = require('webpack');
module.exports = function(debug) {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: debug,
                comments: debug,
                compress: {
                    warnings: debug,
                    drop_console: !debug
                }
            })
        ]
    };
};
