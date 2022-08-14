const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //removes old bundles from dist folder
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    module: {
        rules:[
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            filename: 'index.html',
            template: 'src/template.html', //creates new index.html according to template
        }),
        //new BundleAnalyzerPlugin(),

    ],
};