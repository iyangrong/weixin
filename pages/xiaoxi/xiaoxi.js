// pages/xiaoxi/xiaoxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [
      {
        imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3228859820,882679108&fm=26&gp=0.jpg',
        title: '木村耀司登山旅行大学生户外情侣双肩背包外带小背包',
        price: 193.00,
        num: 2,
      },
      {
        imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=629828505,2502519811&fm=26&gp=0.jpg',
        title: '2019新款夏女装上衣桑蚕丝连衣裙百搭打底衫女真丝短袖衬衫t恤女',
        price: 567.80,
        num: 5,
      },
      {
        imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=585542670,572354621&fm=26&gp=0.jpg',
        title: 'MAXRIENY2019秋款时尚蕾丝网纱V领连衣裙女中袖中长纱裙收腰显瘦',
        price: 392.40,
        num: 1,
      },
      {
        imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3959399553,898244408&fm=26&gp=0.jpg',
        title: 'LeeX-LINE女款19秋冬新品蓝色修身小脚牛仔裤LWZ4113HH8SB',
        price: 180.89,
        num: 3,
      },
    ],
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
  sub1: function(e) {
    var i = e.currentTarget.dataset.index
    
    var t = this.data.goods[i].num
    if(t == 1) {
      t = t
    }
    else {
      t = t - 1
    }
    var nu = 'goods[' + i + '].num'
    this.setData({
      [nu]: t
    })
  },
  add1: function (e) {
    var i = e.currentTarget.dataset.index
    
    var t = this.data.goods[i].num + 1
    
    var nu = 'goods[' + i + '].num'
    this.setData({
      [nu]: t
    })
  },
  deletegoods: function(e) {
    var that = this
    var i = e.currentTarget.dataset.index

    var goods = that.data.goods
    goods.splice(i, 1)

    that.setData({
      goods: goods
    })
  },
  go_to_pay: function() {
    wx.navigateTo({
      url: '../defray/defray',
    })
  },
})