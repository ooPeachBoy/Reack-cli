## antd  react -UI库
yarn add antd

## rudux-thunk 
普通动作，有异步操作
yarn add redux-thunk  

## redux-lgger  ---redux 日志中间件
1. yarn add redux-logger
2. 在 createStore 的地方传递，第二个参数，是一个 applyMiddleware
3. ok；

## 中间件
> 在action 到reducer 的中间加入一些额外的操作
> redux 中间件的实现原理，是通过重写 store.dispatch 方法来实现的
```js
let next = store.dispatch;
store.dispatch=action=>{
    if( action.type==='function'){
        action(store.dispatch,store.getState);
    }else{
        next(action)
    }
}
``` 