## 移动端回车键替换成搜索

1. 需要将 input 添加 `type="search"` 属性
2. 在 Safari 浏览器下需要用一个带 `action` 的 `form` 包裹
3. 用 from 包裹后会导致 input 回车的时候自动触发 `form` 的 `submit`，导致无法正常搜索
4. 需要在 `onKeyDown` 触发 `e.keyCode === 13` 的时候 `e.preventDefault()`
5. 当 `type="search"` 的时候 input 右侧会出现一个 ❎ 清空按钮，可以使用下面的代码覆盖

```
&::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
```
