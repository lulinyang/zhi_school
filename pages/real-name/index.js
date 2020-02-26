// pages/real-name/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: app.baseUrl,
    bgUrl: app.bgUrl,
    second: 0,
    userInfo: {
      phone: '',
      code: '',
      name: '',
      school_name: '',
      department: '',
      img_card_1: '',
      img_card_2: '',
      img_school_card: ''
    },
    isSubmit: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  /**
   * 发送验证码
   */
  sendCode: function() {
    let that = this;
    let second = app.second;
    that.setData({
      second: second
    });
    let timer = setInterval(() => {
      if (second <= 0) {
        second = 0;
        clearInterval(timer);
      } else {
        second--;
      }
      that.setData({
        second: second
      });
    }, 1000);

  },
  /**
   * 上传身份证正面照
   */
  uploadImg: function(e) {
    // console.log('eeee', e.currentTarget.dataset.img_type);
    let img_type = e.currentTarget.dataset.img_type;
    let filed = `userInfo.${img_type}`;
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
            console.log('res=>', res);
            if (res.statusCode * 1 === 200) {
              console.log(res.data);
              that.setData({
                [filed]: JSON.parse(res.data)
              });
            }
          }
        })
      }
    })
  },
  /**
   * 获取手机号
   */
  getPhone: function(e) {
    this.setData({
      "userInfo.phone": e.detail
    });
  },
  /**
   * 获取验证码
   */
  getCode: function(e) {
    this.setData({
      "userInfo.code": e.detail
    });
  },
  /**
   * 获取姓名
   */
  getName: function(e) {
    this.setData({
      "userInfo.name": e.detail
    });
  },
  /**
   * 获取学校
   */
  getSchoolName: function(e) {
    this.setData({
      "userInfo.school_name": e.detail
    });
  },
  /**
  * 获取院系
  */
  getDepartment: function (e) {
    this.setData({
      "userInfo.department": e.detail
    });
  },
  /**
   * 获取用户信息
   */
  getUserInfo: function ({ detail}) {
    if (detail.errMsg === 'getUserInfo:ok') {
      wx.setStorageSync('encryptedData', detail.encryptedData);
      wx.setStorageSync('iv', detail.iv);
      wx.setStorageSync('rawData', detail.rawData);
      wx.setStorageSync('signature', detail.signature);
      this.submit(detail.userInfo);
    }else {
      app.toast('授权失败！');
    }
  },
  /**
   * 提交
   */
  submit: function(info) {
    console.log('info', info);
    let that = this;
    let userInfo = this.data.userInfo;
    this.setData({
      isSubmit: true
    });
    //验证表单
    if (!userInfo.phone) {
      app.toast('手机号必填！');
      this.setData({
        isSubmit: false
      });
      return false;
    }

    if (!userInfo.code) {
      app.toast('验证码必填！');
      this.setData({
        isSubmit: false
      });
      return false;
    }

    if (!userInfo.name) {
      app.toast('姓名必填！');
      this.setData({
        isSubmit: false
      });
      return false;
    }

    if (!userInfo.school_name) {
      app.toast('学校必填！');
      this.setData({
        isSubmit: false
      });
      return false;
    }

    if (!userInfo.department) {
      app.toast('院系必填！');
      this.setData({
        isSubmit: false
      });
      return false;
    }

    if (!userInfo.img_card_1) {
      app.toast('身份证正面照必传！');
      this.setData({
        isSubmit: false
      });
      return false;
    }

    if (!userInfo.img_card_2) {
      app.toast('身份证反面照必传！');
      this.setData({
        isSubmit: false
      });
      return false;
    }

    if (!userInfo.img_school_card) {
      app.toast('校园卡必传！');
      this.setData({
        isSubmit: false
      });
      return false;
    }

    console.log('sss', userInfo);
    bind:getuserinfo

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