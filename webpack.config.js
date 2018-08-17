const webpack=require("webpack")
const path=require("path");
// css
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// html模板生成
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 删除dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 提升编译速度
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
// 显示编译进程工具
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk');
const NODE_ENV=process.env.NODE_ENV;
const config={
    entry:"./src/index.js",
    mode:NODE_ENV,
    output:{
        path:path.resolve(__dirname,"dist"),
        filename: "[name].[hash].js"
    },
    devtool:NODE_ENV=='development'?'cheap-eval-source-map':'source-map',
    // 压缩
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
    },
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                loader: ['babel-loader'],
                exclude:/node_modules/,
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    {
                        loader:"css-loader",
                        options:{
                            modules: true,
                            localIdentName:"[name]__[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader:"less-loader",
                        options:{
                            modules: true,
                            sourceMap:true,
                            localIdentName:"[name]__[local]___[hash:base64:5]"      
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,'css-loader?modules',
                ]
            },
            {
                test:/\.css$/,
                exclude:/src/,
                use:[
                    { loader: "style-loader",},
                    {
                        loader: "css-loader",
                        options:{
                            importLoaders:1
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|ttf|svg)$/,
                exclude: /(node_modules|bower_components)/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    {
                        loader: 'url-loader?limit=81920',   //limit 图片大小的衡量，进行base64处理
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: NODE_ENV=='development'?"[name].css":'[name]-[hash].css',
            chunkFilename: NODE_ENV=='development'?"[id].css":'[id][hash].css',
        }),
        new HtmlWebpackPlugin({
            title:"gamebank register",
            filename:"index.html",
            hash:true,
            template:path.resolve(__dirname,"src/index.html")
        }),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        })
    ],
}
if(NODE_ENV=='production'){
        // 删除dist目录
    config.plugins.push(new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]))
    // 提升编译速度替换自带webpack.optimize.UglifyJsPlugin;
    config.plugins.push(new WebpackParallelUglifyPlugin({
        uglifyJS: {
          output: {
            beautify: false, //不需要格式化
            comments: false //不保留注释
          },
          compress: {
            warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
            drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
            collapse_vars: true, // 内嵌定义了但是只用到一次的变量
            reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
          }
        }
      })
  )
}
if(NODE_ENV=='development'){
    console.log("1111")
    config.devServer={
        host: '192.168.1.101',
        contentBase: path.resolve(__dirname, "dist"), //静态文件根目录
        port: 9090, // 端口
        overlay: true,
        inline:true,//打包后加入一个websocket客户端
        hot:true,
        compress: true, // 服务器返回浏览器的时候是否启动gzip压缩
    }
       // 开启热模块更新
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
       // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
    config.plugins.push(new webpack.NamedModulesPlugin(),)
}
module.exports=config;