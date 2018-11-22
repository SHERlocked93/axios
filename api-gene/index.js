import fetch from 'utils/fetch';

/** 【物料领取】分页查询三级计划列表 */
const materialReceivePlanPage = (opts) => fetch({
  method: 'get',
  url: '/material-receive/plan-page',
  params: opts
});

/** 查看物料列表 */
const templateMaterialListByPage = (opts) => fetch({
  method: 'get',
  url: '/template/material-list-by-page',
  params: opts
});

/** 【物料领取】发送打印领料单记录 */
const materialReceivePrint = (opts) => fetch({
  method: 'post',
  url: '/material-receive/print',
  data: opts
});

/** 【首页】分页查询一级计划列表 */
const planFirstPageHomeList = (opts) => fetch({
  method: 'get',
  url: '/plan/first/page-home-list',
  params: opts
});

/** 【质量】根据飞机编号查找计划树 */
const planGeneralQualityPlanTree = (opts) => fetch({
  method: 'get',
  url: '/plan/general/quality-plan-tree',
  params: opts
});

/** 【质量】动态查找有权限看的飞机编号列表 */
const planGeneralQualityPlaneCodeList = (opts) => fetch({
  method: 'get',
  url: '/plan/general/quality-plane-code-list',
  params: opts
});

/** 【计划-通用】确认分解计划-1,2级计划 */
const planGeneralDecompose = (opts) => fetch({
  method: 'post',
  url: '/plan/general/decompose',
  data: opts
});

/** 【计划-通用】分解计划（未确认按钮）-1,2级计划 */
const planGeneralPreDecompose = (opts) => fetch({
  method: 'get',
  url: '/plan/general/pre-decompose',
  params: opts
});

/** 【计划-通用】查看核料结果-1,2级计划 */
const planGeneralGetCheckMaterialResult = (opts) => fetch({
  method: 'get',
  url: '/plan/general/get-check-material-result',
  params: opts
});

/** 【计划-通用】分页查询仓库的核料信息-1,2级计划 */
const planGeneralPageCheckMaterialList = (opts) => fetch({
  method: 'get',
  url: '/plan/general/page-check-material-list',
  params: opts
});

/** 【计划-通用】计划核料-1,2级计划 */
const planGeneralCheckMaterial = (opts) => fetch({
  method: 'post',
  url: '/plan/general/check-material',
  data: opts
});

/** 【计划-通用】确认撤回计划-1,2,3级计划 */
const planGeneralWithdraw = (opts) => fetch({
  method: 'get',
  url: '/plan/general/withdraw',
  params: opts
});

/** 【计划-通用】撤回计划(未确认按钮)-1,2,3级计划 */
const planGeneralPreWithdraw = (opts) => fetch({
  method: 'get',
  url: '/plan/general/pre-withdraw',
  params: opts
});

/** 【计划-通用】下达计划（未确认按钮）-1,2,3级计划 */
const planGeneralPreAssign = (opts) => fetch({
  method: 'post',
  url: '/plan/general/pre-assign',
  data: opts
});

/** 【计划-通用】编辑计划-1,2,3级计划 */
const planGeneralEdit = (opts) => fetch({
  method: 'get',
  url: '/plan/general/edit',
  params: opts
});

/** 【领料或进度】动态查找有权限看的飞机编号列表 */
const planGeneralOtherPlaneCodeList = (opts) => fetch({
  method: 'get',
  url: '/plan/general/other-plane-code-list',
  params: opts
});

/** 【领料或进度】动态查找有权限查看的计划编号 */
const planGeneralOtherPlanCodeList = (opts) => fetch({
  method: 'get',
  url: '/plan/general/other-plan-code-list',
  params: opts
});

/** 【进度管理】编辑进度 */
const processRateManageRevise = (opts) => fetch({
  method: 'post',
  url: '/process-rate-manage/revise',
  data: opts
});

/** 【首页】分页查询质量管理列表 */
const homePagePageList = (opts) => fetch({
  method: 'get',
  url: '/home-page/page-list',
  params: opts
});

/** 【进度管理】查看作业记录列表 */
const processRateManageRecordList = (opts) => fetch({
  method: 'get',
  url: '/process-rate-manage/record-list',
  params: opts
});

/** 【计划-通用】分页查询计划列表-1,2,3级计划 */
const planGeneralPageList = (opts) => fetch({
  method: 'get',
  url: '/plan/general/page-list',
  params: opts
});

/** 【计划-通用】查看具体计划信息 */
const planGeneralPlanInfo = (opts) => fetch({
  method: 'get',
  url: '/plan/general/plan-info',
  params: opts
});

/** 【生产管理】分页查询三级计划列表 */
const planThirdPageOtherList = (opts) => fetch({
  method: 'get',
  url: '/plan/third/page-other-list',
  params: opts
});

