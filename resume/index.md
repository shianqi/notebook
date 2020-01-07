# 史安琪 （北京，全栈，目前在职）

### 自我评价

全栈工程师 / 极客 / 实践派 / 开源软件爱好者

除去开发外，对绘画、设计、交互、产品都有自己的见解和追求

### 联系方式

- https://shianqi.github.io
- mail@shianqi.com
- github.com/shianqi
- 177-4440-6894

# 工作经历

## 北京心知科技有限公司（A 轮）

（前端开发工程师 2017-10 ~ 2018-7 实习 2018-7 ~ 至今）

### 天气数据可视化分析平台（旧项目维护，升级）

https://www.seniverse.com/insights

基于高精度气象数据，多种可视化展现形式，实时查看和分析分钟级、公里级的天气实况、预报和预警数据

负责：维护原有可视化平台，并在基础上添加了天气地图、推送、用户、广告等模块

### 新官网与新后台管理系统

https://www.seniverse.com/

团队成员：2 前端 + 3 后端 + 2 设计

项目历时：设计 + 实现共计约 45 天

负责工作：整体架构，除 Dashboard 外的页面编写

*架构：*整体采用 Next.js 框架，使用 React + Typescript 编写。用 Redux 管理状态，样式方面采用 Material-UI + styled-components 编写，并遵循 Material Design 设计规范。同时还编写了一个基于 koa 的 BFF 服务用于整合部分复杂的前后端交互逻辑。

*部署：*进行同构渲染，并静态化导出针对不同 url 的入口文件，去掉 .html 后缀上传到 OSS 上，利用 CDN 加速页面访问，实现无需服务器的静态网站，并支持前端无痕页面跳转。提取供公共使用的 Appbar 和 Footer 封装成单独组件。

### Whenbot 天气机器人（钉钉心知天气机器人）

自定义规则条件（不限于天气），当条件触发时，通过短信、邮件、微信、Webhook 等方式推送至用户终端，例如：当明天 PM2.5 大于 220 并且 温度小于 25℃ 时，发微信提示我。

团队成员：2 前端 + 1 后端 + 1 设计

负责前端开发，整体技术类似于新官网

https://whenbot.com/

### 天气插件 v3

https://github.com/seniverse/widget-v3-frontend

团队成员：3 前端 + 1 后端

负责部分样式的设计和前端整体技术的选型、编码。设计遵循 Material Design 设计规范，追求更加灵活的配置方式。

### 气象图层 SDK

https://www.seniverse.com/visualizations_demo

包括：WebGl 风场粒子动画，金字塔瓦片图，多通道图层压缩算法，单通道图层前端着色，阈值裁剪算法，前端矢量差值图等一系列功能。

关键词：压缩算法，预加载，缓存，WebGL，Canvas，geotiff，Three.js

### 多个其他商业合作项目

## 个人项目

- next-starter

https://github.com/shianqi/next-starter

创建 Next.js 应用程序的脚手架，也是目前我认为的基于 React 的最佳实践，并在实际的工作学习中不断优化迭代。

- rc-multi-level-selector

https://github.com/shianqi/rc-multi-level-selector

一个 React 组件，可以同时调整多个不同层级相互依赖的选择器（例如国家、省、市、区联动选择器）。

- redux-control

https://github.com/shianqi/redux-control

一个 Redux 的工具库，实现自动 dispatch、类 lodash 的 set、get 函数。

## 教育经历

2014-2018 内蒙古大学 本科 软件工程专业

在校期间曾多次参加 “挑战杯”、“数学建模”、“ACM-EC Final”、“互联网+”、“黑客马拉松” 等大大小小的比赛，共获得 4 项国家级奖，10 多项自治区级奖。
