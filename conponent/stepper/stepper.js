// conponent/stepper/stepper.js
const MAX = 2147483647;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    disabled: {
      type: Boolean,
      value: ''
    },
    disableInput: {
      type: Boolean,
      value: true
    },
    min: {
      type: null,
      value: 1
    },
    max: {
      type: null,
      value: MAX
    },
    step: {
      type: null,
      value: 1
    },
    value: {
      type: Number,
      value: 1
    },
    idx: {
      type: Number,
      value: 1
    },
    size: {
      type: String,
      value: 'max'
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
    onChange(type, isdis) {
      if (isdis) {
        return false;
      }

      const diff = type === 'minus' ? -this.data.step : +this.data.step;
      const value = Math.round((this.data.value + diff) * 100) / 100;
      this.setData({
        value: value
      });
    },
    onMinus(e) {
      var isdis = e.currentTarget.dataset.isdis
      this.onChange('minus', isdis);
      var idx = e.currentTarget.dataset.idx
      var data = {
        value: this.data.value,
        idx: idx
      }
      this.triggerEvent('oninput', data)
    },

    onPlus(e) {
      var isdis = e.currentTarget.dataset.isdis
      this.onChange('plus', isdis);
      var idx = e.currentTarget.dataset.idx
      var data = {
        value: this.data.value,
        idx: idx
      }
      this.triggerEvent('oninput', data)
    },
  }
})