/** 【计划管理-通用】查看详细计划（计划树）-1,2,3级计划 */
const planGeneralDetailPlan = (opts) => fetch({
  method: 'get',
  url: '/plan/general/detail-plan',
  params: opts
});

/** 【日志记录】分页查询日志列表 */
const adminLogPageLog = (opts) => fetch({
  method: 'get',
  url: '/admin/log/page-log',
  params: opts
});

/** 上移模版 */
const templateShiftUp = (opts) => fetch({
  method: 'post',
  url: '/template/shift-up',
  data: opts
});

/** 查询产品信息 */
const templateGetProduct = (opts) => fetch({
  method: 'get',
  url: '/template/get-product',
  params: opts
});

/** 查看产品的BOM分页 */
const templateGetProductBom = (opts) => fetch({
  method: 'get',
  url: '/template/get-product-bom',
  params: opts
});

/** 查看二级模版的BOM分页 */
const templateGetSecondBom = (opts) => fetch({
  method: 'get',
  url: '/template/get-second-bom',
  params: opts
});

/** 查看三级模版的BOM分页 */
const templateGetThirdBom = (opts) => fetch({
  method: 'get',
  url: '/template/get-third-bom',
  params: opts
});

/** 查看三级模版的BOM列表 */
const templateGetThirdBomList = (opts) => fetch({
  method: 'get',
  url: '/template/get-third-bom-list',
  params: opts
});

/** 查询模版列表 */
const templateListAll = (opts) => fetch({
  method: 'get',
  url: '/template/list-all',
  params: opts
});

/** 查询物料采购耗时列表 */
const templateMaterialList = (opts) => fetch({
  method: 'get',
  url: '/template/material-list',
  params: opts
});

/** 下移模版 */
const templateShiftDown = (opts) => fetch({
  method: 'post',
  url: '/template/shift-down',
  data: opts
});

/** 新建三级模版 */
const templateAddThird = (opts) => fetch({
  method: 'post',
  url: '/template/add-third',
  data: opts
});

/** 删除模版记录 */
const templateDeleteById = (opts) => fetch({
  method: 'post',
  url: '/template/delete-by-id',
  data: opts
});

/** 编辑产品模版 */
const templateEditProduct = (opts) => fetch({
  method: 'post',
  url: '/template/edit-product',
  data: opts
});

/** 编辑二级模版 */
const templateEditSecond = (opts) => fetch({
  method: 'post',
  url: '/template/edit-second',
  data: opts
});

/** 编辑三级模版 */
const templateEditThird = (opts) => fetch({
  method: 'post',
  url: '/template/edit-third',
  data: opts
});

/** 编辑三级模版的BOM */
const templateEditThirdBom = (opts) => fetch({
  method: 'post',
  url: '/template/edit-third-bom',
  data: opts
});

/** 查询模版信息 */
const templateGetInfo = (opts) => fetch({
  method: 'get',
  url: '/template/get-info',
  params: opts
});

/** 分页查询质量管理列表 */
const qualityPageList = (opts) => fetch({
  method: 'get',
  url: '/quality/page-list',
  params: opts
});

/** 生成编号 */
const sysParamGenerateSerialCode = (opts) => fetch({
  method: 'get',
  url: '/sys-param/generate-serial-code',
  params: opts
});

/** 【参数管理】查询所有数据字典 */
const sysParamListAll = (opts) => fetch({
  method: 'get',
  url: '/sys-param/list-all',
  params: opts
});

/** 【参数管理】查询数据字典 */
const sysParamListByParam = (opts) => fetch({
  method: 'get',
  url: '/sys-param/list-by-param',
  params: opts
});

/** 查询模版关联的仓库 */
const templateBillStores = (opts) => fetch({
  method: 'get',
  url: '/template/bill-stores',
  params: opts
});

/** 新建产品模版 */
const templateAddProduct = (opts) => fetch({
  method: 'post',
  url: '/template/add-product',
  data: opts
});

/** 新建二级模版 */
const templateAddSecond = (opts) => fetch({
  method: 'post',
  url: '/template/add-second',
  data: opts
});

/** 查看详细计划 */
const processRateDetailPlan = (opts) => fetch({
  method: 'get',
  url: '/process-rate/detail-plan',
  params: opts
});

/** 分页查询计划进度列表 */
const processRatePageList = (opts) => fetch({
  method: 'get',
  url: '/process-rate/page-list',
  params: opts
});

/** 【质量管理】关闭问题 */
const productionQualityCloseQuality = (opts) => fetch({
  method: 'post',
  url: '/production/quality/close-quality',
  data: opts
});

