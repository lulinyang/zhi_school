// pages/add-address/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex_type: 1,
    location: {}
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
   * 选择性别
   */
  changeSex: function(e) {
    // console.log('==', e);
    this.setData({
      sex_type: e.currentTarget.dataset.sex
    });
  },
  /**
   * 选择地址
   */
  chooseAddress: function() {
    let that = this;
    wx.chooseLocation({
      success: function(res) {
        if (res.errMsg === "chooseLocation:ok") {
          that.setData({
            location: res
          });
          console.log('location', that.data.location);
        }else {
          app.toast(res.errMsg);
        }
      }
    })
  },
  /**
   * 保存
   */
  submit: function() {

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