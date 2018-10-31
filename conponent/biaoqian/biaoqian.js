// conponent/biaoqian/biaoqian.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: ''
    },
    Rname: {
      type: String,
      value: ''
    },

    img: {
      type: String,
      value: ''
    },

    isjiant: {
      type: Boolean,
      value: false
    },

    color: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    ceshi: function() {
      console.log('ceshi')
    },

  }
})