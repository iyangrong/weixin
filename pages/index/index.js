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
    title: '',
    img: '',
  },
  onLoad: function() {
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d4bba08f2b91a1e003e950c/example/api/app/getphotoes',
      success:function(res) {
        that.setData({
          imgUrls : res.data.imgUrls,
        })
        console.log(res)
      }
    }),
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d4bba08f2b91a1e003e950c/example/api/app/gethaibao',
      success: function(res) {
        that.setData({
          title: res.data.title,
          img: res.data.img
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
