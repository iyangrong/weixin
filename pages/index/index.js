//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tv: []
  },
  onLoad: function() {
    var that = this
    console.log(that.data.tv)
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d4ce573d9e0152ef81705b7/example_copy/api/app/getphotoes',
      success:function(res) {
        that.setData({
          imgUrls : res.data.imgUrls,
        })
        console.log(res)
      }
    }),
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d52318ea04f5e2ea734cdc5/example/gethaibao',
      success: function(res) {
        that.setData({
          tv: res.data.tv
        })
      }
    })
    /*that.setData({
      imgUrls: [
        'image/swiper1.jpg',
        'image/swiper2.jpg',
      ],
    })*/
  },
  tapqiandao: function() {
    wx.navigateTo({
      url: '../pay/pay',
    })
  },
  tapfujin: function () {
    wx.navigateTo({
      url: '../nearby/nearby',
    })
  },
  tapyouzhan: function () {
    wx.navigateTo({
      url: '../visit/visit',
    })
  },
  tapfuli: function () {
    wx.navigateTo({
      url: '../luck/luck',
    })
  },
})