/** 【质量管理】删除问题单 */
const productionQualityDeleteQuality = (opts) => fetch({
  method: 'post',
  url: '/production/quality/delete-quality',
  data: opts
});

/** 【质量管理】编辑质量问题 */
const productionQualityEditQuality = (opts) => fetch({
  method: 'post',
  url: '/production/quality/edit-quality',
  data: opts
});

/** 【质量管理】根据ID查询质量详情 */
const productionQualityGetById = (opts) => fetch({
  method: 'get',
  url: '/production/quality/get-by-id',
  params: opts
});

/** 【质量管理】质量问题列表 */
const productionQualityListByPage = (opts) => fetch({
  method: 'get',
  url: '/production/quality/list-by-page',
  params: opts
});

/** 【质量管理】新建一个问题单 */
const productionQualitySaveQuality = (opts) => fetch({
  method: 'post',
  url: '/production/quality/save-quality',
  data: opts
});

/** 下达计划（未确认按钮） */
const planThirdPreAssign = (opts) => fetch({
  method: 'get',
  url: '/plan/third/pre-assign',
  params: opts
});

/** 撤回三级计划(未确认按钮) */
const planThirdPreWithdraw = (opts) => fetch({
  method: 'get',
  url: '/plan/third/pre-withdraw',
  params: opts
});

/** 确认撤回三级计划 */
const planThirdWithdraw = (opts) => fetch({
  method: 'post',
  url: '/plan/third/withdraw',
  data: opts
});

/** 【进度管理】查看计划详情 */
const processRateManageDetailPlan = (opts) => fetch({
  method: 'get',
  url: '/process-rate-manage/detail-plan',
  params: opts
});

/** 【进度管理】查看进度详情 */
const processRateManageEdit = (opts) => fetch({
  method: 'get',
  url: '/process-rate-manage/edit',
  params: opts
});

/** 分解二级计划（未确认按钮） */
const planSecondPreDecompose = (opts) => fetch({
  method: 'get',
  url: '/plan/second/pre-decompose',
  params: opts
});

/** 撤回二级计划(未确认按钮) */
const planSecondPreWithdraw = (opts) => fetch({
  method: 'get',
  url: '/plan/second/pre-withdraw',
  params: opts
});

/** 确认撤回二级计划 */
const planSecondWithdraw = (opts) => fetch({
  method: 'post',
  url: '/plan/second/withdraw',
  data: opts
});

/** 确认下达计划 */
const planThirdAssign = (opts) => fetch({
  method: 'post',
  url: '/plan/third/assign',
  data: opts
});

/** 查看详细计划 */
const planThirdDetailPlan = (opts) => fetch({
  method: 'get',
  url: '/plan/third/detail-plan',
  params: opts
});

/** 编辑三级计划 */
const planThirdEdit = (opts) => fetch({
  method: 'post',
  url: '/plan/third/edit',
  data: opts
});

/** 分页查询三级计划列表 */
const planThirdPageList = (opts) => fetch({
  method: 'get',
  url: '/plan/third/page-list',
  params: opts
});

/** 查看三级计划 */
const planThirdPlanInfo = (opts) => fetch({
  method: 'get',
  url: '/plan/third/plan-info',
  params: opts
});

/** 确认分解二级计划 */
const planSecondDecompose = (opts) => fetch({
  method: 'post',
  url: '/plan/second/decompose',
  data: opts
});

/** 查看详细计划 */
const planSecondDetailPlan = (opts) => fetch({
  method: 'get',
  url: '/plan/second/detail-plan',
  params: opts
});

/** 编辑二级计划 */
const planSecondEdit = (opts) => fetch({
  method: 'post',
  url: '/plan/second/edit',
  data: opts
});

/** 查看核料结果 */
const planSecondGetCheckMaterialResult = (opts) => fetch({
  method: 'get',
  url: '/plan/second/get-check-material-result',
  params: opts
});

/** 分页查询仓库的核料信息 */
const planSecondPageCheckMaterialList = (opts) => fetch({
  method: 'get',
  url: '/plan/second/page-check-material-list',
  params: opts
});

/** 分页查询二级计划列表 */
const planSecondPageList = (opts) => fetch({
  method: 'get',
  url: '/plan/second/page-list',
  params: opts
});

/** 查看二级计划 */
const planSecondPlanInfo = (opts) => fetch({
  method: 'get',
  url: '/plan/second/plan-info',
  params: opts
});

/** 下达计划（未确认按钮） */
const planSecondPreAssign = (opts) => fetch({
  method: 'get',
  url: '/plan/second/pre-assign',
  params: opts
});

/** 产品编号下拉框 */
const planFirstProductList = (opts) => fetch({
  method: 'get',
  url: '/plan/first/product-list',
  params: opts
});

