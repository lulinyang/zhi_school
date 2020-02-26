// pages/my-order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 1,
    active: 1,
    list:[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
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
   * 切换高校
   */
  changeType: function (e) {
    this.setData({
      type: e.target.dataset.type * 1
    });
  },
  /**
   * 切换支付状态
   */
  changeActive: function (e) {
    this.setData({
      active: e.target.dataset.type * 1
    });
  },
  /**
   * 跳转详情
   */
  jumpDetails: function () {
    wx.navigateTo({
      url: '/pages/order-details/index',
    });
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