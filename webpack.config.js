const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};