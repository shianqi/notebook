# 史安琪 （1995.8 北京，全栈，目前在职）

### 联系方式

- https://shianqi.github.io
- mail@shianqi.com
- github.com/shianqi
- 177-4440-6894

### 自我评价

全栈工程师 / 极客 / 实践派 / 开源软件爱好者

除去开发外，对绘画、设计、交互、产品都有自己的见解和追求

### 技术栈

**前端：** React 及其周边生态为主，Next.js、styled-components、webpack、Babel、WebGL 等

**后端：** Node.js 为主，Koa、JavaEE、mongodb、Mysql、微服务、Docker

# 工作经历

## 北京心知科技有限公司（A 轮）

（前端开发工程师 2017-10 ~ 2018-7 实习 2018-7 ~ 至今）

### 天气数据可视化分析平台（旧项目维护，升级）

介绍网址：[https://www.seniverse.com/insights](https://www.seniverse.com/insights)
项目网址：[https://insights.seniverse.com/](https://insights.seniverse.com/) （已关闭游客模式）

基于高精度气象数据，多种可视化展现形式，实时查看和分析分钟级、公里级的天气实况、预报和预警数据。

入职后接手的第一个项目，也是后来 `气象图层 SDK` 的前身。接手的时候只有简单的预渲染图片图层，和一些图表展示。经历了长期多个版本的迭代，完成了如下功能：气象图层（详细见`气象图层 SDK`），天气推送（`Whenbot 天气机器人`），销量预测，广告投放，子账户管理等多个模块。

**团队成员：** 前端(2) + 后端(1) + 设计(1)，长期迭代维护

**技术要点：**

- 前端：React.js + Redux + (LESS => CSS Modules => styled-components）+ WebGL，通过 Babel + Webpack 编译打包，shell 脚本部署。
- 后端：Node.js + Koa + MongoDB + Redis，构建的十多个微服务组成

### 新官网 & 新后台管理系统

网址：[https://www.seniverse.com/](https://www.seniverse.com/)，从原来的 Node.js + Pug(Jade) + MongoDB 渐进式升级到了 Next.js（前端）+ Koa.js（BFF） + Nest.js（后端）+ MySQL 的组合。

**团队成员：** 前端(2) + 后端(3) + 设计(2) （约 45 个工作日）

**负责工作：** 前端整体架构，封装组件，部分页面编写，BFF 服务，日常运维

**架构：** 整体采用 Next.js 框架，使用 React + Typescript 编写。用 Redux 管理状态，样式方面采用 Material-UI + styled-components 编写，并遵循 Material Design 设计规范。同时还编写了一个基于 koa 的 BFF 服务用于整合部分复杂的前后端交互逻辑。前端整体是一个 SPA 页面，但对每一个入口都做了 SSR 和静态化导出。使用 Sentry 进行错误监控。

**部署：** 进行同构渲染，并静态化导出针对不同 url 的入口文件，去掉 .html 后缀上传到 OSS 上，利用 CDN 加速页面访问，实现无需服务器的静态网站，并支持纯前端无痕页面跳转。提取供公共使用的 Appbar 和 Footer 封装成单独组件。

### Whenbot 天气机器人（钉钉心知天气机器人）

https://whenbot.com/

自定义规则条件（不限于天气），当条件触发时，通过短信、邮件、微信、Webhook 等方式推送至用户终端，例如：当明天 PM2.5 大于 220 并且 温度小于 25℃ 时，发微信提醒我。

**团队成员：** 前端(2) + 后端(1) + 设计(1) (约 3 个月)

负责前端整体架构、开发，整体技术栈类似于新官网

### 气象图层 SDK

https://github.com/seniverse/seniverse-map-demos

包括 WebGl 风场粒子动画，金字塔瓦片图，多通道图层压缩算法，单通道图层前端着色，阈值裁剪算法，前端矢量差值图等一系列功能。

**团队成员：** 前端(3)

**关键技术：** 压缩算法，预加载，缓存，WebGL，Canvas，geotiff，Three.js

### 其他

- 天气插件 v3（已开源）https://github.com/seniverse/widget-v3-frontend
- 重构空气质量排行榜 https://air.seniverse.com/?y=2019&l=WX4FBXXFKE4F
- 多个其他商业合作项目，应公司要求，不便透露

## 个人项目

- next-starter

https://github.com/shianqi/next-starter

创建 Next.js 应用程序的脚手架，也是目前我认为的基于 React 的最佳实践，并在实际的工作学习中不断优化迭代。

- rc-multi-level-selector

https://github.com/shianqi/rc-multi-level-selector

一个 React 组件，可以同时调整多个不同层级相互依赖的选择器（例如国家、省、市、区联动选择器）。

- redux-control

https://github.com/shianqi/redux-control

一个 Redux 的工具库，实现自动 dispatch、像 lodash 的 set、get 函数一样方便读写 store 中的数据。

# 教育经历

2014-2018 内蒙古大学 本科 软件工程专业

在校期间曾多次参加 “挑战杯”、“数学建模”、“ACM-EC Final”、“互联网+”、“黑客马拉松” 等大大小小的比赛，共获得 4 项国家级奖，10 多项自治区级奖。