/** 确认提交审批 */
const planFirstSubmitAudit = (opts) => fetch({
  method: 'post',
  url: '/plan/first/submit-audit',
  data: opts
});

/** 确认撤回一级计划 */
const planFirstWithdraw = (opts) => fetch({
  method: 'post',
  url: '/plan/first/withdraw',
  data: opts
});

/** 动态查找有权限查看的计划编号 */
const planGeneralPlanCodeList = (opts) => fetch({
  method: 'get',
  url: '/plan/general/plan-code-list',
  params: opts
});

/** 动态查找有权限看的飞机编号列表 */
const planGeneralPlaneCodeList = (opts) => fetch({
  method: 'get',
  url: '/plan/general/plane-code-list',
  params: opts
});

/** 确认下达计划 */
const planSecondAssign = (opts) => fetch({
  method: 'post',
  url: '/plan/second/assign',
  data: opts
});

/** 二级计划核料 */
const planSecondCheckMaterial = (opts) => fetch({
  method: 'post',
  url: '/plan/second/check-material',
  data: opts
});

/** 下达计划（未确认按钮） */
const planFirstPreAssign = (opts) => fetch({
  method: 'get',
  url: '/plan/first/pre-assign',
  params: opts
});

/** 审批人审批计划(未确认按钮) */
const planFirstPreAudit = (opts) => fetch({
  method: 'get',
  url: '/plan/first/pre-audit',
  params: opts
});

/** 新建一级计划(未确认按钮) */
const planFirstPreCreate = (opts) => fetch({
  method: 'get',
  url: '/plan/first/pre-create',
  params: opts
});

/** 分解一级计划（未确认按钮） */
const planFirstPreDecompose = (opts) => fetch({
  method: 'get',
  url: '/plan/first/pre-decompose',
  params: opts
});

/** 一级计划提交审批(未确认按钮) */
const planFirstPreSubmitAudit = (opts) => fetch({
  method: 'get',
  url: '/plan/first/pre-submit-audit',
  params: opts
});

/** 撤回一级计划(未确认按钮) */
const planFirstPreWithdraw = (opts) => fetch({
  method: 'get',
  url: '/plan/first/pre-withdraw',
  params: opts
});

/** 分页查看物料采购耗时 */
const planFirstPageMaterialTimeCunsuming = (opts) => fetch({
  method: 'get',
  url: '/plan/first/page-material-time-cunsuming',
  params: opts
});

/** 查看一级计划 */
const planFirstPlanInfo = (opts) => fetch({
  method: 'get',
  url: '/plan/first/plan-info',
  params: opts
});

/** 删除一级计划 */
const planFirstDelete = (opts) => fetch({
  method: 'post',
  url: '/plan/first/delete',
  data: opts
});

/** 查看详细计划 */
const planFirstDetailPlan = (opts) => fetch({
  method: 'get',
  url: '/plan/first/detail-plan',
  params: opts
});

/** 编辑一级计划 */
const planFirstEdit = (opts) => fetch({
  method: 'post',
  url: '/plan/first/edit',
  data: opts
});

/** 查看核料结果 */
const planFirstGetCheckMaterialResult = (opts) => fetch({
  method: 'get',
  url: '/plan/first/get-check-material-result',
  params: opts
});

/** 分页查询仓库的核料信息 */
const planFirstPageCheckMaterialList = (opts) => fetch({
  method: 'get',
  url: '/plan/first/page-check-material-list',
  params: opts
});

/** 分页查询一级计划列表 */
const planFirstPageList = (opts) => fetch({
  method: 'get',
  url: '/plan/first/page-list',
  params: opts
});

/** 取消占料 */
const occupyCancel = (opts) => fetch({
  method: 'post',
  url: '/occupy/cancel',
  data: opts
});

/** 【占料】查看占料详情 */
const occupyDetail = (opts) => fetch({
  method: 'get',
  url: '/occupy/detail',
  params: opts
});

/** 占料 */
const occupyExcute = (opts) => fetch({
  method: 'post',
  url: '/occupy/excute',
  data: opts
});

/** 确认下达计划 */
const planFirstAssign = (opts) => fetch({
  method: 'post',
  url: '/plan/first/assign',
  data: opts
});

/** 审核人确认审核 */
const planFirstAudit = (opts) => fetch({
  method: 'post',
  url: '/plan/first/audit',
  data: opts
});

/** 一级计划核料 */
const planFirstCheckMaterial = (opts) => fetch({
  method: 'post',
  url: '/plan/first/check-material',
  data: opts
});

/** 确认新建一级计划 */
const planFirstCreate = (opts) => fetch({
  method: 'post',
  url: '/plan/first/create',
  data: opts
});

/** 确认分解一级计划 */
const planFirstDecompose = (opts) => fetch({
  method: 'post',
  url: '/plan/first/decompose',
  data: opts
});

