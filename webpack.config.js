let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
// 模块 happywebpack 可以实现多线程来打包 进程
// let Happypack = require('happypack');

module.exports = {
    mode: 'production',
    optimization: { // 实现了第三方和公共代码的抽离 commonChunkPlugins
      splitChunks: { // 分割代码块
          cacheGroups: { // 缓存组
            common: { // 公共模块
                chunks: "initial",
                minSize: 0,
                minChunks: 2
            },
            vendor: { // 把你抽离出来
                priority: 1,
                test: /node_modules/,
                chunks: "initial",
                minSize: 0,
                minChunks: 2
            }
          }
      }
    },
    entry: {
        index: './src/index.js',
        other: './src/other.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: './dist'
    },
    module: {
        noParse: /jquery/, // 不去解析jquery中的依赖库
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve('src'),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
                // use: 'Happypack/loader?id=js'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                // use: "Happypack/loader?id=css"
            }
        ]
    },
    plugins: [
        // new Happypack({
        //     id: 'js',
        //     use: [
        //         {
        //             loader: "babel-loader",
        //             options: {
        //                 presets: [
        //                     '@babel/preset-env',
        //                     '@babel/preset-react'
        //                 ]
        //             }
        //         }
        //     ]
        // }),
        // new Happypack({
        //     id: 'css',
        //     use: ['style-loader', 'css-loader']
        // }),
        // new webpack.DllReferencePlugin({ // 动态引用链接库
        //     manifest: path.resolve(__dirname, 'dist', 'mainfest.json')
        // }),
        new webpack.IgnorePlugin(/\.\/local/, /moment/), // 从moment库中忽略.local文件
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}