// pages/concurrent-post-list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      state: 1
    }, {
      state: 2
    }, {
      state: 3
    }, {
      state: 2
    }, {
      state: 3
    }, {
      state: 1
    }, {
      state: 2
    }, {
      state: 1
    }, {
      state: 1
    }, {}, {
      state: 1
    }, {
      state: 1
    }, {
      state: 3
    }, {
      state: 1
    }, {
      state: 1
    }, {
      state: 3
    }]
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  /**
   * 跳转详情页
   */
  jumpDetails: function () {
    wx.navigateTo({
      url: '/pages/concurrent-post-details/index',
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