/** 新建物料信息 */
const materialAddMaterial = (opts) => fetch({
  method: 'post',
  url: '/material/add-material',
  data: opts
});

/** 编辑物料信息 */
const materialEditMaterial = (opts) => fetch({
  method: 'post',
  url: '/material/edit-material',
  data: opts
});

/** 查询物料详细信息 */
const materialGetMaterial = (opts) => fetch({
  method: 'get',
  url: '/material/get-material',
  params: opts
});

/** 【物料管理】查询物料信息列表 */
const materialListByPage = (opts) => fetch({
  method: 'get',
  url: '/material/list-by-page',
  params: opts
});

/** 物料使用监控列表 */
const monitorMaterialListByPage = (opts) => fetch({
  method: 'get',
  url: '/monitor/material/list-by-page',
  params: opts
});

/** 分页查询监控列表 */
const monitorProcessPageList = (opts) => fetch({
  method: 'get',
  url: '/monitor/process/page-list',
  params: opts
});

/** 获取计划原始的bom */
const occupyBomQuery = (opts) => fetch({
  method: 'get',
  url: '/occupy/bom/query',
  params: opts
});

/** 预先判断能否占料（补偿） */
const occupyCanOccupy = (opts) => fetch({
  method: 'get',
  url: '/occupy/can-occupy',
  params: opts
});

/** 内部-查询物料信息列表 */
const innerMaterialListByPage = (opts) => fetch({
  method: 'get',
  url: '/inner/material/list-by-page',
  params: opts
});

/** 【物料领取】删除领料单 */
const materialReceiveDelete = (opts) => fetch({
  method: 'post',
  url: '/material-receive/delete',
  data: opts
});

/** 【物料领取】查看领料单细节 */
const materialReceiveDetail = (opts) => fetch({
  method: 'get',
  url: '/material-receive/detail',
  params: opts
});

/** 【物料领取】查看领料单（列表） */
const materialReceiveList = (opts) => fetch({
  method: 'get',
  url: '/material-receive/list',
  params: opts
});

/** 查询计划占料结果 */
const materialReceiveOccupy = (opts) => fetch({
  method: 'get',
  url: '/material-receive/occupy',
  params: opts
});

/** 查询三级计划列表 */
const materialReceivePlanList = (opts) => fetch({
  method: 'get',
  url: '/material-receive/plan-list',
  params: opts
});

/** 【物料领取】领料 */
const materialReceiveReceive = (opts) => fetch({
  method: 'get',
  url: '/material-receive/receive',
  params: opts
});

/** 【内部】分页查询用户 */
const innerAdminUserList = (opts) => fetch({
  method: 'get',
  url: '/inner/admin/user/list',
  params: opts
});

/** 【内部】用户登录 */
const innerAdminUserNameLogin = (opts) => fetch({
  method: 'post',
  url: '/inner/admin/user/name-login',
  data: opts
});

/** 内部-查看领料单信息 */
const innerMaterialReceiveGetReceive = (opts) => fetch({
  method: 'get',
  url: '/inner/material-receive/get-receive',
  params: opts
});

/** 内部-领料单取消领料 */
const innerMaterialReceiveReceiveCancel = (opts) => fetch({
  method: 'post',
  url: '/inner/material-receive/receive-cancel',
  data: opts
});

/** 内部-领料单完成领料 */
const innerMaterialReceiveReceived = (opts) => fetch({
  method: 'post',
  url: '/inner/material-receive/received',
  data: opts
});

/** 内部-领料单领料中 */
const innerMaterialReceiveReceiving = (opts) => fetch({
  method: 'post',
  url: '/inner/material-receive/receiving',
  data: opts
});

/** 内部-查询物料-物料编号 */
const innerMaterialGetMaterialByCode = (opts) => fetch({
  method: 'get',
  url: '/inner/material/get-material-by-code',
  params: opts
});

/** 内部-查询物料-主键ID */
const innerMaterialGetMaterialById = (opts) => fetch({
  method: 'get',
  url: '/inner/material/get-material-by-id',
  params: opts
});

/** 【用户管理】重置密码 */
const adminUserResetPassword = (opts) => fetch({
  method: 'post',
  url: '/admin/user/reset-password',
  data: opts
});

/** 【物料管理】查询基本物料列表 */
const configMaterialListByPage = (opts) => fetch({
  method: 'get',
  url: '/config/material/list-by-page',
  params: opts
});

/** 【物料管理】批量打印物料 */
const configMaterialPrint = (opts) => fetch({
  method: 'post',
  url: '/config/material/print',
  data: opts
});

/** 【物料管理】根据物料条码打印条形码 */
const configMaterialPrintSerialCode = (opts) => fetch({
  method: 'get',
  url: '/config/material/print-serial-code',
  params: opts
});

