// pages/tourism/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [{
        imgUrl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/tr11%402x.png'
      },
      {
        imgUrl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/tr11%402x.png'
      }
    ],
    interval: 3000,
    duration: 500,
    list: [{}, {}, {}, {}, {}, {}]
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
   * 跳转到公司页
   */
  jumpCompany: function() {
    wx.navigateTo({
      url: '/pages/tourism-company/index',
    });
  },
  /**
   * 跳转详情页
   */
  jumpDetails: function() {
    wx.navigateTo({
      url: '/pages/tourism-details/index',
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