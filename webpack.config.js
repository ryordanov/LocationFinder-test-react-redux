/* eslint-disable no-unused-vars */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [path.join(__dirname, '/client/index.js')],
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/public',
        filename: 'bundle.js'
    },
    watch: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    // devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader', // ?cacheDirectory=true
                        options: {
                            presets: [/*'es2015'*/ 'env', 'react'/* ,'babel-preset-stage-1' */, 'stage-2'],
                            cacheDirectory: true
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'
                    // {
                    //     loader: 'css-loader',
                    //     options: {
                    //         modules: true,
                    //         localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    //     }
                    // }
                ]
            }
        ]
    }
};
