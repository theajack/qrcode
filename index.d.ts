declare type CorrectLevel = 1 | 0 | 3 | 2;

declare interface Option {
    width?: number,
    height?: number,
    typeNumber?: number,
    colorDark?: string,
    colorLight?: string,
    correctLevel?: CorrectLevel
}

declare class QRCode {
    constructor(el: string|HTMLElement, option: Option|string);
    clear():void;
    makeCode(text: string):void;
    makeImage():void;
    CorrectLevel: { L: 1, M: 0, Q: 3, H: 2 };
}

export default QRCode;