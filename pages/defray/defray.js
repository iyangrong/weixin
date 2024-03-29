// pages/defray/defray.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cheight: 0,
    uheight: 0,
    goods: [],
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let clientHeight = wx.getSystemInfoSync().windowHeight
    let clientWidth = wx.getSystemInfoSync().windowWidth

    let radio = 750 / clientWidth
    let ccheight = radio * clientHeight

    this.setData({
      cheight: ccheight,
      uheight: ccheight - 390
    })

    wx.setNavigationBarTitle({
      title: '支付',
    })

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
    this.setData({
      goods: wx.getStorageSync('goods')
    })
    console.log(this.data.goods)
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
  go_to_pay: function() {
    var that = this
    that.setData({
      isShow: true
    })
  },
  disappear: function() {
    var that = this
    that.setData({
      isShow: false
    })
  },
  address: function() {
    wx.navigateTo({
      url: '../address/address',
    })
  }
})