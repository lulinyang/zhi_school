// pages/mine/mine.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: app.baseUrl,
    bgUrl: app.bgUrl,
    tabbar: app.getTabBar(4),
    nav_list: [{
      text: '我的订单',
      icon: `${app.bgUrl}/my_icon_nav1.png`,
      page: false
    }, {
      text: '我的兼职',
      icon: `${app.bgUrl}/my_icon_nav2.png`,
      page: "/pages/group-list/index"
    }, {
      text: '我的好友',
      icon: `${app.bgUrl}/my_icon_nav3.png`,
        page: "/pages/good-friend/index"
    }, {
      text: '我的动态',
      icon: `${app.bgUrl}/my_icon_nav4.png`,
        page: "/pages/dynamic/index"
    }, {
      text: '我的账单',
      icon: `${app.bgUrl}/my_icon_nav5.png`,
      page: "/pages/my-bill/index"
    }, {
      text: '联系客服',
      icon: `${app.bgUrl}/my_icon_nav6.png`,
        page: "/pages/my-order/index"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // app.editTabbar();
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
   * 跳转页面
   */
  jumpPage: function(e) {
    console.log('sss', e);
    let page = e.currentTarget.dataset.page;
    if (page) {
      wx.navigateTo({
        url: page,
      });
    }
  },
  /**
   * 跳转提现
   */
  jumpWithdrawal: function() {
    wx.navigateTo({
      url: '/pages/cash-withdrawal/index',
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