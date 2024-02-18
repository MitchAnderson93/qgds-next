/** This was made for the sole purpose of webpackin' QH common files (based on QH version) */
const path = require('path');

/** Webpack plugins */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const PrecompilePlugin = require('./PrecompilePlugin');

module.exports = {
    mode: 'production',
    entry: [
        './.migrate/styles/global.scss',
        './.migrate/main.js'
    ],
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader", 
                    "import-glob-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.min.css', // CSS output path
        }),
        new CleanWebpackPlugin(),
        new PrecompilePlugin({
            'input': '../components/**/**/*.hbs',
            'manifest':'./components/**/js/manifest.json',
            'output': '../dist/components/',
            'helpersInput': './helpers/Handlebars/*.js',
            'helpersOutput': './helpers/Handlebars/*.js'
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
};
