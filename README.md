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
<h3>🚀 Simple and easy-to-use js library for generating and parsing QR codes</h3>

**[中文](https://github.com/theajack/qrcode/blob/master/README.md) | [Online use](https://www.theajack.com/qrcode) | [Update Log](https://github.com/theajack/qrcode/blob/master/helper/version.md) | [Feedback bug](https://github.com/theajack/qrcode/issues/new) | [Gitee](https://gitee.com/theajack/qrcode/) | [JSBox Demo](https://theajack.gitee.io/jsbox?theme=dark&lang=html&lib=https://cdn.jsdelivr.net/npm/tc-qrcode/tc-qrcode.min.js&code=DwZwxgTglgDgLgAhBMBeARACznGIBcA9IWACYB2AdAFYikCmANlAG4SXn1yHkwC2hOGAC0ARxQB7BoJHiwU+pT5QqtdAD5ghcNHjqAsAChgUPgHMEUUqgDkpgIZn6NpClvZcBYmVV0mrdk5uM0xBTHp7answAGtCOQVCcMYYeghCBj4JMUkGShhyMxtCA2MAIwBXHAlyBBqwZliMBnkGAEVc+gAKAEoNABF6VvoENoAlYa1K6vJSk14qy2s7BbgXFntGCvpbAAkmRgkEAHUJCEZSAEJiuem4GrryBqgm9HonhQ7h3o0AUQ+GKMJgoplV7rMjKBILA4KUEPCEAAzCpPOBQB4tT6dXoAbyMCIJCAAKgBhL4KSiYhgAMQgEj4AEk+I5uqQJGAKnx3nBKE44L9GPQueQ4AAhACeDNIXTszKcNh6PXxhJVlDg4XIXWRqPRtS6EHoIAqjDgPQQeMMKqtCM2aTg+sNxtNAG5ldb4QBfJWWhEet1IlFgNEPd7DckMXH+gnycggRAOJwIVDEsmdSihhQAQRAovsIHoADYACxdNkc4U8vkCoXciVSmUqGBVBWUDZbeg9V0+lVlznc3lcasVuvS2Uslv5uCZnDQabdGzIMA2AA0ljlHa7BL9xm00L0QA)**

---

### 1. Features

1. Call a single api to generate and parse the QR code
2. Use Promise api, support async/await
3. Develop with typescript
4. Analyze QR code to support parsing files, base64, url, image
5. Support screenshots of video and canvas
6. Analyze the QR code to support binding an input element of type file
7. Generate QR code to support returning base64 and image

Note: The codec functions of this library are respectively encapsulated from [aralejs/qrcode](https://github.com/aralejs/qrcode/) and [cozmo/jsQR](https://github.com/cozmo/jsQR)

### 2. Quick use
#### 2.1 npm installation

```
npm i tc-qrcode
```

```js
import qrcode from'tc-qrcode';

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

Please refer to [index.d.ts](https://github.com/theajack/qrcode/blob/master/src/index.d.ts)

Note: 


The encoded apis all support input parameters of type IEncodeOption. If the input is a string, the following parameters are all passed in the default value. The return value is also wrapped by Promise
   
```ts
interface IEncodeOption {
    text: string;
    width?: number; // default value 256
    height?: number; // default value 256
    typeNumber?: number; // default value 4
    colorDark?: string; // default value'#000000'
    colorLight?: string; // default value'#ffffff'
    correctLevel?: 1 | 0 | 3 | 2; // default value 2
}
```

#### 3.1 decodeFromUrl

Parse the QR code from the url, which can be an online picture address or blob url

```ts
function decodeFromUrl(url: string): Promise<string>;
```

```js
import {decodeFromUrl} from'tc-qrcode';
decodeFromUrl('xxx').then(result=>{});
```

#### 3.2 decodeFromFile

Parse the QR code from the file object

```ts
function decodeFromFile(file: File): Promise<string>;
```

```js
import {decodeFromFile} from'tc-qrcode';
decodeFromFile(file).then(result=>{});
```

#### 3.3 decodeFromBase64

Parse the QR code from the base64 graph

```ts
function decodeFromBase64(base64Str: string): Promise<string>;
```

```js
import {decodeFromBase64} from'tc-qrcode';
decodeFromBase64(base64).then(result=>{});
```

#### 3.4 decodeFromImage

Parse the QR code from the image object

```ts
function decodeFromImage(image: HTMLImageElement): Promise<string>;
```

```js
import {decodeFromImage} from'tc-qrcode';
decodeFromImage(image).then(result=>{});
```

#### 3.5 decodeFromVideo

Take a screenshot from the video object and parse the QR code

```ts
function decodeFromVideo(video: HTMLVideoElement): Promise<string>;
```

```js
import {decodeFromVideo} from'tc-qrcode';
decodeFromVideo(video).then(result=>{});
```

#### 3.6 decodeFromCanvas

Take a screenshot from the canvas object and parse the QR code

```ts
function decodeFromCanvas(canvas: HTMLCanvasElement): Promise<string>;
```

```js
import {decodeFromCanvas} from'tc-qrcode';
decodeFromCanvas(canvas).then(result=>{});
```

#### 3.7 decodeBindInput

Bind an input element whose type is file as the input source, and continuously parse the QR code

This method does not return a string object, but uses a callback function to receive the return value

```ts
function decodeBindInput(input: HTMLInputElement, onResult: (result: string) => void): void;
```

```js
import {decodeBindInput} from'tc-qrcode';
decodeBindInput(input, (result)=>{

});
```

#### 3.8 encodeAsBase64

Encode the content as a base64 image

```ts
function encodeAsBase64(content: string | IEncodeOption): string;
```

```js
import {encodeAsBase64} from'tc-qrcode';
const base64 = encodeAsBase64('xxxx');

// or use parameters
const base64 = encodeAsBase64({
    text:'xxx',
    width: 256, // default value 256
    height: 256, // default value 256
    typeNumber: 4; // default value 4
    colorDark:'#000000'; // default value'#000000'
    colorLight:'#ffffff'; // default value'#ffffff'
    correctLevel: 2; // default value 2
});
```

#### 3.9 encodeAsImage

Generate an image element after encoding the content into base64

```ts
function encodeAsImage(content: string | IEncodeOption): HTMLImageElement;
```

```js
import {encodeAsImage} from'tc-qrcode';
const image = encodeAsImage('xxxx'); // The parameters are consistent with 3.8
```

#### 3.10 version

Get the version number

```js
import qrcode from'tc-qrcode';

qrcode.version;
```

#### 3.11 Encoder

Expose the coding library [aralejs/qrcode](https://github.com/aralejs/qrcode/)

```js
import qrcode from'tc-qrcode';

qrcode.Encoder;
```

#### 3.12 Dncoder

Expose the decoding library [cozmo/jsQR](https://github.com/cozmo/jsQR)

```js
import qrcode from'tc-qrcode';

qrcode.Decoder;
```
