// conponent/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
  },
  properties: {
    hidden: {
      type: Boolean,
      value: true,
    },
    context: {
      type: String,
      value: '1213',
    },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    hidden:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    open(opt={}){

      this.setData({
        context: opt.context,
        hidden: false,
        btns: opt.btns,
      })
       
    },
    buttonTapped(e){
      console.log(this.data.btns[idx])
      var idx = e.currentTarget.dataset.idx
      this.data.btns[idx].onTap()
    },
    sure(){
      this.triggerEvent('sure')
      this.hide
    },
    hide(){
      this.setData({
        hidden: true
      })
    },
    quxiao(){
      this.setData({
        hidden:true
      })
      this.triggerEvent('quxiao')
    }
  }
})