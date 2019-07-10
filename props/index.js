import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//元素，构成react应用的最小单位
//组件名称必须以大写开头
/* function Welcome(props) {
    return <h1>hello,{ props.name}</h1>
}
function App() {
    return (
        <div>
            <Welcome name='李立三' />
            <Welcome name='是的伙食费'/>
        </div>
    )
} */
//react组件没有全局注册和局部注册，每个新的React应用程序的顶层组件都是APP组件
//react组件分为两种：函数式组件和类组件
//函数式组件为无状态组件    ：状态---组件是否有数据
//类组件是有状态组件
//函数式组件return出去的就是其模板
 
/* 
类组件的定义
类组件必须集成react中的基础组件component
*/
/* class Foo extends Component{
    render() {
        return <div>dasgd </div>
    }
} */
const Foo = props => {
    return (
      <div>
        <h1>胡叔叔{props.id} </h1>
        <p>Foo {props.title} </p>
        
      </div>
    );
}
//类组件
class Bar extends Component{
    render() {
        return (
            <div>
                <h2>花花{ this.props.title} </h2>
            </div>
        )
    }
}
ReactDOM.render(
  [<Foo id="box" title="hello" />, <Bar id="box" title="hello" />],
  document.getElementById("root")
);