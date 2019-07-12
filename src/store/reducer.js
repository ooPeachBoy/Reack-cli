//纯函数 概念1. 不能对参数进行修改2 相同的输入一定产生相同的输出3. 不能产生副作用，不能写异步代码

/* 1.仓库的reducer函数会默认执行一遍
 *state上次仓库中的state的数据，action这次的动作对象
 */
// import { CHANGE_NAME } from './constants';
import * as constants from "./constants";
const initState = {
  name: "我是李花花"
}; //定义仓库的初始化仓库
export default (state = initState, action) => {
  console.log(state);
  console.log(action);
  if (action.type === constants.CHANGE_NAME) {
    console.log(1);
    return Object.assign({}, state, { name: action.value });
  }
  return state;
};
