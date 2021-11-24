# [tc-qrcode](https://www.github.com/theajack/qrcode)

<p>
    <a href="https://www.github.com/theajack/qrcode/stargazers" target="_black">
        <img src="https://img.shields.io/github/stars/theajack/qrcode?logo=github" alt="stars" />
    </a>
    <a href="https://www.github.com/theajack/qrcode/network/members" target="_black">
        <img src="https://img.shields.io/github/forks/theajack/qrcode?logo=github" alt="forks" />
    </a>
    <a href="https://www.npmjs.com/package/tc-qrcode" target="_black">
        <img src="https://img.shields.io/npm/v/tc-qrcode?logo=npm" alt="version" />
    </a>
    <a href="https://www.npmjs.com/package/tc-qrcode" target="_black">
        <img src="https://img.shields.io/npm/dm/tc-qrcode?color=%23ffca28&logo=npm" alt="downloads" />
    </a>
    <a href="https://www.jsdelivr.com/package/npm/tc-qrcode" target="_black">
        <img src="https://data.jsdelivr.com/v1/package/npm/tc-qrcode/badge" alt="jsdelivr" />
    </a>
    <a href="https://github.com/theajack/qrcode/issues"><img src="https://img.shields.io/github/issues-closed/theajack/qrcode.svg" alt="issue"></a>
</p>
<p>
    <a href="https://github.com/theajack" target="_black">
        <img src="https://img.shields.io/badge/Author-%20theajack%20-7289da.svg?&logo=github" alt="author" />
    </a>
    <a href="https://www.github.com/theajack/qrcode/blob/master/LICENSE" target="_black">
        <img src="https://img.shields.io/github/license/theajack/qrcode?color=%232DCE89&logo=github" alt="license" />
    </a>
    <a href="https://cdn.jsdelivr.net/npm/tc-qrcode/tc-qrcode.min.js"><img src="https://img.shields.io/bundlephobia/minzip/tc-qrcode.svg" alt="Size"></a>
    <a href="https://github.com/theajack/qrcode/search?l=javascript"><img src="https://img.shields.io/github/languages/top/theajack/qrcode.svg" alt="TopLang"></a>
    <a href="https://www.github.com/theajack/qrcode"><img src="https://img.shields.io/librariesio/dependent-repos/npm/tc-qrcode.svg" alt="Dependent"></a>
    <a href="https://github.com/theajack/qrcode/blob/master/test/test-report.txt"><img src="https://img.shields.io/badge/test-passed-44BB44" alt="test"></a>
</p>

<h3>🚀 简单好用的生成和解析二维码的js库</h3>

