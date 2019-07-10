import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    render() {
        let list = ['apple', 'banana', 'pear'];
        // let result = [];
        // for (let i = 0; i < list.length; i++){
        //     result.push(<li >{list[i]} </li> )
        // }
        return (
            <div>
                <h1>请选择水果
                    <ul>
                        {list.map((item, index) => {
                            return (<li key={index}>{item} </li> )
                        })}
                    </ul>
                </h1>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));