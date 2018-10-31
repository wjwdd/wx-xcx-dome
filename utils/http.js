const API_ROOT = 'https://yxrjapi.dongdukeji.com/index.php?m=Api&'
const imgurl = 'https://www.yifale.com'
var app = getApp()
// 请求封装
function Req(option) {
  this.url = option.url
  this.data = option.data
  this.method = option.method || 'get'
  this.isHiddenload = option.isHiddenload || false
  this.loadtext = option.loadtext || '加载中'
  this.time = option.time || 300
  this.istoken = option.istoken || false
  this.header = option.header || {
    'content-type': 'application/x-www-form-urlencoded',
    'Cookie': app.globalData.token ? 'PHPSESSID=' + app.globalData.token : ''

  }
  return new Promise((resolve, reject) => {
    if (!this.isHiddenload) {
      wx.showLoading({
        title: this.loadtext,
      })
    }
    //网络请求
    wx.request({
      url: API_ROOT + this.url,
      method: this.method,
      data: this.data,
      header: this.header,
      success: function(res) { //返回取得的数据
        console.log(res)
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          wx.showToast({
            title: '网络请求失败',
            icon: 'none',
            duration: 2000
          })
          return false
        }



      }.bind(this),
      error: function(e) {
        reject('网络出错');
      }.bind(this),
      complete: function() {
        setTimeout(function() {
          wx.hideLoading()
        }, this.time)

      }.bind(this)
    })
  });
}

function uploadFile(option) {
  this.url = option.url
  this.file = option.file
  this.data = option.data
  this.method = option.method || 'get'
  this.isHiddenload = option.isHiddenload || false
  this.loadtext = option.loadtext || '加载中'
  this.time = option.time || 1000
  this.istoken = option.istoken || false
  this.header = option.header || {
    'Accept': 'application/json',
    'content-type': 'application/x-www-form-urlencoded',

  }
  return new Promise((resolve, reject) => {

    if (!this.isHiddenload) {
      wx.showLoading({
        title: this.loadtext,
      })
    }
    //网络请求
    wx.uploadFile({
      url: API_ROOT + this.url,
      filePath: this.file,
      name: 'img',
      formData: this.data,
      success: function(res) {
        console.log(res)
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          wx.showToast({
            title: '网络请求失败',
            icon: 'none',
            duration: 2000
          })
          return false
        }
      },
      error: function(e) {
        reject('网络出错');
      },
      complete: function() {
        setTimeout(function() {
          wx.hideLoading()
        }, this.time)
      }
    })
  });
}


module.exports = {
  API_ROOT,
  imgurl,
  Req,
  uploadFile,
}