# digo-marked
[digo](https://github.com/digojs/digo) 插件：内联 CSS 内的资源。

## 安装
```bash
npm install digo-css-inline -g
```

## 用法
### 编译 Markdown 并重命名为 HTML
```js
digo.src("*.css").pipe("digo-css-inline", {
	".ttf": "application/x-font-truetype",
	".woff": "application/font-woff",
	".svg": "image/svg+xml",
	".gif": "image/gif",
	".ico": "image/x-icon",
	".png": "image/png",
	".jpg": "image/jpeg",
	".wbmp": "image/vnd.wap.wbmp"
});
```

### 源映射(Source Map)
本插件不支持生成源映射。
