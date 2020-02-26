import interApi from './interApi'
class AllServiceApi extends interApi {
  constructor() {
    super()
  }
  //code置换openid
  login(params) {
    return this.sendPost('/api/user/login', params);
  }
  //学校列表
  schoolList(params) {
    return this.sendPost('/api/School/schoolList', params);
  }
  //学校信息详情
  schoolDetail(params) {
    return this.sendPost('/api/School/schoolDetail', params);
  }
  //学校动态列表
  schoolDynamic(params) {
    return this.sendPost('/api/School/schoolDynamic', params);
  }
  //城市接口
  cityList(params) {
    return this.sendPost('/api/City/cityList', params);
  }
  //学校开放日预约列表
  ActivityList(params) {
    return this.sendPost('/api/Activity/ActivityList', params);
  }
  //用户审核信息提交
  examineAdd(params) {
    return this.sendPost('/api/user/examineAdd', params);
  }
  //获取用户信息
  userInfo(params) {
    return this.sendPost('/api/user/userInfo', params);
  }
  //话题圈列表
  topicList(params) {
    return this.sendPost('/api/Topic/topicList', params);
    setTimeout
  }
  //我的预约
  myAppointment(params) {
    return this.sendPost('/api/user/myAppointment', params);
  }
  //话题详情
  topicDetail(params) {
    return this.sendPost('/api/Topic/topicDetail', params);
  }
  //添加对话题评论/对评论评论
  topicAddcomment(params) {
    return this.sendPost('/api/Topic/topicAddcomment', params);
  }
  //查看我的回答
  MyAnswer(params) {
    return this.sendPost('/api/Topic/MyAnswer', params);
  }
  //修改我的回答
  changeMyAnswer(params) {
    return this.sendPost('/api/Topic/changeMyAnswer', params);
  }
  //关注/取关学校
  attentionAdd(params) {
    return this.sendPost('/api/School/attentionAdd', params);
  }
  //搜索
  search(params) {
    return this.sendPost('/api/School/search', params);
  }
  //学校动态详情
  dynamicInfo (params) {
    return this.sendPost('/api/School/dynamicInfo', params);
  }
  //我的话题
  myAppointment(params) {
    return this.sendPost('/api/user/myAppointment', params);
  }
  //发送验证码
  sendYzkey(params) {
    return this.sendPost('/api/Common/sendYzkey', params);
  }
  //消息模块所有的消息
  msgList(params) {
    return this.sendPost('/api/common/msgList', params);
  }
  //我的话题
  myTopic(params) {
    return this.sendPost('/api/user/myTopic', params);
  }
  //系统消息数
  msgCount(params) {
    return this.sendPost('/api/common/msgCount', params);
  }
  //修改手机号
  changePhone(params) {
    return this.sendPost('/api/user/changePhone', params);
  }
  //用户信息修改
  infoEdit(params) {
    return this.sendPost('/api/user/infoEdit', params);
  }
  //热门城市
  cityHot(params) {
    return this.sendPost('/api/City/cityHot', params);
  }
  //系统消息读取后操作
  readMsg(params) {
    return this.sendPost('/api/common/readMsg', params);
  }
  //话题添加
  addTopic(params) {
    return this.sendPost('/api/topic/addTopic', params);
  }
  //编辑话题
  editTopic(params) {
    return this.sendPost('/api/topic/editTopic', params);
  }
  //删除话题
  delTopic(params) {
    return this.sendPost('/api/topic/delTopic', params);
  }
  //点赞
  addPraise(params) {
    return this.sendPost('/api/Praise/addPraise', params);
  }
  //系统消息全部已读
  allMsg(params) {
    return this.sendPost('/api/common/allMsg', params);
  }
  //系统消息全部删除
  delMsg(params) {
    return this.sendPost('/api/common/delMsg', params);
  }
  //评论详情
  details(params) {
    return this.sendPost('/api/comment/details', params);
  }
  //系统消息列表
  lettersList(params) {
    return this.sendPost('/api/Letters/list', params);
  }
  //私信消息
  letters(params) {
    return this.sendPost('/api/Letters/letters', params);
  }
  //发私信
  sendPrivateLetter(params) {
    return this.sendPost('/api/Letters/sendPrivateLetter', params);
  }
  //学校开放日预约详情
  ActivityInfo(params) {
    return this.sendPost('/api/Activity/ActivityInfo', params);
  }
  //预约
  Appointment(params) {
    return this.sendPost('/api/Activity/Appointment', params);
  }
  //预约详情
  appdetails(params) {
    return this.sendPost('/api/activity/appdetails', params);
  }
  //banner图
  bannerList(params) {
    return this.sendPost('/api/common/bannerList', params);
  }
  //增加城市热度
  changecity(params) {
    return this.sendPost('/api/city/changecity', params);
  }
  //添加预约
  reservation (params) {
    return this.sendPost('/api/activity/reservation', params);
  }
}

export default new AllServiceApi;