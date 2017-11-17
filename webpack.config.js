var path = require('path');
var HtmlWp = require('html-webpack-plugin');
var CleanWp = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'./src/js/main.js'),
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle_[chunkhash:8].js'
    },
    plugins: [
        new HtmlWp({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new CleanWp(['dist'])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },

            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },

            {
                test: /\.(html|tpl)$/,
                use: ['html-loader']
            },

            {
                test: /\.(png|jpg|jpeg|svg|gif|mp3)$/,
                use: [
                    {loader: 'url-loader',options: {limit: 10240}}
                ]
            },

            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname,'node_modules')
            },

            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    }
};