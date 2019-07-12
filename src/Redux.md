# Redux   状态管理器 
 > 与vuex相似但又不同（这是个废话）Redux是javascript的状态管理器，jq、原生js也可以用，只是用起来比较麻烦

 ## 状态state和数据的区别
    > 数据是我当前页面上所用到的东西，而状态也是一种数据，但他能引起页面的变化。

## React State 
 1. 在react当中，组件就可以被看成一个状态机（State Machines)，通过与用户的交互，实现不同状态，然后在渲染UI界面，使用户界面和数据保持一致性。
 2. 在实际开发当中项目会越写越大，那么state也不断变化，为了更好的控制state，于是react的状态管理器也就随之孕育而生了。
   
## Redux ---三大原则
 1. 单一数据源 -- 整个``state``被存储在一个object tree上，并且这个object tree只存在于唯一一个store中
 2. state 只读 -- 唯一改变state的方法就是出发action action是一个用于描述以发生事件的普通对象
 3. 纯函数来执行修改  纯函数接收两个参数，一个是上一次的state的数据和当前的action动作
   
### 流程
 1. yarn add redux
 2. 创建reduce 纯函数
 3. 基于reduce 创建store
 4. 在组件中通过store.getState() 获取store中state数据，并使用
 5. 组件中要修改store的state ，需要调用 store.dispatch(action)派发一个动作
   
## 动作类型常量
> 如果动作是一个字符串的话，一旦写错，效果出不来，并且不会报错，导致调试困难。
  1. store 目录下创建一个动作类型常量的文件， constants.js
  2. constants.js 暴露出需要使用的常量
  3. 修改action type 并且要修改reducer判断条件
   
## 动作生成器 actionCreates (异步操作的时候需要用上)
> 通过方法返回动作对象
1. store 目录下创建一个  动作生成器  文件。 actionCreates.js
2. actionCreates.js  暴露出各种动作生成函数
3. 组件中调用store.dispatch(actionCreate()) 
   


