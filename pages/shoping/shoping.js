// pages/shoping/shoping.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false,
    tabbar: app.getTabBar(1),
    banners: [{
      imgUrl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/Group%203%402x.png'
    },
    {
      imgUrl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/school/banner2.png'
    },
    {
      imgUrl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/school/banner3.png'
    }
    ],
    interval: 3000,
    duration: 500,
    menus: [
      {
        text: '校内商城',
        icon: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/zhi-school/shopping_nav_1.png'
      },
      {
        text: '快餐外卖',
        icon: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/zhi-school/shopping_nav_2.png'
      },
      {
        text: '水果零食',
        icon: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/zhi-school/shopping_nav_3.png'
      },
      {
        text: '小吃饮品',
        icon: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/zhi-school/shopping_nav_4.png'
      },
      {
        text: '寝室商铺',
        icon: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/zhi-school/shopping_nav_5.png'
      }
    ],
    shopping_list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // app.editTabbar();
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
   * 跳转详情页
   */
  jumpHypermarket: function() {
    wx.navigateTo({
      url: '/pages/hypermarket/index'
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