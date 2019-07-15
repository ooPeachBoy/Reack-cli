import React, { Component } from "react";
import store from "./store";
console.log(store.getState()); //返回state对象

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: store.getState().name
    };
  }
  render() {
    return (
      <div>
        <h1>组件App</h1>
        <p>仓库中的name为：{this.state.name}😡😡😡</p>
      </div>
    );
  }
}

export default App;
