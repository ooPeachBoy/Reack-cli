import React, { Component } from "react";
import {
  getTodoList,
  postTodoList,
  createChgInputAct,
  delTodoList
} from "./store/actionCreats";
import store from "./store";
import { Button, List, Input, message, Popconfirm, Typography } from "antd";
import "../node_modules/antd/dist/antd.css";
import "./index.css";

/**
 * @description:  中间件函数 重写dispatch
 * @param {type}
 * @return:
 */
let next = store.dispatch;
store.dispatch = action => {
  if (typeof action === "function") {
    action(store.dispatch, store.getState);
  } else {
    next(action);
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: store.getState().inputVal,
      todoList: store.getState().todoList
    };
    store.subscribe(() => {
      console.log("仓库发生改变了");
      this.setState({
        todoList: store.getState().todoList,
        inputVal: store.getState().inputVal
      });
    });
  }
  /**
   * @description: 输入框输入事件处理
   * @param {type}
   * @return:
   */
  handleChange(e) {
    let value = e.target.value;
    store.dispatch(createChgInputAct(value));
  }
  handleAdd = () => {
    if (!this.state.inputVal) {
      message.error("输入不能为空");
      return;
    }
    store.dispatch(postTodoList());
  };
  handleDle = event => {
    console.log(event.target.parentNode.children[0].children[0].innerText);
    var idVal = parseInt(
      event.target.parentNode.children[0].children[0].innerText
    );
    console.log(idVal);
    store.dispatch(delTodoList(idVal));
  };
  render() {
    return (
      <div>
        <h1>todoList</h1>
        <div className="box">
          <Input
            type="text"
            placeholder="请输入todo"
            name="inputVal"
            value={this.state.inputVal}
            onChange={this.handleChange}
          />

          <Button type="primary" onClick={this.handleAdd}>
            点击添加
          </Button>
        </div>
        <hr />
        {/* antd的data */}

        {/* antd的list */}
        <h3 style={{ marginBottom: 16 }}>Default Size</h3>
        <List
          bordered
          dataSource={this.state.todoList}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark className="detal">
                {" "}
                {item.id}{" "}
              </Typography.Text>
              {item.name}

              <Button type="danger" onClick={this.handleDle}>
                删除
              </Button>
            </List.Item>
          )}
        />
      </div>
    );
  }

  /* componentDidMount 在第一次渲染后调用，只在客户端，之后组件已经生成对应的dom结构，可以通过 this.getDOMNode()来进行访问，如果你想和其他的JavaScript框架一起使用，可以在这个方法中调用setTimeout,setInterval或者发送AJAX请求等操作（防止异步阻塞） */
  componentDidMount() {
    store.dispatch(getTodoList());
  }
}

export default App;
