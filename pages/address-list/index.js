// pages/address-list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footer_height: 77,
    address_list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ]
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
    let that = this;
    // top_view
    var query = wx.createSelectorQuery();
    //选择id
    wx.getSystemInfo({
      success(res) {
        query.select('.btn_box_footer').boundingClientRect(function (rect) {
          that.setData({
            footer_height: rect.height
          })
        }).exec();
      }
    });
  },
  /**
   * 跳转到新增地址
   */
  jumpAddAddress: function() {
    wx.navigateTo({
      url: '/pages/add-address/index',
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