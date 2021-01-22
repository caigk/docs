# js 测试技术

## mocha

* [mocha office](https://mochajs.org/)

### install

```sh
npm --save-dev install mocha @types/mocha
npm --save-dev install @babel/register      #使用babel编译
```

### .mocharc.js

```js
'use strict';

// Here's a JavaScript-based config file.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.

module.exports = {
  "extension": ["ts"],
  "spec": "src/**/*.spec.ts",
  "require": "test/babel-register.js"
};

```

### vscode mocha sidebar插件配置

```json
{
    "mocha.files.glob": "src/**/*.spec.ts",
    "mocha.requires": [
        "test/babel-register.js"
    ],
    "mocha.runTestsOnSave": "true"
}
```

```js
//test/babel-register.js
const register = require('@babel/register').default;
register({ extensions: ['.ts', '.tsx', '.js', '.jsx'] });

```

## chai

### install

* [chaiJs office](https://www.chaijs.com/)

```sh

npm --save-dev install chai @types/chai

```
