

import Encoder from './lib/encode';
import Decoder from './lib/decode';
import version from './version';
import {IEncodeOption} from './type';

function formatEncodeOption (content: string | IEncodeOption): IEncodeOption {
    if (typeof content === 'string') {
        return {text: content} as IEncodeOption;
    }
    return content;
}

export function encodeAsBase64 (content: string | IEncodeOption) {
    const encode = new Encoder(formatEncodeOption(content)) as HTMLCanvasElement;
    return encode.toDataURL();
}

export function encodeAsImage (content: string | IEncodeOption) {
    const image = document.createElement('img');
    image.src = encodeAsBase64(content);
    return image;
}

// decode
export function decodeFromUrl (url: string): Promise<string> {
    return new Promise((resolve) => {
        const image = document.createElement('img');
        image.crossOrigin = 'Anonymous';
        image.onload = function () {
            const imageData = imageToUint8Array(image);
            resolve(Decoder(imageData, image.width, image.height)?.data || '');
        };
        image.src = url;
    });
}

export function decodeFromBase64 (base64: string): Promise<string> {
    return decodeFromUrl(base64);
}

export function decodeFromFile (file: File | Blob): Promise<string> {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const dataURL = e.target?.result;
            if (dataURL) {
                decodeFromBase64(dataURL as string).then(result => {
                    resolve(result);
                });
            } else {
                resolve('');
            }
        };
        reader.readAsDataURL(file);
    });
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

export function decodeBindInput (input: HTMLInputElement, onResult: (result: string)=>void) {
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

export function decodeFromImage (image: HTMLImageElement) {
    return decodeFromUrl(image.src);
}

function imageToUint8Array (image: HTMLImageElement) {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return context.getImageData(0, 0, canvas.width, canvas.height).data;
}

export default {
    encodeAsBase64,
    encodeAsImage,

    decodeFromUrl,
    decodeFromBase64,
    decodeBindInput,
    decodeFromVideo,
    decodeFromCanvas,
    decodeFromFile,
    decodeFromImage,
    version,

    Encoder,
    Decoder,
};