**[英文](https://github.com/theajack/qrcode/blob/master/README.md) | [在线使用](https://www.theajack.com/qrcode) | [更新日志](https://github.com/theajack/qrcode/blob/master/helper/version.md) | [反馈](https://github.com/theajack/qrcode/issues/new) | [Gitee](https://gitee.com/theajack/qrcode/) |  [JSBox Demo](https://theajack.gitee.io/jsbox?theme=dark&lang=html&lib=https://cdn.jsdelivr.net/npm/tc-qrcode/tc-qrcode.min.js&code=DwZwxgTglgDgLgAhBMBeARACznGIBcA9IWACYB2AdAFYikCmANlAG4SXn1yHkwC2hOGAC0ARxQB7BoJHiwU+pT5QqtdAD5ghcNHjqAsAChgUPgHMEUUqgDkpgIZn6NpClvZcBYmVV0mrdk5uM0xBTHp7answAGtCOQVCcMYYeghCBj4JMUkGShhyMxtCA2MAIwBXHAlyBBqwZliMBnkGAEVc+gAKAEoNABF6VvoENoAlYa1K6vJSk14qy2s7BbgXFntGCvpbAAkmRgkEAHUJCEZSAEJiuem4GrryBqgm9HonhQ7h3o0AUQ+GKMJgoplV7rMjKBILA4KUEPCEAAzCpPOBQB4tT6dXoAbyMCIJCAAKgBhL4KSiYhgAMQgEj4AEk+I5uqQJGAKnx3nBKE44L9GPQueQ4AAhACeDNIXTszKcNh6PXxhJVlDg4XIXWRqPRtS6EHoIAqjDgPQQeMMKqtCM2aTg+sNxtNAG5ldb4QBfJWWhEet1IlFgNEPd7DckMXH+gnycggRAOJwIVDEsmdSihhQAQRAovsIHoADYACxdNkc4U8vkCoXciVSmUqGBVBWUDZbeg9V0+lVlznc3lcasVuvS2Uslv5uCZnDQabdGzIMA2AA0ljlHa7BL9xm00L0QA)**

---

### 1. 特性

1. 调用单个api生成和解析二维码
2. 使用Promise api， 支持async/await
3. 使用 typescript 开发
4. 解析二维码支持解析文件，base64，url，image
5. 支持video和canvas的截屏
6. 解析二维码支持绑定一个type为file的input元素
7. 生成二维码支持返回 base64 and image

注：该库编解码功能分别封装自 [aralejs/qrcode](https://github.com/aralejs/qrcode/) 和 [cozmo/jsQR](https://github.com/cozmo/jsQR)

### 2. 快速使用

#### 2.1 npm 安装

```
npm i tc-qrcode
```

```js
import qrcode from 'tc-qrcode';

qrcode.decodeFromUrl('https://cdn.jsdelivr.net/gh/theajack/qrcode/helper/demo-qrcode.png')
    .then(result=>{
        console.log(result);
    })
```

#### 2.2 cdn


```html
<script src="https://cdn.jsdelivr.net/npm/tc-qrcode/tc-qrcode.min.js"></script>
<script>
    TCQrcode.decodeFromUrl('https://cdn.jsdelivr.net/gh/theajack/qrcode/helper/demo-qrcode.png')
        .then(function (result) {
            console.log(result);
        })
</script>
```

### 3 api

请参考 [index.d.ts](https://github.com/theajack/qrcode/blob/master/src/index.d.ts)

注: 


编码的api都支持类型为 IEncodeOption 输入参数，如果传入的是字符串，则以下参数都传入默认值. 返回值也都是经过Promise 包裹的
   
```ts
interface IEncodeOption {
    text: string;
    width?: number; // 默认值 256
    height?: number; // 默认值 256
    typeNumber?: number; // 默认值 4
    colorDark?: string; // 默认值 '#000000'
    colorLight?: string; // 默认值 '#ffffff'
    correctLevel?: 1 | 0 | 3 | 2; // 默认值 2
}
```

#### 3.1 decodeFromUrl

从url中解析二维码，可以是一个在线的图片地址或者blob url

```ts
function decodeFromUrl(url: string): Promise<string>;
```

```js
import {decodeFromUrl} from 'tc-qrcode';
decodeFromUrl('xxx').then(result=>{});
```

#### 3.2 decodeFromFile

从file对象中解析二维码

```ts
function decodeFromFile(file: File): Promise<string>;
```

```js
import {decodeFromFile} from 'tc-qrcode';
decodeFromFile(file).then(result=>{});
```

#### 3.3 decodeFromBase64

从base64的图中解析二维码

```ts
function decodeFromBase64(base64Str: string): Promise<string>;
```

```js
import {decodeFromBase64} from 'tc-qrcode';
decodeFromBase64(base64).then(result=>{});
```

#### 3.4 decodeFromImage

从image对象中解析二维码

```ts
function decodeFromImage(image: HTMLImageElement): Promise<string>;
```

```js
import {decodeFromImage} from 'tc-qrcode';
decodeFromImage(image).then(result=>{});
```

#### 3.5 decodeFromVideo

从video对象中截图并解析二维码

```ts
function decodeFromVideo(video: HTMLVideoElement): Promise<string>;
```

```js
import {decodeFromVideo} from 'tc-qrcode';
decodeFromVideo(video).then(result=>{});
```

#### 3.6 decodeFromCanvas

从canvas对象中截图并解析二维码

```ts
function decodeFromCanvas(canvas: HTMLCanvasElement): Promise<string>;
```

```js
import {decodeFromCanvas} from 'tc-qrcode';
decodeFromCanvas(canvas).then(result=>{});
```

#### 3.7 decodeBindInput

绑定一个type为file的input元素作为输入源，持续的解析二维码

这个方法不会返回 string 对象，而是使用一个回调函数来接收返回值

```ts
function decodeBindInput(input: HTMLInputElement, onResult: (result: string) => void): void;
```

```js
import {decodeBindInput} from 'tc-qrcode';
decodeBindInput(input, (result)=>{

});
```

#### 3.8 encodeAsBase64

将内容编码为base64的图片

```ts
function encodeAsBase64(content: string | IEncodeOption): string;
```

```js
import {encodeAsBase64} from 'tc-qrcode';
const base64 = encodeAsBase64('xxxx');

// 或使用参数
const base64 = encodeAsBase64({
    text: 'xxx',
    width: 256, // 默认值 256
    height: 256, // 默认值 256
    typeNumber: 4; // 默认值 4
    colorDark: '#000000'; // 默认值 '#000000'
    colorLight: '#ffffff'; // 默认值 '#ffffff'
    correctLevel: 2; // 默认值 2
});
```

#### 3.9 encodeAsImage

将内容编码为base64之后生成一个image元素

```ts
function encodeAsImage(content: string | IEncodeOption): HTMLImageElement;
```

```js
import {encodeAsImage} from 'tc-qrcode';
const image = encodeAsImage('xxxx'); // 参数与3.8一致
```

#### 3.10 version

获取版本号

```js
import qrcode from 'tc-qrcode';

qrcode.version;
```

#### 3.11 Encoder

暴露出编码使用库 [aralejs/qrcode](https://github.com/aralejs/qrcode/)

```js
import qrcode from 'tc-qrcode';

qrcode.Encoder;
```

#### 3.12 Dncoder

暴露出解码使用库 [cozmo/jsQR](https://github.com/cozmo/jsQR)

```js
import qrcode from 'tc-qrcode';

qrcode.Decoder;
```
