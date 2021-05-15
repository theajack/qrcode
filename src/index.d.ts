import {Encoder, Decoder, IEncodeOption} from './type';

export function decodeBindInput(input: HTMLInputElement, onResult: (result: string) => void): void
export function decodeFromFile(file: File | Blob): Promise<string>;
export function decodeFromImage(image: HTMLImageElement): Promise<string>;
export function decodeFromUrl(url: string): Promise<string>;
export function decodeFromBase64(base64: string): Promise<string>;
export function decodeFromVideo(video: HTMLVideoElement): Promise<string>;
export function decodeFromCanvas(canvas: HTMLCanvasElement): Promise<string>;

export function encodeAsImage(content: string | IEncodeOption): HTMLImageElement;
export function encodeAsBase64(content: string | IEncodeOption): string;

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
    version: string;

    Encoder: Encoder;
    Decoder: Decoder;
};

export default qrcode;