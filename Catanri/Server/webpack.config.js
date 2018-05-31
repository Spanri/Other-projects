var webpack = require('webpack');
const path = require('path');
const fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod;
    });
    
var serverConfig = {
    entry: {
        "app": "./src/app.js",
        "routes/index": "./src/routes/index.js",
        "routes/about": "./src/routes/about.js",
        "routes/comment": "./src/routes/comment.js",
        "routes/site": "./src/routes/site.js",
        "models/about": "./src/models/about.js",
        "models/comments": "./src/models/comments.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: nodeModules,
    target: 'node',
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: true,
        __dirname: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ],
    }
};

module.exports = [ serverConfig ];