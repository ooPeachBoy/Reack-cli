//创建reducer 纯函数
import * as constants from "./constants";

let initState = {
  todoList: [],
  inputVal: ""
};
export default (state = initState, action) => {
  if (action.type === constants.CHANGE_VAL) {
    return Object.assign({}, state, { todoList: action.todoList });
  }
  if (action.type === constants.INIT_TODO) {
    return Object.assign({}, state, { todoList: action.list });
  }
  if (action.type === constants.TODO_ADD) {
    return Object.assign({}, state, { todoList: [...state.todoList, action.todo] });
  }
  if (action.type === constants.CHANGE_INPUT) {
    return Object.assign({}, state, { inputVal: action.value });
  }
  console.log(state, action);
  return state;
};
