# ueditor vue版组件

## 安装
	npm i vue-ele-nav

## 0. 组件说明
##### ①. 依赖组件
* element-ui
* vue-router
* 路由按照下方规范修改

##### ②. 支持扩展
* i18n
* iconfont(class形式)

## 1. 修改之前路由的meta属性(路由文件只能添加一层，其余全靠meta控制，必须遵循)
* `title:''`：导航展示的标题内容
* `icon:''`：iconfont(class形式)，需要先在本地加入iconfont
* `show:false`：是否展示在导航栏，只有false才不展示
* `markName:''`：代替当前路由点亮的导航的name，show:false时才生效
* `parents:['a']`：当前页面show：false，且它的前一个页面也是show:false的，以此类推，
从展示的页面开始，按照层级依次push对应的出自己外的隐藏页面的name
* `replaceIndex: true`：当前页面是否在面包屑上与容器的名字合并，只有true才合并不显示自己的name
* `changeMark:''/['a']`：写在每个调用公共页面的路由上，替换指定路由的markName，可以使用字符串，也可以使用数组，适用于多个页面同时使用同一个公共隐藏页面

## 2. 参数
* `permissionTemplate`：权限对照表-->Array;必传
* `permissionList`：当前权限-->String;必传
* `cname`：自定义class-->String;非必传;默认*'ele-nav'*
* `myStyle`：自定义内联样式-->String;非必传;默认*''*
* `horizontal`：开启横向导航-->Boolean;非必传;默认*false*
* `accordion`：开启手风气模式-->Boolean;非必传;默认*false*
* `i18n`：标题开启国际化-->Boolean;非必传;默认*false*

## 3. 必传项获取（demo）
	const permissionTemplate = { // 权限对照表--键值必须是路由文件的name
		firstChild: '1',
		firstChildHome: '1-1',
		secondChild: '2',
		secondChildA: '2-1',
		secondChildB: '2-2'
	};
	const permissionList = ['1', '1-1', '2', '2-1']; // 当前权限


## 4. 自定义class（demo）