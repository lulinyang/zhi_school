import interApi from './interApi'
class AllServiceApi extends interApi {
  constructor() {
    super()
  }
  //测试
  test(params) {
    return this.sendPost('/api/getHuangLi', params);
  }
}

export default new AllServiceApi;
