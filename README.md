# [qrcode-module](https://github.com/theajack/qrcode)

#### [theajack](https://www.theajack.com/)

对 [qrcodejs](https://www.npmjs.com/package/qrcodejs) 做的封装，加入可导入和ts支持

### npm 使用
```
npm i qrcode-module
```

```js
import QRCode from 'qrcode-module'
new QRCode(document.getElementById("qrcode"), "https://www.google.com");
```

### cdn 使用

```html
<div id="qrcode"></div>
<script src="https://cdn.jsdelivr.net/npm/qrcode-module/qrcode-module.min.js"></script>
<script>
new QRCode(document.getElementById("qrcode"), "https://www.google.com");
</script>
```


以下为 qrcodejs readme原文

# QRCode.js
QRCode.js is javascript library for making QRCode. QRCode.js supports Cross-browser with HTML5 Canvas and table tag in DOM.
QRCode.js has no dependencies.

## Basic Usages
```html
<div id="qrcode"></div>
<script type="text/javascript">
new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
</script>
```

or with some options

```js
var qrcode = new QRCode("test", {
	text: "http://jindo.dev.naver.com/collie",
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
```

and you can use some methods

```js
qrcode.clear(); // clear the code.
qrcode.makeCode("http://naver.com"); // make another code.
```

## Browser Compatibility
IE6~10, Chrome, Firefox, Safari, Opera, Mobile Safari, Android, Windows Mobile, ETC.

## License
MIT License

## Contact
twitter @davidshimjs

