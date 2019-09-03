//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [],
    substance: []
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
      url: 'https://www.easy-mock.com/mock/5d4ce573d9e0152ef81705b7/example_copy/api/app/gethaibao',
      success: function(res) {
        that.setData({
          substance: res.data.substance
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
      url: '../sign/sign',
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
  onClickTitle: function() {
    wx.navigateTo({
      url: '../company_news/company_news',
    })
  },
  company_news: function(e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../company_news/company_news?id=' + id
    })
  }
})
