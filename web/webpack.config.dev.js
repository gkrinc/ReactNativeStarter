var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './web/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '\'development\''
            }
        })
    ],
    module: {
        loaders: [
            // js
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: [                    
                    path.join(__dirname, '../components'),
                    path.join(__dirname, '../containers'),
                    path.join(__dirname, '../reducers'),
                    path.join(__dirname, './')
                ]
            },
            // CSS
            {
                test: /\.css$/,
                include: path.join(__dirname, '../app'),
                loader: 'style-loader!css-loader'
            },
            // Images
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader']
            },
            // JSON
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};
