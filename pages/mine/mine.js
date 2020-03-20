// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        url:'/image/mine/shoucang.png',
        title: '我的收藏',
        desc: ' '
      },
      {
        url: '/image/mine/dingdang.png ',
        title: '我的订单',
        desc: ' '
      },
      {
        url: '/image/mine/jifen.png',
        title: '我的积分',
        desc: '10'
      },
      {
        url: '/image/mine/duihuan.png',
        title: '课程兑换',
        desc: '专家服务1'
      },
      {
        url: '/image/mine/zhuanjia.png',
        title: '专家服务',
        desc: '剩余次数1'
      }
    ],
    username:'',
    showModal: false
  },
  show(){
    this.setData({
      showModal:true
    })
  },
  myclick(e){
    // console.log(e)
    if(e.detail.status){
      console.log('点击了确定')
    }else{
      console.log('点击了取消')
      this.setData({
        showModal:false
      })
    }
  },
userInput(e){
  // console.log(e);
  this.data.username = e.detail.value;
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})