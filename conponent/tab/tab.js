// conponent/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tablists: {
      type: Array,
      value: []
    },
    type: {
      type: String,
      value: 'ddtab'
    },
    current: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabclick(e) {
      this.setData({
        current: e.currentTarget.dataset.idx
      })
      var myEventDetail = {
        index: e.currentTarget.dataset.idx
      } // detail对象，提供给事件监听函数
      this.triggerEvent('myevent', myEventDetail)
    }
  }
})