//app.js
import config from './config/index.js';
import http from './http/serve/api.js';
App({
  http: http,
  baseUrl: config.baseUrl,
  bgUrl: config.bgUrl,
  second: config.second,
  uploadImg: config.baseUrl + config.uploadImg,
  onLaunch: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
    //获取设备信息
    this.getSystemInfo();

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
  },
  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
      }
    });
  },
  getTabBar: function(index = 0) {
    let tabbar = {
      "backgroundColor": "#ffffff",
      "color": "#979795",
      "selectedColor": "#1c1c1b",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "首页",
          "iconPath": "icon/home.png",
          "selectedIconPath": "icon/home_full.png"
        },
        {
          "pagePath": "/pages/shoping/shoping",
          "text": "商城",
          "iconPath": "icon/shoping.png",
          "selectedIconPath": "icon/shoping_full.png"
        },
        {
          "pagePath": "/pages/middle/middle",
          "selectedIconPath": "icon/my_full.png",
          "iconPath": "icon/icon_release.png",
          "isSpecial": true,
          "text": "发布"
        },
        {
          "pagePath": "/pages/msg/msg",
          "text": "消息",
          "iconPath": "icon/msg.png",
          "selectedIconPath": "icon/msg_full.png"
        },
        {
          "pagePath": "/pages/mine/mine",
          "text": "我的",
          "iconPath": "icon/my.png",
          "selectedIconPath": "icon/my_full.png"
        }
      ]
    };
    tabbar.list.forEach((item, i) => {
      if (index == i) {
        tabbar.list[i].selected = true;
      }else {
        tabbar.list[i].selected = false;
      }
    })
    return tabbar;
  },
  toast: function (msg) {
    wx.showToast({
      title: msg,
      icon: 'none'
    });
  },
  globalData: {
    systemInfo: null,//客户端设备信息
    userInfo: null,
  },
  
})