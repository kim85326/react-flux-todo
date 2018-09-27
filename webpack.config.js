module.exports = {
    entry: './js/index.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            }
        ]
    },
    resolve: {
        // 使用 import 時 .jsx 和 .js 不需打副檔名
        extensions: [".jsx", ".js"]
    }
};