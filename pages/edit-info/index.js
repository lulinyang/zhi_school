// pages/edit-info/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled_name: true,
    disabled_tel: true,
    disabled_school: true,
    disabled_system: true,
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
   * 可修改状态
   */
  editName: function() {
    this.setData({
      disabled_name: false
    });
  },
  /**
   * 可修改状态
   */
  editTel: function () {
    this.setData({
      disabled_tel: false
    });
  },
  /**
   * 可修改状态
   */
  editSchool: function () {
    this.setData({
      disabled_school: false
    });
  },
  /**
   * 可修改状态
   */
  editSystem: function () {
    this.setData({
      disabled_system: false
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