// pages/middle/middle.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false,
    baseUrl: app.baseUrl,
    tabbar: app.getTabBar(2),
    content: '',
    checked1: true,
    checked2: false,
    isAllow: false,
    img: '',
    isSubmit: false
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
   * 获取发布内容
   */
  getContent: function ({ detail }) {
    this.setData({
      content: detail.value
    });
  },
  /**
   * 选择本校圈
   */
  onChange1: function ({ detail }) {
    this.setData({
      checked1: detail
    });
  },
  /**
   * 选择高校圈
   */
  onChange2: function ({ detail }) {
    this.setData({
      checked2: detail
    });
  },
  /**
  * 是否允许评论
  */
  onChange: function ({ detail }) {
    this.setData({
      isAllow: detail
    });
  },
  /**
  * 上传图片
  */
  uploadImg: function () {
    let that = this;
    wx.chooseImage({
      count: 1,
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: app.uploadImg,
          filePath: tempFilePaths[0],
          name: 'files',
          success(res) {
            if (res.statusCode * 1 === 200) {
              console.log(res.data);
              that.setData({
                img: JSON.parse(res.data)
              });
            }
          }
        })
      }
    })
  },
  /**
   * 发布
   */
  submit: function() {
    if(!this.data.content) {
      app.toast('发布内容必填！');
      return false;
    }
    this.setData({
      isSubmit: true
    });
    
    let params = {
      content: this.data.content,
      img: this.data.img
    }
    params.checked1 = this.data.checked1 ? 1 : 0;
    params.checked2 = this.data.checked2 ? 1 : 0;
    params.isAllow = this.data.isAllow ? 1 : 0;
  
    console.log('ss', params);
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