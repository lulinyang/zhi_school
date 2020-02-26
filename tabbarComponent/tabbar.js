// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [{
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
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false,
    // tabbar: 
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})