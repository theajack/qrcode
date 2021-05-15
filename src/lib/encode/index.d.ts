import {IEncodeOption} from '../../type';

export interface IQrcodeEncodeOption extends IEncodeOption {
	render?: 'canvas' | 'svg' | 'table'; // canvas 配置用哪个节点元素画二维码
}

export default class qrcode {
    constructor(options: IQrcodeEncodeOption);
}