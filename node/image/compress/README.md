# 图片优化方法探索

## 雪碧图

- [webpack-spritesmith](https://github.com/mixtur/webpack-spritesmith)
- [spritesheet-templates](https://github.com/twolfson/spritesheet-templates)
- [spritesmith](https://github.com/twolfson/spritesmith)

将图像集转换为 spritesheet 和 SASS / LESS / Stylus mixins

## 对原始图片进行压缩

常用的工具有：[imagemin](https://github.com/imagemin/imagemin)

[imagemin-webpack-plugin](https://github.com/Klathmon/imagemin-webpack-plugin)

// TODO:

## 使用渐进式图片

[responsive-loader](https://github.com/herrstucki/responsive-loader)

// TODO:

## 内联小图像

// TODO:

## 添加 url 哈希

// TODO:

## jpeg/png 可转化为 webp 获得更小的尺寸

// TODO:

## SVG sprites

// TODO:

## 占位符（搭配 SSR 使用效果更佳）

// TODO:

### SVG

- [sqip-loader](https://github.com/EmilTholin/sqip-loader)

webpack loader，获取图片 Url，调用 `sqip` 后获取 svg 字符串并添加 `data:image/svg+xml,` 头文件信息后返回。

- [sqip](https://github.com/axe312ger/sqip)

node.js 调用本机的 Golang 运行 [primitive](https://github.com/fogleman/primitive)，对将图片压缩成一个 svg，添加高斯模糊并用 svgo 进行压缩后返回。

[primitive](https://github.com/fogleman/primitive)

primitive 的原理：

1. 首先用单色进行填充（平均颜色），作为`目标画布`
1. 随机生成一个形状，画在`目标画布`上，形成`新画布`，对`新画布`和`目标画布`进行评估（[均方根误差](https://en.wikipedia.org/wiki/Root-mean-square_deviation)）。
1. 如果评估得分有所改善，则将`新画布`作为`目标画布`，重新执行过程 2。否则舍弃`新画布`，重新执行过程 2。直至找到评分良好的形状。

优化：

- 使用 (爬山)[https://en.wikipedia.org/wiki/Hill_climbing] 或者 [模拟退火](https://en.wikipedia.org/wiki/Simulated_annealing) 算法可对这个过程进行优化，针对本问题，怕算算法可以获得和模拟退火算法相似的分数，但是更快。
- 还可以同时在过程 2 中同时进行多次尝试，选取最优值。

### image

[lqip-loader](https://github.com/zouhir/lqip-loader)

webpack loader，获取图片 Url，调用 `lqip` 返回结果

[lqip](https://github.com/zouhir/lqip)

原理：调用 [jimp](https://github.com/oliver-moran/jimp) 对图片进行 resize，并转换成 base64 后返回。

## 解决方案：

https://github.com/cyrilwanner/next-optimized-images
