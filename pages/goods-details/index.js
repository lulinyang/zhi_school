// pages/goods-details/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: app.baseUrl,
    bgUrl: app.bgUrl,
    footer_height: 54,
    show: false,
    cart_list: [{}, {}, {}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let that = this;
    // top_view
    var query = wx.createSelectorQuery();
    //选择id
    wx.getSystemInfo({
      success(res) {
        query.select('.footer-box').boundingClientRect(function(rect) {
          that.setData({
            footer_height: rect.height
          })
        }).exec();
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  /**
   * 显示购物车
   */
  showCart: function() {
    let show = this.data.show;
    this.setData({
      show: !show
    });
  },
  /**
   * 关闭购物车
   */
  onClose() {
    this.setData({
      show: false
    });
  },
  /**
   * 跳转订单确认页
   */
  jumpRealOrder: function () {
    wx.navigateTo({
      url: '/pages/real-order/index',
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})