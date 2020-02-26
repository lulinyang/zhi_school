import config from '../config/index';
import Toast from '../components/toast/toast';
console.log('config', config);
class requestApi {
  sendGet(url, params = {}) { 
    console.log('url, params', url, params);
    return new Promise((resolve,reject) => {
      wx.request({
        method: 'GET',
        url: config.weChatUrl + url, //仅为示例，并非真实的接口地址
        data: params,
        success(res) {
          resolve(res);
        },
        fail(error) {
          reject(error);
        }
      })
    })
  }
  sendPost(url, params = {}) { 
    console.log('url, params', url, params);
    return new Promise((resolve,reject) => {
      wx.request({
        method: 'POST',
        url: config.weChatUrl + url, //仅为示例，并非真实的接口地址
        data: params,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          Toast('ss');
          resolve(res);
        },
        fail(error) {
          reject(error);
        }
      })
    })
  }
}
export default requestApi;