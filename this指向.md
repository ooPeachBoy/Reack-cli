# React 事件处理函数中的this指向问题

## 区分普通函数和事件处理函数的区别
   #### 普通函数
   1. 普通函数的 ``this``指向调用者，谁调用就指向谁
   2. 普通函数不存在事件对象``（event）``

#### 事件处理函数 
1. 存在事件对象 ``event``
2. 事件处理函数中的默认undefined

## 解决this指向问题的四种问题

1. bind(this)
 ```js
 <button onClick={this.Click.bind(this)}>点击 </button>
       ``` 
2. 箭头函数
   ```js
  <button onClick={() => {this.Click();}}>点击 </button>
  ```
  3. 构造函数 
  ```js
        constructor() {
            super();
            this.Click = this.Click.bind(this);
        }
      {<button onClick={this.Click}>点击 </button>}
    ```
4. 实验性质的 ``public class fileds``语法 也可以 ，但是需要安装``@babel/plugin-proposal-class-properties``插件
```js
{<button onClick={this.Click}>点击 </button>}
Click = () => {console.log(this);}
```
如果是自己手动配置webpack的 还需要修改``babel.config.js``中关于插件的配置
```js
plugins: ["@babel/plugin-proposal-class-properties"]
```
#### 问题：为什么call、apply、bind都可以改变this指向问题，为什么这四种方式中没有其他两种？
  > 因为apply和call都会立即执行函数，而``bind会返回一个新的函数``



### 性能优化----节省性能
 1. 父组件render，那么子组件一定会render
  ``优化``
  > 父组件render的时候，如果子组件没有发生变化的话，那么不希望子组件也render。
  ``办法``
 > 在react中，我们可以让组件不要集成与Component。而是集成与PureComponent自处组件，那么就能实现上面的改良
 ``原理``
 > PureComponent在阻止内部，通过计算，如果上一次的props数据没有改变，那么他就会阻止rendren

如果state中法生变化，pureComponent不会发生变化或这响应，因为pureComponent只对props改变做出监听

### 推荐方式 
构造函数中bind和public class fileds

