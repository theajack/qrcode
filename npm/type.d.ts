interface Chunk {
    type: Mode;
    text: string;
}
interface ByteChunk {
    type: Mode.Byte | Mode.Kanji;
    bytes: number[];
}
interface ECIChunk {
    type: Mode.ECI;
    assignmentNumber: number;
}
type Chunks = Array<Chunk | ByteChunk | ECIChunk>;
interface DecodedQR {
    text: string;
    bytes: number[];
    chunks: Chunks;
    version: number;
}
declare enum Mode {
    Numeric = 'numeric',
    Alphanumeric = 'alphanumeric',
    Byte = 'byte',
    Kanji = 'kanji',
    ECI = 'eci'
}

interface Point {
    x: number;
    y: number;
}
interface QRCode {
    binaryData: number[];
    data: string;
    chunks: Chunks;
    version: number;
    location: {
        topRightCorner: Point;
        topLeftCorner: Point;
        bottomRightCorner: Point;
        bottomLeftCorner: Point;
        topRightFinderPattern: Point;
        topLeftFinderPattern: Point;
        bottomLeftFinderPattern: Point;
        bottomRightAlignmentPattern?: Point;
    };
}
interface Options {
    inversionAttempts?: 'dontInvert' | 'onlyInvert' | 'attemptBoth' | 'invertFirst';
}
export interface Decoder {
    (data: Uint8ClampedArray, width: number, height: number, providedOptions?: Options): QRCode | null;
}

export interface IEncodeOption {
	text: string;
	correctLevel?: 0 | 1 | 2 | 3; // 3 纠错级别，可取0、1、2、3，数字越大说明所需纠错级别越大
	size?: number; // 256 二维码的宽和高，单位是px，只允许生成正方形二维码
	background?: string; // '#ffffff'
	foreground?: string; // '#000000'
	pdground?: string; // 三个角的颜色
	image?: string; // 码正中间图片的url，只支持配置正方形图片
	imageSize?: number; // image的宽和高，单位px 30
}

interface IQrcodeEncodeOption extends IEncodeOption {
	render?: 'canvas' | 'svg' | 'table'; // canvas 配置用哪个节点元素画二维码
}

export class Encoder {
    constructor(options: IQrcodeEncodeOption);
}