import {IDecodeResult} from '../index.d';

interface IDecodeQrcode {
    decode(url: string): void;
    callback(result: IDecodeResult): void;
}

interface ICreateDecoder {
    (): IDecodeQrcode;
}

export const createDecoder: ICreateDecoder;