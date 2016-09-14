# vue_ajax_list_example
一个简单的vue.js+Ajax+zepto可切换列表实例，在学习vuejs就找了这个例子重构了一下。
这个例子包含了vue.js的for,show ,if等命令，并写了一个小组件，结合zepto做了ajax数据交互演示，基本涵盖新手可能需要看到的示例点。写得不好，欢迎各位Issues。

## 下载
直接点[这里](https://github.com/doterlin/vue_ajax_list_example/archive/master.zip)下载zip,或者使用git：git clone https://github.com/doterlin/vue_ajax_list_example.git

## 适用于移动端
做了一些自适应，css里面包含一些简化的reset移动端（重置默认样式）,可以参考作为移动端开发的base样式。

## vue.js
vue.js大概是一个青量的MVVM框架（不依赖任何第三方库，所以这里可以不适用zepto）,这个就不多说了吧。可以看看官网资料：[vue.js](http://cn.vuejs.org)

## zepto.js
算是一个缩水版的jQeury，一般用在移动端。[zepto文档].(http://www.css88.com/doc/zeptojs_api/)

## 运行
直接运行index.html即可查看效果
或者[点这里](https://doterlin.github.io/blog/vuejs/vue_ajax_list_example)查看演示(由于github的https协议问题，这里使用假数据)

## 注意：ajax用的是一个线上的可跨域地址
