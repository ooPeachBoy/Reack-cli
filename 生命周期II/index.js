//显示区最后一条
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  state = {
    list: []
  }
  render() {
    return (
      <ul id="box">
        {this.state.list.map((item, index) => {
          return (<li key={index}>{item}</li>)
        })}
      </ul>
    );
  }
  setList() {
    let i = 0;
    //每隔一秒增加一条数据
    setInterval(() => {
      i++;
      this.setState({
        list: [...this.state.list, `这个是第${i}条数据`]
      });
    }, 100);
  }
  componentDidMount() {
    this.setList();
  }
  componentDidUpdate() {
    let box = document.getElementById('box')
    // console.log(box.scrollHeight);
    document.documentElement.scrollTop = box.scrollHeight - document.documentElement.clientHeight;

    
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
