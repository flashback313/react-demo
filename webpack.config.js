'use strict'
var path = require('path');

module.exports = {
    entry: './entry.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: [
            path.resolve(__dirname, "/node_modules")
            ],
            loader: "babel-loader",
        }]
    }
}
