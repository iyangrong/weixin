// pages/xiaoxi/xiaoxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1: 1,
    num2: 1
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

  },
  sub1: function() {
    var that = this
    var n = that.data.num1 - 1
    if (n < 0)
    n = 0
    that.setData({
      num1: n
    })
  },
  add1: function () {
    var that = this
    that.data.num1 = that.data.num1 + 1
    that.setData({
      num1: that.data.num1
    })
  },
  sub2: function () {
    var that = this
    var n = that.data.num2 - 1
    if(n < 0) {
      n = 0
    }
    that.setData({
      num2: n
    })
  },
  add2: function () {
    var that = this
    that.data.num2 = that.data.num2 + 1
    that.setData({
      num2: that.data.num2
    })
  },
  go_to_pay: function() {
    wx.navigateTo({
      url: '../defray/defray',
    })
  }
})