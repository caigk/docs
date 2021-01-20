# REACT

## 常用组件

| 技术                                                                              |说明                                                     |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [React](https://github.com/facebook/react)                                        | JavaScript library for building user interfaces  |
| [React Router](https://github.com/rackt/react-router)                             | React Router is a complete routing library for React    |
| [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)               | React Router is a complete routing library for React         |
| [Redux](http://redux.js.org/)                                                     | Redux is a predictable state container for JavaScript apps           |
| [Redux Immutable](https://github.com/gajus/redux-immutablejs)                     | Redux & Immutable integration                            |
| [React Router Redux](https://github.com/reactjs/react-router-redux)               | Simple bindings to keep react-router and redux in sync         |
| [redux-composable-fetch](https://github.com/jasonslyvia/redux-composable-fetch)               | 可注入fetch中间件         |
| [redux-thunk](https://github.com/reduxjs/redux-thunk)               | 一个比较流行的 redux 异步 action 中间件(颗粒化，引入dispitch,getstate参数)         |
| [classnames](https://github.com/JedWatson/classnames)               | A simple JavaScript utility for conditionally joining classNames together.         |

### react router

### react-redux-router

作用：将history变的变化同步到state.

* [github](https://github.com/reactjs/react-router-redux)

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from '<project-path>/reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount')
)
```

```js
// Dispatch from anywhere like normal.
store.dispatch(push('/foo'))
```

## install

```sh
# install react
npm install --save react react-dom react-router react-router-dom
# install redux
npm install --save history redux react-redux react-router-redux
# install fetch
npm install --save redux-composable-fetch redux-thunk

#install bootstroop
npm install --save bootstrap react-bootstrap

```

## Flux Standard Action （FSA）

type
必需字段。action的type字段标识了当前发生行为的本质特征。相同类型的行为所对应的action的type值必须是严格相等的。它往往取值为字符串常量。

payload
可选字段。可以是任意类型的数据，顾名思义，它存放当前action的“负载”内容。当error字段值为true时候，payload的值应当是一个Error对象。

error
可选字段。当取值为true时，当前action代表了某处发生了错误。

meta
可选字段。可以是任意类型的数据。用来存放非负载内容的额外信息。在Redux项目中，典型的使用meta的例子就是存放那些用来给middleware使用的信息，理论上meta的内容不会影响reducer的行为。

## SAGA

* [doc](https://redux-saga.js.org/)
* [中文doc](https://redux-saga-in-chinese.js.org/)

```sh
npm install redux-saga --save


```

## regenerator支持

https://babel.docschina.org/docs/en/babel-plugin-transform-runtime/

```sh
npm install --save @babel/runtime
npm install --save-dev @babel/plugin-transform-runtime

```

```js
"plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ],
]
```
