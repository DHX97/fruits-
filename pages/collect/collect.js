// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag: true,
    newClass: [{
        url: '/image/index/img(4).png ',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        desc: '脐橙修剪的4个误区，你必须要纠正！',
        id: 1
      },
      {
        url: '/image/index/img.png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        desc: '脐橙修剪的4个误区，你必须要纠正！',
        id: 2
      },
      {
        url: '/image/index/img1.png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        desc: '脐橙修剪的4个误区，你必须要纠正！',
        id: 3
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onCollected(e) {
    this.setData({
      tag: !this.data.tag
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})