import config from '../../config/index';
console.log('config', config);
class requestApi {
  sendGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        method: 'GET',
        url: config.baseUrl + url, //仅为示例，并非真实的接口地址
        data: params,
        success(res) {
          if (res.statusCode === 200) {
            if (res.data.code * 1 === 1) {
              resolve(res.data);
            } else {
              that.toast(res.data.msg);
              reject(res);
            }
          } else {
            switch (res.statusCode * 1) {
              case 500:
                that.toast('网络不给力');
                break;
              case 401:
                that.toast('没有权限');
                break;
              case 404:
                that.toast('找不到接口');
                break;
            }
            reject(res);
          }
        },
        fail(error) {
          reject(error);
        }
      })
    })
  }
  sendPost(url, params = {}) {
    let that = this;
    let open_id = wx.getStorageSync('open_id');
    let user_id = wx.getStorageSync('uid');
    if (open_id) {
      params.open_id = open_id
    }
    if (user_id) {
      params.user_id = user_id
    }
    return new Promise((resolve, reject) => {
      wx.request({
        method: 'POST',
        url: config.baseUrl + url, //仅为示例，并非真实的接口地址
        data: params,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          if (res.statusCode === 200) {
            if (res.data.code * 1 === 1) {
              resolve(res.data);
            } else {
              if (url !== "/api/user/userInfo") {
                that.toast(res.data.msg);
              }
              reject(res);
            }
          } else {
            switch (res.statusCode * 1) {
              case 500:
                that.toast('网络不给力');
                break;
              case 401:
                that.toast('没有权限');
                break;
              case 404:
                that.toast('找不到接口');
                break;
            }
            reject(res);
          }
        },
        fail(error) {
          console.log('error', error);
          reject(error);
        }
      })
    })
  }
  toast(msg) {
    wx.showToast({
      title: msg,
      icon: 'none'
    })
  }
}
export default requestApi;