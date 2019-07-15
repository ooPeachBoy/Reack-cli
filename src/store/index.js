import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer";
const composeEnxx = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * @description: 调用createStore 并传入reduce 即可创建出store的实例
 * @param {type} 
 * @return: 
 */ 

 /* 中间件的使用一定有顺序，主要与looger中间件需要最后调用 */
const store = createStore(
  reducer,
  composeEnxx(applyMiddleware(thunk, logger))
);



export default store;
