// pages/group-chat/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 0,
    inputBottom: 0,
    letter_content: "",
    msgList: [{
        msg_type: '1',
        content: '使用方法：出行人的身份证/校园卡/学生证证明身份',
        speaker: 'server',
        from_headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head_url.png'
      },
      {
        msg_type: '1',
        content: '使用方法：出行人的身份证/校园卡/学生证证明身份',
        speaker: 'customer',
        headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head.png'
      },
      {
        msg_type: '1',
        content: '使用方法：出行人的身份证/校园卡/学生证证明身份',
        speaker: 'server',
        from_headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head_url.png'
      },
      {
        msg_type: '1',
        content: '使用方法：出行人的身份证/校园卡/学生证证明身份',
        speaker: 'customer',
        headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head.png'
      },
      {
        msg_type: '1',
        content: '使用方法：出行人的身份证/校园卡/学生证证明身份',
        speaker: 'server',
        from_headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head_url.png'
      },
      {
        msg_type: '1',
        content: '使用方法：出行人的身份证/校园卡/学生证证明身份',
        speaker: 'customer',
        headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head.png'
      },
      {
        msg_type: '1',
        content: '使用方法：出行人的身份证/校园卡/学生证证明身份',
        speaker: 'server',
        from_headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head_url.png'
      },
      {
        msg_type: '1',
        content: '使用方法：出行人的身份证/校园卡/学生证证明身份',
        speaker: 'customer',
        headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head.png'
      },
      {
        msg_type: '2',
        content: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/dddd.png',
        speaker: 'server',
        from_headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head_url.png'
      },
      {
        msg_type: '2',
        content: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/dddd.png',
        speaker: 'customer',
        headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head.png'
      },
      {
        msg_type: '1',
        content: '使用方法：出行人的身份证/校园卡/学生证证明身份',
        speaker: 'server',
        from_headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head_url.png'
      },
      {
        msg_type: '1',
        content: '使用方法：出行人的身份证/校园卡/学生证证明身份',
        speaker: 'customer',
        headurl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/head.png'
      }
    ],
    scrollTop: 999999999,
    to_id: '',
    webSocket: null,
    timer: null,
    previewImages: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "代跑腿-北京大学群聊"
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let that = this;
    // top_view
    var query = wx.createSelectorQuery();
    let top_height = 0;
    let footer_height = 0;
    //选择id
    wx.getSystemInfo({
      success(res) {
        query.select('.footer-box').boundingClientRect(function(rect) {
          footer_height = rect.height
        }).exec();
      }
    });

    wx.getSystemInfo({
      success(res) {
        query.select('.top_tips').boundingClientRect(function(rect) {
          top_height = rect.height
        }).exec();
      }
    });

    setTimeout(() => {
      that.setData({
        scroll_height: wx.getSystemInfoSync().windowHeight - top_height - footer_height
      });
      that.goBottom();
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 获取文本内容
   */
  inputMsg: function(e) {
    this.setData({
      letter_content: e.detail.value
    });
  },
  /**
   * 获取聚焦
   */
  focus: function(e) {
    let keyHeight = e.detail.height;
    this.setData({
      inputBottom: keyHeight + 'px',
      height: wx.getSystemInfoSync().windowHeight - keyHeight
    });
    this.goBottom(10);
  },

  //失去聚焦(软键盘消失)
  blur: function() {
    this.setData({
      inputBottom: 0,
      height: wx.getSystemInfoSync().windowHeight
    });
    this.goBottom(10);
  },
  /**
   * 滚到底部
   */
  goBottom: function(time = 500) {
    let msgList = this.data.msgList;
    setTimeout(() => {
      this.setData({
        scrollTop: msgList.length * 1000
      });
    }, time);
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