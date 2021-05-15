import QRCodeAlg from './qrcodealg';

const qrcodeAlgObjCache = [];
const extend = Object.assign;

/**
* 计算矩阵点的前景色
* @param {Obj} config
* @param {Number} config.row 点x坐标
* @param {Number} config.col 点y坐标
* @param {Number} config.count 矩阵大小
* @param {Number} config.options 组件的options
* @return {String}
*/
const getForeGround = function (config) {
    const options = config.options;
    if ( options.pdground && (
        (config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5)
        || (config.row > (config.count - 6) && config.row < (config.count - 2) && config.col > 1 && config.col < 5)
        || (config.row > 1 && config.row < 5 && config.col > (config.count - 6) && config.col < (config.count - 2))
    )) {
        return options.pdground;
    }
    return options.foreground;
};
/**
* 点是否在Position Detection
* @param  {row} 矩阵行
* @param  {col} 矩阵列
* @param  {count} 矩阵大小
* @return {Boolean}
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inPositionDetection = function (row, col, count) {
    if (
        (row < 7 && col < 7)
        || (row > (count - 8) && col < 7)
        || (row < 7 && col > (count - 8) )
    ) {
        return true;
    }
    return false;
};
/**
* 获取当前屏幕的设备像素比 devicePixelRatio/backingStore
* @param {context} 当前 canvas 上下文，可以为 window
*/
const getPixelRatio = function () {
    return 1;
    // const backingStore = context.backingStorePixelRatio
    //     || context.webkitBackingStorePixelRatio
    //     || context.mozBackingStorePixelRatio
    //     || context.msBackingStorePixelRatio
    //     || context.oBackingStorePixelRatio
    //     || context.backingStorePixelRatio
    //     || 1;

    // return (window.devicePixelRatio || 1) / backingStore;
};

/**
 * 二维码构造函数，主要用于绘制
 * @param  {参数列表} opt 传递参数
 * @return {}
 */
const qrcode = function (opt) {
    if (typeof opt === 'string') { // 只编码ASCII字符串
        opt = {
            text: opt
        };
    }
    // 设置默认参数
    this.options = extend({}, {
        text: '',
        render: '',
        size: 256,
        correctLevel: 3,
        background: '#ffffff',
        foreground: '#000000',
        image: '',
        imageSize: 30
    }, opt);

    // 使用QRCodeAlg创建二维码结构
    let qrCodeAlg = null;
    let i = 0, l;
    for (i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
        if (qrcodeAlgObjCache[i].text == this.options.text && qrcodeAlgObjCache[i].text.correctLevel == this.options.correctLevel) {
            qrCodeAlg = qrcodeAlgObjCache[i].obj;
            break;
        }
    }

    if (i == l) {
        qrCodeAlg = new QRCodeAlg(this.options.text, this.options.correctLevel);
        qrcodeAlgObjCache.push({text: this.options.text, correctLevel: this.options.correctLevel, obj: qrCodeAlg});
    }

    if (this.options.render) {
        switch (this.options.render) {
            case 'canvas':
                return this.createCanvas(qrCodeAlg);
            case 'table':
                return this.createTable(qrCodeAlg);
            case 'svg':
                return this.createSVG(qrCodeAlg);
            default:
                return this.createDefault(qrCodeAlg);
        }
    }
    return this.createDefault(qrCodeAlg);
};

