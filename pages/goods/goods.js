// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "https://f11.baidu.com/it/u=2465775762,1509670197&fm=72",
      "https://f10.baidu.com/it/u=3087422712,1174175413&fm=72",
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4283119070,1560877918&fm=26&gp=0.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    neirong: "木村耀司登山旅行大学生户外情侣双肩背包外带小背包",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    console.log(id)
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