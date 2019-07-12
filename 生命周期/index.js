import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App'

/* class App extends Component {
  /* constructor() {
    super();
    this.Click = this.Click.bind(this);
  } */
  // render() {
  //   this.fn1();
  //   return (
  //     <div>
  //       <h1>事件处理函数</h1>
  //       {<button onClick={this.Click}>点击 </button>}
  //      {/*  <button onClick={(event) => {
  //         this.Click();
  //       }}>点击 </button> */}
  //     </div>
      
  //   );
  // } */
  /* 
    事件处理函数handleClick,fn1()普通函数中this为谁调用他就是谁普通函数没有事件对象
    */
  // Click(event) {
  //   console.log(this)
  // }
  //实验性质
//   Click = () => {
//     console.log(this);
//   }
//   fn1() {
//     console.log(this);
//   }
// } 
ReactDOM.render(<App></App>,document.getElementById('root') )