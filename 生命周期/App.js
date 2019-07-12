import React, { Component,PureComponent } from "react";

class Child extends PureComponent {
  render() {
    console.log("child");
    return (
      <div>
        <h1>李❀❀❀❀放❀</h1>
        <h2> 我的名字是{this.props.name} </h2>
        <button
          onClick={() => {
            this.props.onFn1("李😰😰");
          }}
        >父组件给改名字</button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "李😭😭",
      childName: "李😀垃圾"
    };
  }
  render() {
      console.log("app");
      
    return (
      <div>
        <h1>app组件</h1>
        <h2>❀❀❀❀❀❀❀❀❀对，这些都是{this.state.name} 的屁</h2>

        <button onClick={this.Click.bind(this)} >改名</button>
        <hr />
        <Child name={this.state.childName} onFn1={this.handleFn1} />
      </div>
    );
  }
  Click() {
    this.setState({
      name: "李😄😄"
    });
  }
  handleFn1 = name => {
    this.setState({
      name
    });
    console.log("fn1");
  };
}
