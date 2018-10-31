// conponent/model/model.js
Component({
  properties: {
    modalHidden: {
      type: Boolean,
      value: true
    },
    Mwidth: {
      type: String,
      value: '100%'
    },
    Mposition: {
      type: String,
      value: 'center',
    }
  },
  data: {
    // 这里是一些组件内部数据
    text: "text",
    wzclass: 'modal_box_center',
    Mstyle: '',
    enter: false
  },
  attached() {
    if (this.data.Mposition == 'center') {
      console.log(this.data.Mposition)
      this.setData({
        wzclass: 'modal_box_center',
        ani: 'modal_box_center_ani'
      })
    } else if (this.data.Mposition == 'bottom') {
      console.log(this.data.Mposition)
      this.setData({
        wzclass: 'modal_box_bottom',
        ani: 'modal_box_bottom_ani'
      })
    }

  },
  ready() {

  },
  methods: {
    // 这里放置自定义方法
    modal_click_Hidden: function() {
      console.log(111)
      this.setData({
        modalHidden: true,
      })
    },

  }
})