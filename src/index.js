import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { id } from "postcss-selector-parser";
class BaseFrom extends Component {
  state = {
    username: "",
    password: "",
    sex: "0", //1-男0-女
    cityId: "",
    isOk: false,
    cityList:[]
  };
  render() {
    return (
      <div>
        <h1>注册</h1>
        <label>
          <span>用户名：</span>
          <input
            type="text"
            placeholder="请输入用户名"
            name="username"
            value={this.state.username}
            onChange={this.handleChg}
          />
        </label>
        <label>
          <span>密码：</span>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChg}
          />
        </label>
        <label>
          <span>选择性别：</span>
          <input
            type="radio"
            value="0"
            name="sex"
            checked={this.state.sex === "0"}
            onChange={this.handleChg}
          />
          女
          <input
            type="radio"
            value="1"
            name="sex"
            checked={this.state.sex === "1"}
            onChange={this.handleChg}
          />
          男
        </label>
        <label>
          <span>选择出生城市：</span>
          <select
            value={this.state.cityId}
            name="cityId"
            onChange={this.handleChg}
          >
            <option disabled value="">
              请选择：
            </option>
            {this.state.cityList.map((item, index) => {
              return (<option value={item.id}>{item.name}</option>)
            })}
            
            
          </select>
        </label>
        <label>
          <span>请✔选协议</span>
          <input
            type="checkbox"
            name="isOk"
            checked={this.state.isOk}
            onChange={this.handleChg}
          />
        </label>
        <button disabled={this.isDisabled()} onClick={this.handleReg}>
          提交
        </button>
      </div>
    );
  }
  isDisabled = () => {
    if (
      this.state.username &&
      this.state.password &&
      this.state.cityId &&
      this.state.sex &&
      this.state.isOk
    ) {
      return false;
    } else {
      return true;
    }
  };
  handleChg = event => {
    let name = event.target.name;
    //将相应的数据进行赋值，需要将checkbox单独处理下
    if (name === "isOk") {
      this.setState({
        isOk: !this.state.isOk
      });
    } else {
      this.setState({
        [name]: event.target.value
      });
    }
  };
  handleReg = () => {
    //接口地址 ：POST http://localhost:9090/users
    //接口参数： username,password,sex:0/1,cityId:8989
    fetch("http://localhost:9090/users/", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        sex: parseInt(this.state.sex),
        cityId: this.state.cityId
      }),
      headers: { "content-type": "application/json" }
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
      });
  };
  getCityList=()=>{
  fetch('http://localhost:9090/cityList').then(response=>response.json()).then(res=>{
    console.log(res);
    this.setState ({
    cityList:res
    })
  })
  }
  componentDidMount() {
    this.getCityList()
  }
}
ReactDOM.render(<BaseFrom />, document.getElementById("root"));
