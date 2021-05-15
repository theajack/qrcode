const path = require('path');

module.exports = () => {
    return {
        mode: 'production',
        entry: path.resolve('./', 'public/main.ts'),
        output: {
            path: path.resolve('./', 'public'),
            filename: 'index.min.js',
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        externals: {},
        module: {
            rules: [{
                test: /(.ts)$/,
                use: {
                    loader: 'ts-loader'
                }
            }, {
                test: /(.js)$/,
                use: [{
                    loader: 'babel-loader',
                }]
            }, {
                test: /(.js)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
                options: {
                    configFile: './.eslintrc.js'
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }]
        }
    };
};