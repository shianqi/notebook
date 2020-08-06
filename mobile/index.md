# 移动端兼容 CheckList

### overflow: auto; iOS 手机滚动卡顿

在需要滚动的组件里设置：`-webkit-overflow-scrolling: touch;`

### Button 或者 Link 点击后会有蓝色浮层

```css
* {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
```

### 在 iOS 上，会在 Input 内部出现投影

```css
* {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
```

### 不同浏览器对于 input type="file" 的兼容不同

移动端的 accept 兼容性不同， 无法准确的通过后缀唤起特定的相册或文件管理器。可以将 `accept="image/*"` 来调起图片，`accept="*"` 来调用文件

### 移动端键盘回车键替换为搜索

[移动端回车键替换成搜索](./input-search.md)
