import {IDecodeResult} from '..';

// 这个库解析 Simple and easy-to-use js library for generating and parsing QR codes 这句话生成的二维码解不出来 所以弃用这个

interface IDecodeQrcode {
    decode(url: string): void;
    callback(result: IDecodeResult): void;
}

interface ICreateDecoder {
    (): IDecodeQrcode;
}

export const createDecoder: ICreateDecoder;