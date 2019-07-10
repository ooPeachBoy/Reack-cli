//props的校验 引入模块
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { string, number } from "prop-types";
//设置组件PropTypes属性
/* class Bar extends Component {
  render() {
      return <h1>湖熟是 {this.props.name} --{this.props.id}</h1>;
  }
}
//props的校验
Bar.propTypes = {
  name:string,
  id: number
};
//设施props的默认值
Bar.defaultProps = {}; */
const Bar = ({ top, buttom }) => {
  return (
    <div>
      {top}
      互动
      {buttom}
    </div>
  );
};

ReactDOM.render(
  <div>
    <Bar top={<p>画虎</p>} buttom={<p>胡飒的</p>}>
      <span>husddh</span>
    </Bar>
  </div>,
  document.getElementById("root")
);
