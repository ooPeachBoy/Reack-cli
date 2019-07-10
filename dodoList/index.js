import React from "react";
import ReactDOM from "react-dom";
import "./assets/base.css";
let name = '糊/糊';
let list = [];
const handleDel = index => {
    list.splice(index, 1);
    ReactDOM.render(<App />, document.getElementById('root'));
}
const handleAdd = () => {
    let myInput = document.getElementById('myInput');
    let value = myInput.value;
    list.push(value);
    ReactDOM.render(<App />, document.getElementById('root'));
}
const App = () => {
    return (
        <div>
            <input type="text" id="myInput" />
            <button onClick={handleAdd}>点击-添加</button>
            <ul>
                {list.map((item, index) => {
                    return(
                        <li key={index} > {item}
                            <span onClick={() => {
                                handleDel(index)
                        } }>×</span>
                        </li>
                    )
                })}
            </ul>
      </div>  
    );
}
ReactDOM.render(<App />, document.getElementById('root'));

R/* eactDOM.render(
  <>
    <h1 className="box">李莉莉</h1>
        <button>点击</button>
        <br />
        <label htmlFor='abc'>abc - {name} </label>
        <input style=
            {{
                background: 'red',
            }} type="text" id='abc'/>
  </>,
  document.getElementById("root")
);
 */