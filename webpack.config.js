const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const styles = require('./webpack/styles');
const uglify = require('./webpack/uglify');
const images = require('./webpack/images');
const html = require('./webpack/html');
const json = require('./webpack/json');
const babel = require('./webpack/babel');
const common =require('./webpack/common.js');
const devServer = require('./webpack/devServer.js');

module.exports = (env = {}) => {
    const isDebug = !env.release;
    console.log((isDebug?"Debug ":"Release ")+"mode");
    const PATHS = {
        source: path.join(__dirname, 'src'),
        build: path.join(__dirname, 'build')
    };
    return merge([
        common(PATHS,isDebug),
        devServer(),
        styles(PATHS,isDebug),
        babel(PATHS,isDebug),
        html(PATHS),
        images(isDebug),
        json(),
        uglify(isDebug)
    ]);

};