//创建reducer 纯函数
import * as constants from "./constants";
import { object } from "prop-types";

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
    return Object.assign({}, state, {
      todoList: [...state.todoList, action.todo]
    });
  }
  if (action.type === constants.CHANGE_INPUT) {
    return Object.assign({}, state, { inputVal: action.value });
  }
  if (action.type === constants.DELETE_TODO) {
    return Object.assign({}, state, {
      todoList: state.todoList.filter(item => item.id !== action.id)
    });
  }
  console.log(state, action);
  return state;
};