/** 【物料管理】根据物料条码查询物料信息 */
const configMaterialQueryBySerialCode = (opts) => fetch({
  method: 'get',
  url: '/config/material/query-by-serial-code',
  params: opts
});

/** 【内部】用户鉴权 */
const innerAdminUserCheckLogin = (opts) => fetch({
  method: 'post',
  url: '/inner/admin/user/check-login',
  data: opts
});

/** 【内部】修改密码 */
const innerAdminUserEditPassword = (opts) => fetch({
  method: 'post',
  url: '/inner/admin/user/edit-password',
  data: opts
});

/** 【内部】查询用户信息 */
const innerAdminUserGetById = (opts) => fetch({
  method: 'get',
  url: '/inner/admin/user/get-by-id',
  params: opts
});

/** 【用户管理】删除用户 */
const adminUserDelete = (opts) => fetch({
  method: 'post',
  url: '/admin/user/delete',
  data: opts
});

/** 【用户管理】编辑用户 */
const adminUserEdit = (opts) => fetch({
  method: 'post',
  url: '/admin/user/edit',
  data: opts
});

/** 【用户管理】修改密码 */
const adminUserEditPassword = (opts) => fetch({
  method: 'post',
  url: '/admin/user/edit-password',
  data: opts
});

/** 【用户管理】查询用户信息 */
const adminUserGetById = (opts) => fetch({
  method: 'get',
  url: '/admin/user/get-by-id',
  params: opts
});

/** 【用户管理】分页查询用户 */
const adminUserList = (opts) => fetch({
  method: 'get',
  url: '/admin/user/list',
  params: opts
});

/** 【登陆登出】用户注销 */
const adminUserLogout = (opts) => fetch({
  method: 'post',
  url: '/admin/user/logout',
  data: opts
});

/** 【登陆登出】用户登录 */
const adminUserNameLogin = (opts) => fetch({
  method: 'post',
  url: '/admin/user/name-login',
  data: opts
});

/** 【角色管理】新建角色 */
const adminRoleAdd = (opts) => fetch({
  method: 'post',
  url: '/admin/role/add',
  data: opts
});

/** 【角色管理】删除角色 */
const adminRoleDelete = (opts) => fetch({
  method: 'post',
  url: '/admin/role/delete',
  data: opts
});

/** 【角色管理】编辑角色 */
const adminRoleEdit = (opts) => fetch({
  method: 'post',
  url: '/admin/role/edit',
  data: opts
});

/** 【角色管理】查询角色信息 */
const adminRoleGetById = (opts) => fetch({
  method: 'get',
  url: '/admin/role/get-by-id',
  params: opts
});

/** 【角色管理】分页查询角色 */
const adminRoleList = (opts) => fetch({
  method: 'get',
  url: '/admin/role/list',
  params: opts
});

/** 【角色管理】查询角色名称列表 */
const adminRoleListCode = (opts) => fetch({
  method: 'get',
  url: '/admin/role/list-code',
  params: opts
});

/** 【用户管理】新建用户 */
const adminUserAdd = (opts) => fetch({
  method: 'post',
  url: '/admin/user/add',
  data: opts
});

/** 【菜单查询】查询基本权限 */
const adminMenuGetBase = (opts) => fetch({
  method: 'get',
  url: '/admin/menu/get-base',
  params: opts
});

/** 【菜单查询】查询用户权限数组 */
const adminMenuGetByUser = (opts) => fetch({
  method: 'get',
  url: '/admin/menu/get-by-user',
  params: opts
});

