let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
// 模块 happywebpack 可以实现多线程来打包 进程
// let Happypack = require('happypack');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
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
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'dist', 'mainfest.json')
        }),
        new webpack.IgnorePlugin(/\.\/local/, /moment/), // 从moment库中忽略.local文件
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}