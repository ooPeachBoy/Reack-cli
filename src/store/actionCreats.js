import * as constants from "./constants";

// 生成CHANGE_VAL的动作函数
export const createChgInputAct = value => {
  //返回动作
  return {
    type: constants.CHANGE_INPUT,
    value
  };
};

export const createTodoAddAct = todo => ({
  type: constants.TODO_ADD,
  todo
});

export const postTodoList = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({
        name: getState().inputVal
      }),
      headers: {
        "Content-Type": " application/json"
      }
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        dispatch(createTodoAddAct(res));
      });
  };
};

/**
 * @description: 初始化仓库 Ajax
 * @param {Array} todoList
 * @return:
 */
export const createInitTodoAct = list => ({
  type: constants.INIT_TODO,
  list
});

/**
 * @description: 初始化todoList的数据ajax
 * @param {Array}
 * @return:
 */
export const getTodoList = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/todos")
      .then(response => response.json())
      .then(res => {
        dispatch(createInitTodoAct(res));
      });
  };
};
/**
 * @description: 从前端输入的数据传入到数据库当中
 * @param {type} 派发一个动作AJXE
 * @return:
 */
/**
 * @description: 根据id删除所点击数据
 * @param {type} Ajax
 * @return: DELETE_TODO;
 */
export const createDleTodoAct = id => ({
  type: constants.DELETE_TODO,
  id
});
export const delTodoList = idVal => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/todos/${idVal}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        dispatch(createDleTodoAct(idVal));
       });
  };
};
