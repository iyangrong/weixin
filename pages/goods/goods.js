// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    neirong: "",
    after: '',
    before: '',
    jianjie: '',
    brand: '',
    place: '',
    weight: '',
    time: '',
    date: '',
    fangfa: '',
    people: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d52318ea04f5e2ea734cdc5/example/getspecific/' + options.id,
      success: function(res) {
        that.setData({
          imgUrls: res.data.imgUrls,
          neirong: res.data.neirong,
          after: res.data.after,
          before: res.data.before,
          jianjie: res.data.jianjie,
          brand: res.data.brand,
          place: res.data.place,
          weight: res.data.weight,
          time: res.data.time,
          date: res.data.date,
          fangfa: res.data.fangfa,
          people: res.data.people,
        })
      }
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