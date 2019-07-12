# React生命周期
  ###### 函数组件没有生命周期，只有类组件有生命周期

  ### 1.constructor()
  ```js
  constructor(props)
  ```
  1. 在一个生命周期过程中，只会出发一次
  2. 做一些state初始化，this指向绑定的事情
  3. 不能在这个时期调用 ``setState``(修改仓库)--即也不能发送ajax请求
   
#### 1.1 static getDerivedStateFromProps(props,state) ---可以看作vue的计算属性
   > 1. 这个钩子函数，会在构造函数完成之后，执行一次
   > 2. 这个钩子函数，还会在后续组件有更新的时候，执行一次
   > 3. props是最新的props，state是当前的state setState是最新的
   > 4. 从属性获取派生状态
   > 5. 这个方法必须要有返回值，需要返回一个对象或者null，react会将返回值与state相合并
   > 6. 

 ### 2. render()--做渲染
1. 不接收参数
2. 需要return组件的模板内容
3. 特性---只要state或props发生改变，那么函数就会再次出发
4. 不允许调用setState--改变数据
   
<!-- #### componentWillMount() -->将要被废弃
      1
   
###   3. componentDidMount()  ---组件挂在完成
       1. 没有参数
       2. 组件挂在完成
       3. 在一次生命周期的过程中只会出发一次。 
       4. 发送ajax请求








1:05:34
尿you“李亚丽 2019/7/12 1:05:34
我的天 我弄出来了 我感觉啥也没改 也不知道咋回事
12:21:19
清都山水郎 2019/7/12 12:21:19
付完钱给我发个消息

尿you“李亚丽 2019/7/12 12:21:38
OK
16:11:49
清都山水郎 2019/7/12 16:11:49
[图片]

尿you“李亚丽 2019/7/12 16:12:22
[图片][图片][图片][图片][图片][图片][图片]
16:23:01
尿you“李亚丽 2019/7/12 16:23:01
# 生命周期

### 三大阶段

- 挂载
- 更新
- 卸载

### 一、挂载阶段

- constructor(props)
- stetic getDerivedStateFromProps(props,state)
- render()
- componentWillMount()
- componentDidMouunt()

### 二、更新阶段

- static getDerivedStateFromProps(props, state)
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentWillReceiveProps()
- componentWillUpdate()
- componentDidUpdate()

### 三、卸载

- componentWillUnmount()

**1.construtor(props)**

1. 在一个生命周期的过程中，只会触发一次。
2. 做一些 state 初始化、this 指向绑定的事情。
3. 不能在这个时期调用 setState

**1.1 static getDerivedStateFromProps(props, state) （静态方法）**

1. 这个钩子函数，会在构造函数完成之后，执行一次
2. 这个钩子函数 还会再后续的组件有更新的时候，执行一次
3. 在挂载阶段，props 就是默认传递过来的 props。state 就是在构造函数中定义的 state。
4. 在更新阶段，props 就是最新的 props。state 也是最新的 state。
5. 从属性获取派生状态
6. 这个方法必须要有返回值，需要返回一个对象或者返回 null ，react 会将这个返回值与当前组件的 state 数据做合并
7. 用来替代 componentWillReceiveProps

**2.render()**

1. 他不接受参数
2. 需要 rander 组件的内容
3. 只要 state 或 prpos 发生变化，那么函数会再次触发
4. 不允许调用 setState

**2.1componentWillMount（不推荐使用 将要被废弃）**

**3.componentDidMount()**

1. 没有参数
2. 组件挂载完成 （可以操作真实 DOM 了）
3. 在一个生命周期的过程中，只会触发一次。
4. 发送 ajax 请求

**4.shouldComponentUpdate(nextProps, nextState)**

1. 实现性能优化处理的。
2. 它必须要有返回值，返回的时布尔类型的值，如果返回的 true，那么就需要更新，如果返回 false 那么就不更新
3. 它就是 PurComponent 的实现原理。
4. 一个组件要么使用 PruComponent，要么实现 shouldComponentUpdate。两者选其一就行

**5.getSnapshotBeforeUpdate(prevProps, prevState)**

1. 在数据即将更新之前的最后一个事情，可以理解为 vue 中的 beforeUpdate
2. 替代这个 componentWillUpdate
3. 一般是处理，真实 DOM 更新之前的一个情况
4. 当使用这个生命周期函数的时候，就一定要使用 componentDidUpdate
5. 当使用这个生命周期函数的时候，必须要有返回值，他的返回值是给到 componentDidUpdate 的第三个参数去使用

**6.componentDidUpdate(prevProps, prevState, snapshot)**

1. 数据更新完成，真实 DOM 渲染完成
2. snapshot 这个参数是由 getSnapshotBeforeUpdate 函数的返回值来提供的
   **7.componentWillUnmout()**
3. 释放资源，比如 setInterval . addEvenetListern
