# vue_webpack 1.0

> 为了方便vue项目的开发，做的一个简单的项目模板

## 参与人员

* 黄伟梁
* 联系方式：905387498@qq.com


## 指令
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



### 遇到的问题以及解决方案
> 1.打包时执行压缩命令npm run build将dist文件夹部署到服务器端报错		
> 原因：dist连同文件夹丢到根目录的话，访问dist的路径就变成了xxx.com/dist，这个dist路径是不存在的，因为路由并没有设置			
> 解决方法：把dist文件夹中内容丢进服务器，外面没有不要嵌套一层dist这个文件夹

