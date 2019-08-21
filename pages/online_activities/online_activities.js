// pages/online_activities/online_activities.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sdate: '2019-08-21',
    stime: '10:00',
    edate: '2019-08-21',
    etime: '12:00',
    ifShow: false,
    default_content: '请选择'
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

  bindStartDateChange: function(e) {
    this.setData({
      sdate: e.detail.value
    })
  },

  bindStartTimeChange: function(e) {
    this.setData({
      stime: e.detail.value
    })
  },

  bindEndDateChange: function (e) {
    this.setData({
      edate: e.detail.value
    })
  },

  bindEndTimeChange: function (e) {
    this.setData({
      etime: e.detail.value
    })
  },

  bindShowMsg: function() {
    this.setData({
      ifShow: !this.data.ifShow
    })
  },

  specific_options: function(e) {
    let name = e.currentTarget.dataset.name
    this.setData({
      default_content: name,
      ifShow: false
    })
  }
})