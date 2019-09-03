// pages/faxian/faxian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    discount: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d4ce573d9e0152ef81705b7/example_copy/api/app/getimgs',
      success: function(res) {
        that.setData({
          discount: res.data.discount,
        })
        console.log(res.data.discount)
      }
    })
    wx.setNavigationBarTitle({
      title: '商品浏览',
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

  },
  goods: function(e) {
    var i = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../goods/goods?id=' + i
    })
  }
})