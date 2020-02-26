//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js');
Page({
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false,
    tabbar: app.getTabBar(0),
    banners: [{
      imgUrl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/banner1.png'
      },
      {
        imgUrl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/banner1.png'
      }
    ],
    interval: 3000,
    duration: 500,
    bannerNavs: [],
    type: 1,
    uid: '10',
    list: [{}, {}, {}, {}, {}, {}, {}, {}]
  },
  onLoad: function() {
    let arr = [
      {
        imgUrl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/banner2.png',
        page: '/pages/concurrent-post/index'
      },
      {
        imgUrl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/banner3.png',
        page: '/pages/tourism/index'
      }
    ];
    let bannerNavs = util.groupArray(arr, 2);
    this.setData({
      bannerNavs: bannerNavs
    });
  },
  onShow: function() {},
  /**
   * 切换订单
   */
  changeType: function(e) {
    this.setData({
      type: e.target.dataset.type * 1
    });
  },
  /**
   * 跳转实名认证
   */
  jumpRealName: function() {
    wx.navigateTo({
      url: '/pages/real-name/index',
    });
  },
  /**
   * 跳转详情页
   */
  jumpDetails: function() {
    wx.navigateTo({
      url: '/pages/dynamic-details/index',
    });
  },
  /**
   * 跳转个人主页
   */
  jumpIndividual: function() {
    wx.navigateTo({
      url: '/pages/individual/index',
    });
  },
  /**
   * 跳页
   */
  jumpPage: function(e) {
    console.log('====', e);
    let page = e.currentTarget.dataset.page;
    if (page) {
      wx.navigateTo({
        url: page
      });
    }
  }
})