# 配置示例

基于 webpack 5 的配置示例(具体框架安装对应的框架和 loader 并添加配置即可)

## 升级修改

问题: [Cannot find module 'webpack-cli/bin/config-yargs']

- 处理方法一: 降级 `webpack-cli` 到 v3 版本
- 处理方法二: npm script 中配置 `webpack serve` 替换 `webpack-dev-server`

兼容: new webpack.NamedModulesPlugin() 废除

- 处理方法: 配置 `optimization.moduleIds: "named"`

兼容: devtool 配置添加了顺序规则

- 处理方法: 修改为 `eval-cheap-module-source-map` 获其他合法值

## 配置参考

```shell
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D typescript sass
yarn add -D ts-loader style-loader css-loader sass-loader
yarn add -D file-loader url-loader
yarn add -D friendly-errors-webpack-plugin clean-webpack-plugin html-webpack-plugin
yarn add -D cross-env
```

```json
"scripts": {
  "serve": "cross-env NODE_ENV=development webpack serve --mode=development",
  "build": "cross-env NODE_ENV=production webpack --mode=production"
},
```

```js
const path = require("path"); //用于处理模块路径
const webpack = require("webpack"); //用于引入webpack内的模块
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

const mode = process.env.NODE_ENV;
const isProduction = mode == "production";
const isDevelopment = mode == "development";
module.exports = {
  mode,
  entry: {
    // 入口配置
    main: "./src/index.ts",
  },
  output: {
    // 出口配置
    filename: `[name].[hash:8].entry.js`,
    chunkFilename: `[name].[chunkhash:8].chunk.js`,
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
      // 加载器相关配置
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.sass$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // implementation: require('sass'), 默认
              sassOptions: {
                indentedSyntax: true, // sass 语法默认不支持，需要手动设置
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|jpg|gif)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // 配置转换大小
              // fallback: 'file-loader' // 默认使用 file-loader
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 插件相关配置
    new webpack.ProgressPlugin({
      activeModules: false,
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR 插件
    // new FriendlyErrorsPlugin({
    //     compilationSuccessInfo: {
    //         messages: ['当前地址: xxx']
    //     }
    // }),
    new CleanWebpackPlugin(), //每次打包删除 resolve.path 文件夹下文件
    new HtmlWebpackPlugin({
      title: "Markdown-Editor",
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
  resolve: {
    // 模块解析相关配置,
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    extensions: [".js", ".ts", ".json", ".vue"],
  },
  devtool: isDevelopment && "eval-cheap-module-source-map", // source map 相关配置
  devServer: {
    // webpack-dev-server 相关配置
    hot: true,

    stats: {
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      color: true,
    },
  },
  optimization: {
    // 优化处理相关配置
    splitChunks: {
      // cacheGroups: {
      //   vue: {
      //     test: /[\\/]node_modules[\\/]vue/,
      //     name: 'vue',
      //     chunks: 'all',
      //   },
      //   monaco: {
      //     test: /[\\/]node_modules[\\/]monaco/,
      //     name: 'monaco',
      //     chunks: 'all',
      //   }
      // }
      chunks: "all",
      // minSize: 1 // 若公共依赖足够小是不会进行单独提取的, 这里仅为实现提取效果
    },
    moduleIds: "named", // 开启 HMR 时显示模块相对路径, 原 `new webpack.NamedModulesPlugin()`
  },
};
```
