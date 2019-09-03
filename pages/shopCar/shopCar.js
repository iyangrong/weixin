// pages/xiaoxi/xiaoxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    height: 0,
    uheight: 0,
    isShow: true,
    isAppear: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*this.setData({
      goods: wx.getStorageSync('goods')
    })*/
    let clientHeight = wx.getSystemInfoSync().windowHeight
    let clientWidth = wx.getSystemInfoSync().windowWidth
    let radio = 750 / clientWidth
    let cheight = radio * clientHeight
    this.setData({
      height: cheight,
      uheight: cheight - 130
    })
    wx.setNavigationBarTitle({
      title: '购物车',
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
    
    //判断购物车是否为空
    if (this.data.goods.length === 0) {
      this.setData({
        isShow: false,
        isAppear: true
      })
    } else {
      this.setData({
        isShow: true,
        isAppear: false
      })
    }
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

    wx.setStorageSync('goods', this.data.goods)
  },
  add1: function (e) {
    var i = e.currentTarget.dataset.index
    
    var t = this.data.goods[i].num + 1
    
    var nu = 'goods[' + i + '].num'
    this.setData({
      [nu]: t
    })

    wx.setStorageSync('goods', this.data.goods)
  },
  deletegoods: function(e) {
    var that = this
    var i = e.currentTarget.dataset.index

    var goods = that.data.goods
    goods.splice(i, 1)

    that.setData({
      goods: goods
    })

    //删除商品时判断购物车是否为空
    if (that.data.goods.length === 0) {
      that.setData({
        isShow: false,
        isAppear: true
      })
    } else {
      that.setData({
        isShow: true,
        isAppear: false
      })
    }

    wx.setStorageSync('goods', that.data.goods)
  },
  go_to_pay: function() {
    wx.navigateTo({
      url: '../defray/defray',
    })
  },
  go_to_goods: function() {
    wx.switchTab({
      url: '../wares/wares'
    })
  }
})