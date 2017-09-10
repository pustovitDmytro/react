/**
 * Created by pusti on 30.07.2017.
 */
module.exports = (path, isDebug) => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.source,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['env', "stage-2","react"],
                    minified: !isDebug,
                    comments: isDebug,
                }
            }
        ]
    }
});