var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

var DIST_DIR = path.resolve(__dirname,'dist');
var SRC_DIR = path.resolve(__dirname,'src');

module.exports = {
    entry: SRC_DIR + '/app/js/app.jsx',
    output: {
        path: DIST_DIR + '/app/js',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // both .js and .jsx
                loader: 'eslint-loader',
                include: SRC_DIR,
                enforce: 'pre',
                options: {
                  fix: true,
                },
            },
            {
                test: /\.jsx?$/,
                include: SRC_DIR,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["react", "es2015", "stage-2"]
                        }
                    }
                ]
            },
            {
                test: /\.sass$/,
                include: SRC_DIR,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        extractPlugin
    ],
    resolve: {
        extensions: ['.js', '.jsx']
      }
};