extend(qrcode.prototype, {
    // default create  canvas -> svg -> table
    createDefault (qrCodeAlg) {
        const canvas = document.createElement('canvas');
        if (canvas.getContext) {
            return this.createCanvas(qrCodeAlg);
        }
        const SVG_NS = 'http://www.w3.org/2000/svg';
        if ( !!document.createElementNS && !!document.createElementNS(SVG_NS, 'svg').createSVGRect ) {
            return this.createSVG(qrCodeAlg);
        }
        return this.createTable(qrCodeAlg);
    },
    // canvas create
    createCanvas (qrCodeAlg) {
        const options = this.options;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const count = qrCodeAlg.getModuleCount();
        const ratio = getPixelRatio(ctx);
        const size = options.size;
        const ratioSize = size * ratio;
        const ratioImgSize = options.imageSize * ratio;
        // preload img
        const loadImage = function (url, callback) {
            const img = new Image();
            img.src = url;
            img.onload = function () {
                callback(this);
                img.onload = null;
            };
        };

        // 计算每个点的长宽
        const tileW = (ratioSize / count).toPrecision(4);
        const tileH = (ratioSize / count).toPrecision(4);

        canvas.width = ratioSize;
        canvas.height = ratioSize;

        // 绘制
        for (let row = 0; row < count; row++) {
            for (let col = 0; col < count; col++) {
                const w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
                const h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
                const foreground = getForeGround({
                    row: row,
                    col: col,
                    count: count,
                    options: options
                });
                ctx.fillStyle = qrCodeAlg.modules[row][col] ? foreground : options.background;
                ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
            }
        }
        if (options.image) {
            loadImage(options.image, function (img) {
                const x = ((ratioSize - ratioImgSize) / 2).toFixed(2);
                const y = ((ratioSize - ratioImgSize) / 2).toFixed(2);
                ctx.drawImage(img, x, y, ratioImgSize, ratioImgSize);
            });
        }
        canvas.style.width = size + 'px';
        canvas.style.height = size + 'px';
        return canvas;
    },
    // table create
    createTable (qrCodeAlg) {
        const options = this.options;
        const count = qrCodeAlg.getModuleCount();

        // 计算每个节点的长宽；取整，防止点之间出现分离
        let tileW = Math.floor(options.size / count);
        let tileH = Math.floor(options.size / count);
        if (tileW <= 0) {
            tileW = count < 80 ? 2 : 1;
        }
        if (tileH <= 0) {
            tileH = count < 80 ? 2 : 1;
        }

        // 创建table节点
        // 重算码大小
        const s = [];
        s.push(`<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color:${options.background};">`);

        // 绘制二维码
        for (let row = 0; row < count; row++) {
            s.push(`<tr style="border:0px; margin:0px; padding:0px; height:${tileH}px">`);
            for (let col = 0; col < count; col++) {
                const foreground = getForeGround({
                    row: row,
                    col: col,
                    count: count,
                    options: options
                });
                if (qrCodeAlg.modules[row][col]) {
                    s.push(`<td style="border:0px; margin:0px; padding:0px; width:${tileW}px; background-color:${foreground}"></td>`);
                } else {
                    s.push(`<td style="border:0px; margin:0px; padding:0px; width:${tileW}px; background-color:${options.background}"></td>`);
                }
            }
            s.push('</tr>');
        }
        s.push('</table>');

        if (options.image) {
            // 计算表格的总大小
            const width = tileW * count;
            const height = tileH * count;
            const x = ((width - options.imageSize) / 2).toFixed(2);
            const y = ((height - options.imageSize) / 2).toFixed(2);
            s.unshift(`<div style='position:relative;
                        width:${width}px;
                        height:${height}px;'>`);
            s.push(`<img src='${options.image}'
                        width='${options.imageSize}'
                        height='${options.imageSize}'
                        style='position:absolute;left:${x}px; top:${y}px;'>`);
            s.push('</div>');
        }

        const span = document.createElement('span');
        span.innerHTML = s.join('');

        return span.firstChild;
    },
    // create svg
    createSVG (qrCodeAlg) {
        const options = this.options;
        const count = qrCodeAlg.getModuleCount();
        const scale = count / options.size;

        // create svg
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', options.size);
        svg.setAttribute('height', options.size);
        svg.setAttribute('viewBox', `0 0 ${count} ${count}`);

        for (let row = 0; row < count; row++) {
            for (let col = 0; col < count; col++) {
                const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                const foreground = getForeGround({
                    row: row,
                    col: col,
                    count: count,
                    options: options
                });
                rect.setAttribute('x', col);
                rect.setAttribute('y', row);
                rect.setAttribute('width', 1);
                rect.setAttribute('height', 1);
                rect.setAttribute('stroke-width', 0);
                if (qrCodeAlg.modules[row][ col]) {
                    rect.setAttribute('fill', foreground);
                } else {
                    rect.setAttribute('fill', options.background);
                }
                svg.appendChild(rect);
            }
        }

        // create image
        if (options.image) {
            const img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', options.image);
            img.setAttribute('x', ((count - options.imageSize * scale) / 2).toFixed(2));
            img.setAttribute('y', ((count - options.imageSize * scale) / 2).toFixed(2));
            img.setAttribute('width', options.imageSize * scale);
            img.setAttribute('height', options.imageSize * scale);
            svg.appendChild(img);
        }

        return svg;
    }
});

export default qrcode;
