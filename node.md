# react-cli--自己配置
## build防止webpack的配置文件

## public静态资源文件见，后续经过copy-webpack-plugin这个插件主动复制到打包生成的目录下面去

## src源代码文件夹，里面的内容都会被webpack打包



## props 只读
   组件无论式使用函数声明还是通过class生命，都绝不能修改自身的props，state允许React组件随用户操作、网络相应或者随其他变化而更改输出的内容

   组件必须要有组件的模板内容，函数组件必须要有return

   类组件的定义
   类组件必须集成react中的基础组件component, 类组件必须有render方法并且return


   props 
   1. 将组件看成一个方法，props相当于传递下去的参数对象
   2. jsx语法如果占据多行，那么使用小括号，将其包裹
   props默认值

   ```js
   Foo.defaultProps={
       name:'花花'
   }
   ```
   props的校验
   ```js
   import { string, number } from "prop-types";
   Foo.propTypes={
       name:string,
       id:number
   }
   ```

   react中没有插槽
   ```js
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
```
默认暴露的东西，只能默认引入  export default ----import from ;