

import {createDecoder} from './lib/reqrcode';
import {IEncodeOption, IQRCode, IDecodeResult} from './index.d';
import QRCode from './lib/qrcode';
import version from './version';

export function decodeBindInput (input: HTMLInputElement, onResult: (result: IDecodeResult)=>void) {
    input.onchange = function () {
        const files = input.files;
        if (!files) {return;}
        for (let i = 0; i < files.length; i++) {
            decodeFromFile(files[0]).then(result => {
                onResult(result);
            });
        }
    };
}

export function decodeFromFile (file: File | Blob) {
    const URL = window.URL || window.webkitURL;
    const url = URL.createObjectURL(file);
    return decodeFromUrl(url);
}

export function decodeFromImage (image: HTMLImageElement) {
    return decodeFromUrl(image.src);
}

export function decodeFromUrl (url: string): Promise<IDecodeResult> {
    return new Promise(resolve => {
        const qrcode = createDecoder();
        qrcode.decode(url);
        qrcode.callback = function (result: IDecodeResult) {
            result.image = url;
            resolve(result);
        };
    });
}

export function decodeFromBase64 (base64: string) {
    return decodeFromUrl(base64);
}

export function decodeFromVideo (video: HTMLVideoElement) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);  // 图片大小和视频分辨率一致
    return decodeFromCanvas(canvas);
}

export function decodeFromCanvas (canvas: HTMLCanvasElement) {
    const base64 = canvas.toDataURL('image/jpg');   // canvas中video中取一帧图片并转成dataURL
    return decodeFromBase64(base64);
}

export function encodeAsImage (content: string | IEncodeOption): Promise<HTMLImageElement> {
    return new Promise(resolve => {
        const div = document.createElement('div');
        encodeBindDom(content, div);
        const image = div.children[1] as HTMLImageElement;
        image.onload = function () {
            resolve(image);
        };
    });
}

export async function encodeAsBase64 (content: string | IEncodeOption) {
    return (await encodeAsImage(content)).src;
}

export function encodeBindDom (content: string | IEncodeOption, dom: HTMLElement): IQRCode {
    return new QRCode(dom, content);
}

export default {
    decodeBindInput,
    decodeFromFile,
    decodeFromImage,
    decodeFromBase64,
    decodeFromCanvas,
    decodeFromUrl,
    decodeFromVideo,

    encodeAsBase64,
    encodeAsImage,
    encodeBindDom,
    version,
};