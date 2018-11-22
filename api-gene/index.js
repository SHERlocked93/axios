import fetch from 'utils/fetch';

/** 根据参数查询配置项 */
const sysParamQueryByParam = ({ paramName }) => fetch({
  method: 'get',
  url: '/sys-param/query-by-param',
  params: { paramName }
});

/** 后台配置数据设置 */
const sysParamSaveParam = ({ configParams }) => fetch({
  method: 'post',
  url: '/sys-param/save-param',
  data: { configParams }
});

/** 开始一个活动 */
const activityStart = ({ surveyType }) => fetch({
  method: 'post',
  url: '/activity/start',
  data: { surveyType }
});

/** 查询公众号用户列表 */
const adminUserList = ({ source, page, rows }) => fetch({
  method: 'get',
  url: '/admin/user/list',
  params: { source, page, rows }
});

/** 用户登出 */
const adminUserLogout = () => fetch({
  method: 'post',
  url: '/admin/user/logout'
});

/** web端用户登录 */
const adminUserNameLogin = ({ userName, password }) => fetch({
  method: 'post',
  url: '/admin/user/name-login',
  data: { userName, password }
});

/** 公众号登录 */
const adminUserWxLogin = ({ wxCode }) => fetch({
  method: 'post',
  url: '/admin/user/wx-login',
  data: { wxCode }
});

/** 根据id删除问题 */
const questionDeleteById = ({ id }) => fetch({
  method: 'post',
  url: '/question/delete-by-id',
  data: { id }
});

/** 根据问题ID修改问题 */
const questionEditById = ({ id, title, items }) => fetch({
  method: 'post',
  url: '/question/edit-by-id',
  data: { id, title, items }
});

/** 问题列表 */
const questionListByParam = ({ surveyId, page, rows }) => fetch({
  method: 'get',
  url: '/question/list-by-param',
  params: { surveyId, page, rows }
});

/** 新增保存问题 */
const questionSaveQuestion = ({ title, items }) => fetch({
  method: 'post',
  url: '/question/save-question',
  data: { title, items }
});

/** 获取大屏警报数据 */
const scadaListAlarm = () => fetch({
  method: 'get',
  url: '/scada/list-alarm'
});

/** 查询所有参数配置 */
const sysParamQueryAllParam = () => fetch({
  method: 'get',
  url: '/sys-param/query-all-param'
});

/** 根据微信用户查询答案 */
const activityGetAnswerByUser = ({ id, fieldOrder, surveyType }) => fetch({
  method: 'get',
  url: '/activity/get-answer-by-user',
  params: { id, fieldOrder, surveyType }
});

/** 查询是否具有红包资格 */
const activityGetHongbaoFlag = () => fetch({
  method: 'get',
  url: '/activity/get-hongbao-flag'
});

/** 查询是否具有抽奖资格 */
const activityGetLotteryFlag = ({ answerId }) => fetch({
  method: 'get',
  url: '/activity/get-lottery-flag',
  params: { answerId }
});

/** 查询答案列表 */
const activityListByParam = ({ turnDate, fieldOrder, isLottery, page, rows, surveyType }) => fetch({
  method: 'get',
  url: '/activity/list-by-param',
  params: { turnDate, fieldOrder, isLottery, page, rows, surveyType }
});

/** 查询活动实时状态-大屏使用 */
const activityQueryActivity = () => fetch({
  method: 'get',
  url: '/activity/query-activity'
});

/** 查询场次列表 */
const activityQueryFieldOrder = ({ turnDate }) => fetch({
  method: 'get',
  url: '/activity/query-field-order',
  params: { turnDate }
});

/** 提交一个拼图 */
const activitySaveJigsaw = () => fetch({
  method: 'post',
  url: '/activity/save-jigsaw'
});

/** 提交一个问卷 */
const activitySaveSurvey = ({ surveyId, answers, answerId }) => fetch({
  method: 'post',
  url: '/activity/save-survey',
  data: { surveyId, answers, answerId }
});

/** 进入活动页面，查询参与信息 */
const activityGetActivityStatus = ({ surveyType }) => fetch({
  method: 'get',
  url: '/activity/get-activity-status',
  params: { surveyType }
});

export {
  sysParamQueryByParam,   // 根据参数查询配置项
  sysParamSaveParam,   // 后台配置数据设置
  activityStart,   // 开始一个活动
  adminUserList,   // 查询公众号用户列表
  adminUserLogout,   // 用户登出
  adminUserNameLogin,   // web端用户登录
  adminUserWxLogin,   // 公众号登录
  questionDeleteById,   // 根据id删除问题
  questionEditById,   // 根据问题ID修改问题
  questionListByParam,   // 问题列表
  questionSaveQuestion,   // 新增保存问题
  scadaListAlarm,   // 获取大屏警报数据
  sysParamQueryAllParam,   // 查询所有参数配置
  activityGetAnswerByUser,   // 根据微信用户查询答案
  activityGetHongbaoFlag,   // 查询是否具有红包资格
  activityGetLotteryFlag,   // 查询是否具有抽奖资格
  activityListByParam,   // 查询答案列表
  activityQueryActivity,   // 查询活动实时状态-大屏使用
  activityQueryFieldOrder,   // 查询场次列表
  activitySaveJigsaw,   // 提交一个拼图
  activitySaveSurvey,   // 提交一个问卷
  activityGetActivityStatus   // 进入活动页面，查询参与信息
};
