wxComputed在微信小程序开发中加入了computed自动计算属性的支持，此项目主要参考了Vue.js的依赖收集逻辑，数据变化后的视图更新操作则是通过小程序内部的Page.prototype.setData原型函数来完成。

### 构建打包
使用rollup进行构建
1. 安装依赖，`npm install`
2. 运行打包命令，`npm run build`，在dist目录下生成打包文件

### 使用例子
将打包后的`wxComputed.min.js`文件放在lib目录中，在需要用到的页面中引入<br>
或使用npm安装，`npm install --production wx-computed`
```html
<!-- index.wxml -->
<view class="container">
    <view>firstName</view>
    <input bindinput="inputEvent" data-type="firstName" value="{{firstName}}" />
    <view>lastName</view>
    <input bindinput="inputEvent" data-type="lastName" value="{{lastName}}" />
    <view>fullName: {{ fullName }}</view>
</view>
```
```javascript
// index.js
// 使用npm
import initComputed from 'wx-computed'
// 手动引入
import initComputed from '../../lib/wxComputed.min.js'

Page({
  data: {
    lastName: 'aa',
    firstName: 'bb',
  },
  inputEvent(e) {
    const {type} = e.currentTarget.dataset
    this.setData({
        [type]: e.detail.value,
    })
  },
  // 这里放入computed属性
  computed: {
    // 这是一个函数，返回值为此计算属性的值
    fullName() {
        return this.data.lastName + '-' + this.data.firstName
    },
  },
  onLoad() {
    // 在onLoad生命周期中执行computed属性初始化
    initComputed(this)
  },
})
```
