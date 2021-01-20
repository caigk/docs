# weppack

[指南](https://www.webpackjs.com/guides/)

## 安装

```bash
# install webpack
npm install fsevents --no-optional
npm install webpack webpack-cli --save-dev

#安装插件
npm install clean-webpack-plugin html-webpack-plugin uglifyjs-webpack-plugin redux-devtools-extension --save-dev

#安装loader
npm install css-loader file-loader node-sass xml-loader csv-loader --save-dev

#安装jsloader
#安装 es6 react支持
npm install @babel/core @babel/cli --save-dev;
npm install @babel/preset-env @babel/preset-flow @babel/preset-react @babel/preset-typescript --save-dev
npm install @babel/plugin-proposal-object-rest-spread --save-dev
npm install babel-loader --save-dev

#安装 开发服务
npm install webpack-dev-server webpack-merge --save-dev
npm install express webpack-dev-middleware --save-dev

#安装mocker服务
npm install mocker-api --save-dev

# 外部node_moudule  https://www.npmjs.com/package/webpack-node-externals
npm install webpack-node-externals --save-dev

```

## 常用模块

### stylint-loader

[npm包](https://www.npmjs.com/package/stylint-loader)
[github包](https://github.com/tj/styl)

```bash
#安装
npm install --save-dev stylint-loader

```

```js

```

### stylus-loader 解晰.styl

[npm包](https://www.npmjs.com/package/stylus-loader)
[github包](https://github.com/shama/stylus-loader)

```bash
#安装
npm install --save-dev stylus-loader

```

```js

loaders: [
    { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
  ]

```

### webpack-dev-server

* [config](https://webpack.js.org/configuration/dev-server/)


### webpack-node-externals

* [npm](https://www.npmjs.com/package/webpack-node-externals)
* [github](https://github.com/liady/webpack-node-externals)

```sh
npm install webpack-node-externals --save-dev
```

### mock

* [mock.js](https://github.com/nuysoft/Mock/wiki/Getting-Started)

```sh
npm install mockjs -D

```

```js
//webpack.config.js
const path = require('path');
const Mock = require('./mock/mock.js');

  devServer: {
    before(app){
      Mock(app)
    }
  }
```

### mocker-api

* [npm包](https://www.npmjs.com/package/mocker-api)
* [github](https://github.com/jaywcjlove/mocker-api)

```sh
npm install mocker-api --save-dev
```

```js


```
