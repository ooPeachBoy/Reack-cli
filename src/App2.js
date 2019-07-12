import React, { Component } from "react";
import store from "./store";
// import * as constants from "./store/constants";
import {createChgNameAct} from './store/actionCreates'
console.log(store.getState()); //返回state对象

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: store.getState().name
    };

    //订阅仓库
    store.subscribe(() => {
      console.log("仓库已经发生改变了");
      this.setState({
        name: store.getState().name
      });
    });
  }
  render() {
    return (
      <div>
        <h1>组件App</h1>
        <p>仓库中的name为：{this.state.name}😡😡😡</p>
        <button onClick={this.handleClick}>修改仓库的 name</button>
      </div>
    );
  }
  handleClick() {
    //1.定义action动作
    //     let action = {
    //       type: "CHANGE_NAME",
    //       value: "李大金"
    //     };
    //     //使用store.dispatch()派发动作
    //     store.dispatch(action);
    /* let action = {
      type: constants.CHANGE_NAME,
      value: "李大金"
    };
    store.dispatch(action); */
      //通过动作生成器的方式
      store.dispatch(createChgNameAct('李金金'))
  }
}

export default App;
