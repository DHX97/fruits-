// commponents/medal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type:Boolean,
      value:false
    },
    title: {
      type: 'string',
      value: ''
    },
    cancelText: {
      type: 'string',
      value: '取消'
    },
    cancelColor: {
      type: 'string',
      value: '#888888'
    },
    confirmText: {
      type: 'string',
      value: '确定'
    },
    confirmColor: {
      type: 'string',
      value: '#ffffff'
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
click(e){
  // console.log(e)
  var myEventDetail = {
    status: e.currentTarget.dataset.type
  };//detail对象，提供给事件监听函数
  var myEventOption = {};//触发事件的选项
  this.triggerEvent('click',myEventDetail,myEventOption) //注册一个名字叫click的事件
}
  },
  //激活插槽
  options:{
    multipleSlots:true
  }
})