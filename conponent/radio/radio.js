// conponent/radio/radio.js
const app = getApp()
const img_src = app.globalData.img_src
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    checked: {
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    img_src,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick(e) {

      var checked = e.currentTarget.dataset.checked
      var data = {
        value: checked
      }
      this.triggerEvent('onClick', data)
    }
  }
})