const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const extensionConfig = {
    devtool: false,
    target: 'node',
    entry: path.join(__dirname, 'src/index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'panopticon.js',
        libraryTarget: 'commonjs',
        libraryExport: 'default',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    plugins: [],
};

module.exports = [extensionConfig];
