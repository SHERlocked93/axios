easy-mock-api-template
---
基于 axios 的接口定义模板。

生成命令
```bash
npm run create-api
```

```替换
// 原 （打开正则
"code":\{"type":"string","required":false,"description":"[\w\d\u4e00-\u9fa5]*"


// 改成
"code":{"enum":"1","default":20000,"type": "integer","format": "int32","required": false,"description": ""

// 源码地址
// https://github.com/easy-mock/swagger-parser-mock/blob/e11799c8aa/lib/index.js
```

Documentation
---
[使用API自动生成工具优化前端工作流 \- 掘金](https://juejin.im/post/5bf6b4806fb9a049ae07884a)

[帮助文档](https://easy-mock.github.io/easy-mock-cli/)

[原版Github文档](https://github.com/easy-mock/easy-mock-cli/blob/master/docs/README.md)
