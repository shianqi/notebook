# 动画解决方案

动画内容是否是实时生成

|     | css | SVG | Video / gif | 图片定帧动画 | canvas | webgl | flash | Javascript + HTML |
| --- | --- | --- | ----------- | ------------ | ------ | ----- | ----- | ----------------- |

## SVG

https://segmentfault.com/a/1190000016651711

https://www.cnblogs.com/chuchur/p/10462282.html

[lottie-web](https://github.com/airbnb/lottie-web)
[react-lottie](https://github.com/chenqingspring/react-lottie)

https://github.com/adobe-webplatform/Snap.svg
https://github.com/alexk111/SVG-Morpheus

## JavaScript + HTML

通过 setInterval 或 setTimeout 方法的回调函数来持续调用改变某个元素的 CSS 样式以达到元素样式变化的效果。

Jquery 的 `animate()` 方法就是这种方式实现的。JavaScript 实现动画通常会导致页面频繁性重排重绘，性能不是很好

## CSS

#### css-transitions

clip-path

#### css-animations

#### web-animations

polyfile: [web-animations-js](https://github.com/web-animations/web-animations-js)

https://animista.net/

性能

1.只动画化 transform 和 opacity

2.开发者工具

3.尽量少操作 dom

## Video

可以通过控制视频的播放和暂停来实现一些复杂的动效，也可以播放一段然后通过 JavaScript 循环播放某一段

当视频文件较小时，可以通过 JavaScript 控制播放进度实现帧率较低的倒放，但整体性能不够。

还可以从视频中抽帧来获取数据，配合其他方式渲染，来进行数据压缩

#### 优点：

- 最终视觉效果很好，可以达到其他动画方式难以实现的效果

#### 缺点：

- 对网络环境要求高
- 制作成本高，修改不方便
- 由于视频格式的编码原理，码率高的视频倒放性能会跟不上

例子：

- [miui 12 官网](https://home.miui.com/)
- [为什么选我们-火山引擎](https://www.volcengine.cn/about)
- [火山引擎-教学互动解决方案](https://www.volcengine.cn/solution/interactive-teaching)

## gif

类似通过 Video 的方式，缺点是无法控制播放的进度，并且高清的 gif 体积较大，压缩后的体积小但是会失真严重。

https://www.seniverse.com/about

## Canvas

### Canvas 2D 渲染原理：

之所以叫 Canvas 2D 是为和 WebGL 或称为 Canvas 3D 区分，后续统一用 Canvas 代指 Canvas 2D。

Canvas 既可以用软件方法绘图，也可以使用 GPU 加速绘图，具体采用哪种方式需要看浏览器是否支持并且开启了硬件加速（目前大部分浏览器都是支持硬件加速的）。

以 WebKit 的 Chromium 为例，WebKit 中的图形上下文会创建一个 Skia 图形库提供的 SKCanvas 对象来处理 2D 图形操作请求，具体 SKCanvas 是否使用 GPU 加速取决于创建 SKCanvas 对象的时候是否传入 SKSurface_Gpu 对象。

如果是软件方法绘图，则会进行光栅化扫码的方法来绘制一个一个像素结果，最终会存入一个 SkBitmap 对象中。

如果是硬件加速绘图，同软件方法绘图不同的是，将 2D 图形操作转变为 GL 的操作，使用 3D 图形上下文来绘制，结果保存在 GPU 的内容缓冲区中。

#### 性能

看起来 Canvas 都能用硬件加速了，但是当自己用 Canvas 去实现一些复杂的动画的时候为什么感觉性能跟不上呢？

抛开使用者对 Canvas 的使用优化不足，还有就是 Canvas 的设计本身就会出现性能损耗。Canvas 其实性能是损耗并不是图形库的问题，主要的性能损耗是在浏览器中损耗的，浏览器 Canvas 要保持跨平台兼容性，那么肯定要适配到多个通用图形封装库上，这里是一层封装，然后还要将这层封装暴露成 JavaScript Api，这里又要多一层封装。并且 JavaScript 的运行效率并不够高，正是这些原因导致 Canvas 相对要慢一些。

浏览器中的 Canvas 元素绘制的路径是这样的：

JavaScript 源代码

性能损耗最多的其实就在 JavaScript 引擎这里，况且很多 Canvas 动画或游戏还有许多计算逻辑

[JavaScript 引擎] JavaScript 源代码 -> 抽象语法树 -> 字节码(中间表示) -> JIT(全代码生成器) -> 本地代码（汇编）

参考文章：

[《WebKit 技术内幕》](https://book.douban.com/subject/25910556/)

https://github.com/shianqi/react-weather
https://shianqi.github.io/react-weather/

## WebGL

[Weather Insights](https://www.seniverse.com/insights)

https://github.com/shianqi/3d-wind

https://shianqi.github.io/3d-wind/

Canvas 和 WebGL 性能对比

## FLASH / SilverLight

### FLASH

Flash 非常强大，它们包含丰富的视频、声音、图形和动画，依赖 Adobe Flash Player 插件，由于不安全、不老实、不高效、不开放等一些列原因，已经退出历史舞台

Jalgayo /tʃɑlˈgɑjɔ/ (goodbye in Korean), Flash.

[Goodbye, Flash](https://developers.google.com/search/blog/2019/10/goodbye-flash)

### SilverLight

Microsoft Silverlight 是一个跨浏览器的、跨平台的插件

## 图片定帧动画

<video id="video" controls="" preload="none">
  <source src="./video1.mp4" type="video/mp4">
</video>

图片定帧动画本质上就是一些图片的轮询播放，但要最终达成好的效果是需要一些优化策略

- 合适的预加载逻辑，可以改善图片动画的闪烁问题
- 图片压缩算法，当图片较大时，一个针对该图片的优化算法就显得尤为重要了
- DOM 管理，直接更换 img 标签的 src，还是维护一个 img 列表，通过 css 控制显示与隐藏

[miui 12 官网](https://home.miui.com/)
