const path = require('path');
const entry = path.resolve(__dirname, 'source/index.js');
console.log(entry);
const publicPath = '/build/';
const distPath = path.join(__dirname, 'dist');
module.exports = function (env) {
    let config = {
        entry: entry,
        devtool: "source-map",
        output: {
            path: distPath,
            filename: "[name].bundle.js?v=[chunkhash:4]",
        },
        optimization: {
            splitChunks: {
                chunks: "async",
                minSize: 5000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                name: true,
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    },
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    }
                }
            }
        },

        module: {
            rules: [
                {
                    test: /(\.js|\.jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        resolve: {
            modules: ["node_modules_local", "node_modules"],
        },

        watchOptions: {
            ignored: /node_modules/
        },

        plugins: []
    };
    return config;
};
