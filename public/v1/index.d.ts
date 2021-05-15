
export type CorrectLevel = 1 | 0 | 3 | 2;

export interface IEncodeOption {
    text: string;
    width?: number; // 默认值 256
    height?: number; // 默认值 256
    typeNumber?: number; // 默认值 4
    colorDark?: string; // 默认值 '#000000'
    colorLight?: string; // 默认值 '#ffffff'
    correctLevel?: CorrectLevel; // 默认值 2
}

export declare class IQRCode {
    constructor(el: string|HTMLElement, option: IEncodeOption | string);
    clear():void;
    makeCode(text: string):void;
    makeImage():void;
    CorrectLevel: { L: 1, M: 0, Q: 3, H: 2 };
}

export interface IDecodeResult {
    result: string; // 解析结果
    success: boolean; // 是否成功
    time: number; // 解码时长
    errorMessage: string; // 错误信息
    error: string | object | null; // 错误信息
    image: string;
}

export function decodeBindInput(input: HTMLInputElement, onResult: (result: IDecodeResult) => void): void
export function decodeFromFile(file: File | Blob): Promise<IDecodeResult>;
export function decodeFromImage(image: HTMLImageElement): Promise<IDecodeResult>;
export function decodeFromUrl(url: string): Promise<IDecodeResult>;
export function decodeFromBase64(base64Str: string): Promise<IDecodeResult>;
export function decodeFromVideo(video: HTMLVideoElement): Promise<IDecodeResult>;
export function decodeFromCanvas(canvas: HTMLCanvasElement): Promise<IDecodeResult>;

export function encodeAsImage(content: string | IEncodeOption): Promise<HTMLImageElement>;
export function encodeAsBase64(content: string | IEncodeOption): Promise<string>;
export function encodeBindDom(content: string | IEncodeOption, dom: HTMLElement): IQRCode;

declare const qrcode: {
    decodeBindInput: typeof decodeBindInput;
    decodeFromFile: typeof decodeFromFile;
    decodeFromImage: typeof decodeFromImage;
    decodeFromUrl: typeof decodeFromUrl;
    decodeFromBase64: typeof decodeFromBase64;
    decodeFromVideo: typeof decodeFromVideo;
    decodeFromCanvas: typeof decodeFromCanvas;

    encodeAsImage: typeof encodeAsImage;
    encodeAsBase64: typeof encodeAsBase64;
    encodeToDom: typeof encodeBindDom;
    version: string;
};

export default qrcode;