export {
  materialReceivePlanPage,   // 【物料领取】分页查询三级计划列表 
  templateMaterialListByPage,   // 查看物料列表 
  materialReceivePrint,   // 【物料领取】发送打印领料单记录 
  planFirstPageHomeList,   // 【首页】分页查询一级计划列表 
  planGeneralQualityPlanTree,   // 【质量】根据飞机编号查找计划树 
  planGeneralQualityPlaneCodeList,   // 【质量】动态查找有权限看的飞机编号列表 
  planGeneralDecompose,   // 【计划-通用】确认分解计划-1,2级计划 
  planGeneralPreDecompose,   // 【计划-通用】分解计划（未确认按钮）-1,2级计划 
  planGeneralGetCheckMaterialResult,   // 【计划-通用】查看核料结果-1,2级计划 
  planGeneralPageCheckMaterialList,   // 【计划-通用】分页查询仓库的核料信息-1,2级计划 
  planGeneralCheckMaterial,   // 【计划-通用】计划核料-1,2级计划 
  planGeneralWithdraw,   // 【计划-通用】确认撤回计划-1,2,3级计划 
  planGeneralPreWithdraw,   // 【计划-通用】撤回计划(未确认按钮)-1,2,3级计划 
  planGeneralPreAssign,   // 【计划-通用】下达计划（未确认按钮）-1,2,3级计划 
  planGeneralEdit,   // 【计划-通用】编辑计划-1,2,3级计划 
  planGeneralOtherPlaneCodeList,   // 【领料或进度】动态查找有权限看的飞机编号列表 
  planGeneralOtherPlanCodeList,   // 【领料或进度】动态查找有权限查看的计划编号 
  processRateManageRevise,   // 【进度管理】编辑进度 
  homePagePageList,   // 【首页】分页查询质量管理列表 
  processRateManageRecordList,   // 【进度管理】查看作业记录列表 
  planGeneralPageList,   // 【计划-通用】分页查询计划列表-1,2,3级计划 
  planGeneralPlanInfo,   // 【计划-通用】查看具体计划信息 
  planThirdPageOtherList,   // 【生产管理】分页查询三级计划列表 
  planGeneralDetailPlan,   // 【计划管理-通用】查看详细计划（计划树）-1,2,3级计划 
  adminLogPageLog,   // 【日志记录】分页查询日志列表 
  templateShiftUp,   // 上移模版 
  templateGetProduct,   // 查询产品信息 
  templateGetProductBom,   // 查看产品的BOM分页 
  templateGetSecondBom,   // 查看二级模版的BOM分页 
  templateGetThirdBom,   // 查看三级模版的BOM分页 
  templateGetThirdBomList,   // 查看三级模版的BOM列表 
  templateListAll,   // 查询模版列表 
  templateMaterialList,   // 查询物料采购耗时列表 
  templateShiftDown,   // 下移模版 
  templateAddThird,   // 新建三级模版 
  templateDeleteById,   // 删除模版记录 
  templateEditProduct,   // 编辑产品模版 
  templateEditSecond,   // 编辑二级模版 
  templateEditThird,   // 编辑三级模版 
  templateEditThirdBom,   // 编辑三级模版的BOM 
  templateGetInfo,   // 查询模版信息 
  qualityPageList,   // 分页查询质量管理列表 
  sysParamGenerateSerialCode,   // 生成编号 
  sysParamListAll,   // 【参数管理】查询所有数据字典 
  sysParamListByParam,   // 【参数管理】查询数据字典 
  templateBillStores,   // 查询模版关联的仓库 
  templateAddProduct,   // 新建产品模版 
  templateAddSecond,   // 新建二级模版 
  processRateDetailPlan,   // 查看详细计划 
  processRatePageList,   // 分页查询计划进度列表 
  productionQualityCloseQuality,   // 【质量管理】关闭问题 
  productionQualityDeleteQuality,   // 【质量管理】删除问题单 
  productionQualityEditQuality,   // 【质量管理】编辑质量问题 
  productionQualityGetById,   // 【质量管理】根据ID查询质量详情 
  productionQualityListByPage,   // 【质量管理】质量问题列表 
  productionQualitySaveQuality,   // 【质量管理】新建一个问题单 
  planThirdPreAssign,   // 下达计划（未确认按钮） 
  planThirdPreWithdraw,   // 撤回三级计划(未确认按钮) 
  planThirdWithdraw,   // 确认撤回三级计划 
  processRateManageDetailPlan,   // 【进度管理】查看计划详情 
  processRateManageEdit,   // 【进度管理】查看进度详情 
  planSecondPreDecompose,   // 分解二级计划（未确认按钮） 
  planSecondPreWithdraw,   // 撤回二级计划(未确认按钮) 
  planSecondWithdraw,   // 确认撤回二级计划 
  planThirdAssign,   // 确认下达计划 
  planThirdDetailPlan,   // 查看详细计划 
  planThirdEdit,   // 编辑三级计划 
  planThirdPageList,   // 分页查询三级计划列表 
  planThirdPlanInfo,   // 查看三级计划 
  planSecondDecompose,   // 确认分解二级计划 
  planSecondDetailPlan,   // 查看详细计划 
  planSecondEdit,   // 编辑二级计划 
  planSecondGetCheckMaterialResult,   // 查看核料结果 
  planSecondPageCheckMaterialList,   // 分页查询仓库的核料信息 
  planSecondPageList,   // 分页查询二级计划列表 
  planSecondPlanInfo,   // 查看二级计划 
  planSecondPreAssign,   // 下达计划（未确认按钮） 
  planFirstProductList,   // 产品编号下拉框 
  planFirstSubmitAudit,   // 确认提交审批 
  planFirstWithdraw,   // 确认撤回一级计划 
  planGeneralPlanCodeList,   // 动态查找有权限查看的计划编号 
  planGeneralPlaneCodeList,   // 动态查找有权限看的飞机编号列表 
  planSecondAssign,   // 确认下达计划 
  planSecondCheckMaterial,   // 二级计划核料 
  planFirstPreAssign,   // 下达计划（未确认按钮） 
  planFirstPreAudit,   // 审批人审批计划(未确认按钮) 
  planFirstPreCreate,   // 新建一级计划(未确认按钮) 
  planFirstPreDecompose,   // 分解一级计划（未确认按钮） 
  planFirstPreSubmitAudit,   // 一级计划提交审批(未确认按钮) 
  planFirstPreWithdraw,   // 撤回一级计划(未确认按钮) 
  planFirstPageMaterialTimeCunsuming,   // 分页查看物料采购耗时 
  planFirstPlanInfo,   // 查看一级计划 
  planFirstDelete,   // 删除一级计划 
  planFirstDetailPlan,   // 查看详细计划 
  planFirstEdit,   // 编辑一级计划 
  planFirstGetCheckMaterialResult,   // 查看核料结果 
  planFirstPageCheckMaterialList,   // 分页查询仓库的核料信息 
  planFirstPageList,   // 分页查询一级计划列表 
  occupyCancel,   // 取消占料 
  occupyDetail,   // 【占料】查看占料详情 
  occupyExcute,   // 占料 
  planFirstAssign,   // 确认下达计划 
  planFirstAudit,   // 审核人确认审核 
  planFirstCheckMaterial,   // 一级计划核料 
  planFirstCreate,   // 确认新建一级计划 
  planFirstDecompose,   // 确认分解一级计划 
  materialAddMaterial,   // 新建物料信息 
  materialEditMaterial,   // 编辑物料信息 
  materialGetMaterial,   // 查询物料详细信息 
  materialListByPage,   // 【物料管理】查询物料信息列表 
  monitorMaterialListByPage,   // 物料使用监控列表 
  monitorProcessPageList,   // 分页查询监控列表 
  occupyBomQuery,   // 获取计划原始的bom 
  occupyCanOccupy,   // 预先判断能否占料（补偿） 
  innerMaterialListByPage,   // 内部-查询物料信息列表 
  materialReceiveDelete,   // 【物料领取】删除领料单 
  materialReceiveDetail,   // 【物料领取】查看领料单细节 
  materialReceiveList,   // 【物料领取】查看领料单（列表） 
  materialReceiveOccupy,   // 查询计划占料结果 
  materialReceivePlanList,   // 查询三级计划列表 
  materialReceiveReceive,   // 【物料领取】领料 
  innerAdminUserList,   // 【内部】分页查询用户 
  innerAdminUserNameLogin,   // 【内部】用户登录 
  innerMaterialReceiveGetReceive,   // 内部-查看领料单信息 
  innerMaterialReceiveReceiveCancel,   // 内部-领料单取消领料 
  innerMaterialReceiveReceived,   // 内部-领料单完成领料 
  innerMaterialReceiveReceiving,   // 内部-领料单领料中 
  innerMaterialGetMaterialByCode,   // 内部-查询物料-物料编号 
  innerMaterialGetMaterialById,   // 内部-查询物料-主键ID 
  adminUserResetPassword,   // 【用户管理】重置密码 
  configMaterialListByPage,   // 【物料管理】查询基本物料列表 
  configMaterialPrint,   // 【物料管理】批量打印物料 
  configMaterialPrintSerialCode,   // 【物料管理】根据物料条码打印条形码 
  configMaterialQueryBySerialCode,   // 【物料管理】根据物料条码查询物料信息 
  innerAdminUserCheckLogin,   // 【内部】用户鉴权 
  innerAdminUserEditPassword,   // 【内部】修改密码 
  innerAdminUserGetById,   // 【内部】查询用户信息 
  adminUserDelete,   // 【用户管理】删除用户 
  adminUserEdit,   // 【用户管理】编辑用户 
  adminUserEditPassword,   // 【用户管理】修改密码 
  adminUserGetById,   // 【用户管理】查询用户信息 
  adminUserList,   // 【用户管理】分页查询用户 
  adminUserLogout,   // 【登陆登出】用户注销 
  adminUserNameLogin,   // 【登陆登出】用户登录 
  adminRoleAdd,   // 【角色管理】新建角色 
  adminRoleDelete,   // 【角色管理】删除角色 
  adminRoleEdit,   // 【角色管理】编辑角色 
  adminRoleGetById,   // 【角色管理】查询角色信息 
  adminRoleList,   // 【角色管理】分页查询角色 
  adminRoleListCode,   // 【角色管理】查询角色名称列表 
  adminUserAdd,   // 【用户管理】新建用户 
  adminMenuGetBase,   // 【菜单查询】查询基本权限 
  adminMenuGetByUser   // 【菜单查询】查询用户权限数组 
};
