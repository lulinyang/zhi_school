// pages/hypermarket/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: app.baseUrl,
    bgUrl: app.bgUrl,
    sidebarHeight: 0,
    activeKey: 0,
    menus: [
      { name: '秋冬新品', num: 20},
      { name: '鲜果茶', num: 0 },
      { name: '益菌多', num: 1 },
      { name: '益菌多', num: 0 },
      { name: '咖啡', num: 0 },
      { name: '加料', num: 0 },
      { name: '秋冬新品', num: 0 },
      { name: '鲜果茶', num: 19},
      { name: '益菌多' },
      { name: '益菌多', num: 0},
      { name: '咖啡', num: 37},
      { name: '加料' },
    ],
    goods_list: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    footer_height: 54,
    show: false,
    cart_list: [{}, {}, {}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.setNavigationBarTitle({
      title: '书亦烧仙草'
    });
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    // top_view
    var query = wx.createSelectorQuery();
    //选择id
    wx.getSystemInfo({
      success(res) {
        let height = res.windowHeight;
        let top_height = 0;
        let footer_height = 0;
        query.select('.top_view').boundingClientRect(function (rect) {
          top_height = rect.height;
        }).exec();

        query.select('.footer-box').boundingClientRect(function (rect) {
          footer_height = rect.height;
        }).exec();
        setTimeout(() => {
          that.setData({
            sidebarHeight: height - top_height - footer_height,
            footer_height: footer_height
          })
          console.log(top_height, footer_height)
        }, 1000);
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 切换菜单
   */
  onChange: function(event) {
    wx.showToast({
      icon: 'none',
      title: `切换至第${event.detail}项`
    });
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
    this.setData({ show: false });
  },
  /**
   * 跳转商品详页
   */
  jumpDetails: function() {
    wx.navigateTo({
      url: '/pages/goods-details/index',
    });
  },
  /**
   * 跳转订单确认页
   */
  jumpRealOrder: function() {
    wx.navigateTo({
      url: '/pages/real-order/index',
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