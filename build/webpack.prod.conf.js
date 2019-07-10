//引入base merge
const baseConfig=require('./webpack.base.conf');
const merge=require('webpack-merge');
const path=require('path');
//暴露出去
module.exports=merge(baseConfig,{
    //mode dev
    mode:'production',
    
});