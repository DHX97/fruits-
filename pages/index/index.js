//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerList: [{
        url: '/image/index/banner.png'
      },
      {
        url: '/image/index/banner.png'
      },
      {
        url: '/image/index/banner.png'
      },
      {
        url: '/image/index/banner.png'
      },
      {
        url: '/image/index/banner.png'
      },
    ],
    newClass: [{
        url: '/image/index/img1.png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        id: 1
      },
      {
        url: '/image/index/img1(1).png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        id: 2
      },
      {
        url: '/image/index/img1(2).png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        id: 3
      },
      {
        url: '/image/index/img1.png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        id: 4
      },
      {
        url: '/image/index/img1(1).png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        id: 5
      },
      {
        url: '/image/index/img1(2).png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        id: 6
      },
    ], 
    newClass2: [{
      id: 1,
      url: '/image/index/img(1).png',
      title: '脐橙修剪的4个误区，你必须要纠正!',
      desc:'脐橙修剪的4个误区，你必须要纠正!'
    },
    {
      id: 2,
      url: '/image/index/img(2).png',
      title: '脐橙修剪的4个误区，你必须要纠正！',
      desc: '脐橙修剪的4个误区，你必须要纠正!'
    },
    {
      id: 3,
      url: '/image/index/img@2x.png',
      title: '脐橙修剪的4个误区，你必须要纠正！',
      desc: '脐橙修剪的4个误区，你必须要纠正!'
    }
    ],
    newClass3: [{
      id: 1,
      url: '/image/index/img(5).png',
      title: '脐橙修剪的4个误区，你必须要纠正!'
    },
    {
      id: 2,
      url: '/image/index/img(3).png',
      title: '脐橙修剪的4个误区，你必须要纠正！'
    },
    {
      id: 3,
      url: '/image/index/img(6).png',
      title: '脐橙修剪的4个误区，你必须要纠正！'
    },
    {
      id: 4,
      url: '/image/index/img(4).png',
      title: '脐橙修剪的4个误区，你必须要纠正！'
    }
    ],
  },
  //事件处理函数
  bindViewTap: function() {
     
  },
  onLoad: function() {
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})