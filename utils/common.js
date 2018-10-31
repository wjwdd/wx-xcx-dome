const $comhttp = require('comapi.js')
const app=getApp()

function isphone(sMobile) {
  var isture = true
  if (!sMobile) {
    wx.showToast({
      title: '手机号不能为空！',
      icon: 'none',
      duration: 2000
    })
    isture = false
  } else {
    if (!(/^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-9]|18[0-9]|19[8-9])[0-9]{8}$/.test(sMobile))) {

      wx.showToast({
        title: '手机号不符合格式！',
        icon: 'none',
        duration: 2000
      })
      isture = false
    }
  }

  return isture
}
//日期转时间戳
function DateTime(time) {
  var date = new Date(time);
  var time1 = date.getTime();
  return time1
}
// 判断对象是否还有空值
function iskong(a) {
  var iskongobj = {
    key: '',
    iskong: false
  }
  for (var key in a) {
    if (a[key] === '') {
      iskongobj = {
        key: key,
        iskong: true
      }
      break
    }
  }
  return iskongobj
}

// 打开一个新页面
function open(url) {
  wx.navigateTo({
    url: url
  })
}
// 打开一个ww新页面
function sopen(url) {
  wx.switchTab({
    url: url
  })
}
// 当前页打开新页面
function href(url) {
  wx.redirectTo({
    url: url
  })
}

// 页面返回
function back(delta) {
  wx.navigateBack({
    delta: delta
  })
}

// 提示
function Toast(data) {
  wx.showToast({
    // 提示的内容
    title: data.title,
    // 图标(success)
    icon: data.icon ? data.icon : "none",
    // 自定义图标的本地路径,image 的优先级高于 icon
    image: data.image,
    // 提示的延迟时间
    duration: data.time ? data.time : 1500,
    // 是否显示透明蒙层，防止触摸穿透(false)
    mask: data.mask,
    // 接口调用成功的回调函数
    success: data.success,
    // 接口调用失败的回调函数
    fail: data.fail,
    // 接口调用结束的回调函数（调用成功、失败都会执行）
    complete: data.complete,
  })
}

// function getuserinfor() {
//   $comhttp.userinfor().then((res) => {
//     if (res.code == 1) {
//       app.
//     }
//   })
// }

module.exports = {
  isphone,
  DateTime,
  iskong,
  sopen,
  // 打开一个新页面
  open: open,
  // 当前页打开新页面
  href: href,
  // 页面返回
  back: back,
  // 提示
  Toast: Toast,
}