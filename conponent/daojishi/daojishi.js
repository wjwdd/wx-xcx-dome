// conponent/daojishi/daojishi.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
  },
  properties: {
    time: {
      type: String,
      value: '',
    },
    text: {
      type: String,
      value: '还剩',
    },
    ishideday: {
      type: Boolean,
      value: false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    day: '00',
    hour: '00',
    minute: '00',
    second: '00',
  },

  /**
   * 组件的方法列表
   */
  created() {
    this.daojishi()
  },
  methods: {
    daojishi() {
      var timer = null;

      timer = setInterval(function() {

        var shenyuTime = Number(this.data.time) - new Date().getTime(); //计算剩余的毫秒数 

        var day = 0,
          hour = 0,
          minute = 0,
          second = 0; //时间默认值
        if (shenyuTime > 0) {
          day = Math.floor(shenyuTime / (1000 * 60 * 60 * 24));
          hour = this.data.ishideday ? Math.floor(shenyuTime / (1000 * 60 * 60)) : Math.floor(shenyuTime / (1000 * 60 * 60) % 24);
          minute = Math.floor(shenyuTime / 1000 / 60 % 60);
          second = Math.floor(shenyuTime / 1000 % 60);
          // 显示优化
          if (day <= 9) day = '0' + day;
          if (hour <= 9) hour = '0' + hour;
          if (minute <= 9) minute = '0' + minute;
          if (second <= 9) second = '0' + second;
        } else {
          day = '00';
          hour = '00';
          minute = '00';
          second = '00';

        }
        this.setData({
          day: day,
          hour: hour,
          minute: minute,
          second: second,
        })
      }.bind(this), 1000)
    }
  }
})