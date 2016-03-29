'use strict'
var path = require('path');

module.exports = {
    entry: './entry.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { 
                test: /\.js|jsx$/,
                loaders: ['babel'],
                exclude: /node_modules/ 
            }
        ]
    }
}
