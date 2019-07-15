/* 创建store实例的文件 
1. 引入redux
2. 引入需要基于reducer函数
*/
import { createStore } from "redux";
import reducer from './reducer';
//调用createStore并传入reducer即可创建出store的实例
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
