// import event from '../npm';
import qrcode from '../src';
import {IQRCode} from '../src/index.d';
import './index.css';

function toast (el: HTMLElement, text: string) {
    const result = el.parentNode?.querySelector('.tip');
    if (!result) return;
    const tip = result as HTMLElement & {__timer: number};

    clearTimeout(tip.__timer);
    tip.innerText = text;
    tip.__timer = window.setTimeout(() => {
        tip.innerText = '';
    }, 2000);
}

function commonInit () {
    const findDisplayEle = (el: HTMLElement) => {
        const pp = el.parentNode?.parentNode as HTMLElement;
        if (!pp) return document.createElement('div');
        return pp.querySelector('.display') as HTMLElement;
    };
    eachClass('copy-result', (el) => {
        el.onclick = () => {
            copy(findDisplayEle(el).innerText);
            toast(el, '复制成功');
        };
    });
    eachClass('clear-result', (el) => {
        el.onclick = () => {
            findDisplayEle(el).innerText = '';
            toast(el, '清除成功');
        };
    });
}

function encodeBindDomInit () {
    let QRcode: IQRCode;
    const id = 'encodeBindDom';
    getEleById(id).onclick = () => {
        const value = getValue(id);
        if (QRcode) {
            QRcode.makeCode(value);
            return;
        } else {
            QRcode = qrcode.encodeBindDom(
                value,
                getDisplayEle(id)
            );
        }
    };
}
function encodeAsBase64Init () {
    const id = 'encodeAsBase64';
    const display = getDisplayEle(id);
    getEleById(id).onclick = async () => {
        const value = getValue(id);
        const result = await qrcode.encodeAsBase64(value);
        display.innerText = result;
    };
}
function encodeAsImageInit () {
    const id = 'encodeAsImage';
    const display = getDisplayEle(id);
    getEleById(id).onclick = async () => {
        const value = getValue(id);
        const image = await qrcode.encodeAsImage(value);
        display.innerHTML = '';
        display.appendChild(image);
    };
}
function decodeBindInputInit () {
    const id = 'decodeBindInput';
    const display = getDisplayEle(id);
    qrcode.decodeBindInput(getEleById(id), (result) => {
        display.innerText = JSON.stringify(result);
    });
}
function decodeFromUrlInit () {
    const id = 'decodeFromUrl';
    const display = getDisplayEle(id);
    getEleById(id).onclick = async () => {
        const value = getValue(id);
        const result = await qrcode.decodeFromUrl(value);
        display.innerText = JSON.stringify(result);
    };
}

declare global {
    interface Window {
        [prop: string]: any;
    }
}


function main () {
    window.qrcode = qrcode;
    initHtml();
    commonInit();
    encodeBindDomInit();
    encodeAsBase64Init();
    encodeAsImageInit();

    decodeBindInputInit();
    decodeFromUrlInit();

}

main();

// utils
function getEleById<T extends HTMLElement = HTMLElement> (id: string) {
    return document.getElementById(id) as T;
}

function getValue (id: string) {
    return getEleById<HTMLInputElement>(`${id}Input`).value;
}

function getDisplayEle (id: string) {
    return getEleById(`${id}Display`);
}

function copy (str: string) {
    let input = document.getElementById('_copy_input_') as HTMLInputElement;
    if (!input) {
        input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute(
            'style',
            'height:10px;position:fixed;top:-100px;opacity:0;'
        );
        input.setAttribute('id', '_copy_input_');
        document.body.appendChild(input);
    }
    input.value = str;
    input.select();

    try {
        if (document.execCommand('Copy')) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
};

function eachClass (className: string, callback: (el: HTMLElement)=>void) {
    const cols = document.querySelectorAll(`.${className}`);
    for (let i = 0; i < cols.length; i++) {
        callback(cols[i] as HTMLElement);
    }
}

function initHtml () {
    document.body.innerHTML = `
    <div class='block'>
        <div class='title'>
            🚀 简单好用的生成和解析二维码的js库 tc-qrcode [使用示例]
            <a href="https://github.com/theajack/qrcode" class="link" target="_blank">Github</a>
            <a href="https://github.com/theajack/qrcode/blob/master/src/index.d.ts" class="link" target="_blank">声明文件</a>
        </div>
    </div>
    <div class='block'>
        <div class='title'>
            绑定DOM生成二维码实例 (encodeBindDom)
            <a class='link' href="https://github.com/theajack/qrcode" target="_blank">文档</a>
        </div>
        <div class='code'>qrcode.encodeBindDom('xxxx', dom);</div>
        <div class='input-group'>
            <input type="text" id='encodeBindDomInput' placeholder="请输入要生成的内容">
            <button id='encodeBindDom'>生成二维码</button>
        </div>
        <div id='encodeBindDomDisplay' class='display'></div>
    </div>
    <div class='block'>
        <div class='title'>
            生成base64 (encodeAsBase64)
            <a class='link' href="https://github.com/theajack/qrcode" target="_blank">文档</a>
        </div>
        <div class='code'>qrcode.encodeAsBase64('xxxx').then(base64=>{});</div>
        <div class='input-group'>
            <input type="text" id='encodeAsBase64Input' placeholder="请输入要生成的内容">
            <button id='encodeAsBase64'>生成二维码</button>
        </div>
        <div class='input-group'>
            <button class='copy-result'>复制</button>
            <button class='clear-result'>清除</button>
            <span class='tip'></span>
        </div>
        <div id='encodeAsBase64Display' class='display flat'></div>
    </div>
    <div class='block'>
        <div class='title'>
            生成Image (encodeAsImage)
            <a class='link' href="https://github.com/theajack/qrcode" target="_blank">文档</a>
        </div>
        <div class='code'>qrcode.encodeAsImage('xxxx').then(image=>{});</div>
        <div class='input-group'>
            <input type="text" id='encodeAsImageInput' placeholder="请输入要生成的内容">
            <button id='encodeAsImage'>生成二维码</button>
        </div>
        <div id='encodeAsImageDisplay' class='display'></div>
    </div>

    <div class='block'>
        <div class='title'>
            绑定input解析二维码 (decodeBindInput)
            <a class='link' href="https://github.com/theajack/qrcode" target="_blank">文档</a>
        </div>
        <div class='code'>qrcode.decodeBindInput(input, (result)=>{});</div>
        <div class='input-group'>
            <input type="file" id='decodeBindInput'>
        </div>
        <div class='input-group'>
            <button class='copy-result'>复制</button>
            <button class='clear-result'>清除</button>
            <span class='tip'></span>
        </div>
        <div id='decodeBindInputDisplay' class='display flat'></div>
    </div>

    <div class='block'>
        <div class='title'>
            解析图片地址 (decodeFromUrl) <span class='tip'>也可以是blob url或base64</span>
            <a class='link' href="https://github.com/theajack/qrcode" target="_blank">文档</a>
        </div>
        <div class='code'>qrcode.decodeFromUrl('xxx').then(result=>{});</div>
        <div class='input-group'>
            <input type="text" id='decodeFromUrlInput' value="https://cdn.jsdelivr.net/gh/theajack/qrcode/helper/demo-qrcode.png" placeholder="请输入图片地址">
            <button id='decodeFromUrl'>解析二维码</button>
        </div>
        <div class='input-group'>
            <button class='copy-result'>复制</button>
            <button class='clear-result'>清除</button>
            <span class='tip'></span>
        </div>
        <div id='decodeFromUrlDisplay' class='display flat'></div>
    </div>

    <div class='block'>
        <div class='title'>
            解析file对象 (decodeFromFile)
            <a class='link' href="https://github.com/theajack/qrcode" target="_blank">文档</a>
        </div>
        <div class='code'>qrcode.decodeFromFile(file).then(result=>{});</div>
    </div>

    <div class='block'>
        <div class='title'>
            解析base64 (decodeFromBase64)
            <a class='link' href="https://github.com/theajack/qrcode" target="_blank">文档</a>
        </div>
        <div class='code'>qrcode.decodeFromBase64('xxx').then(result=>{});</div>
    </div>

    <div class='block'>
        <div class='title'>
            解析图片元素 (decodeFromImage)
            <a class='link' href="https://github.com/theajack/qrcode" target="_blank">文档</a>
        </div>
        <div class='code'>qrcode.decodeFromImage(imageDom).then(result=>{});</div>
    </div>

    <div class='block'>
        <div class='title'>
            对video截屏并解析 (decodeFromVideo)
            <a class='link' href="https://github.com/theajack/qrcode" target="_blank">文档</a>
        </div>
        <div class='code'>qrcode.decodeFromVideo(video).then(result=>{});</div>
    </div>

    <div class='block'>
        <div class='title'>
            对canvas截屏并解析 (decodeFromCanvas)
            <a class='link' href="https://github.com/theajack/qrcode" target="_blank">文档</a>
        </div>
        <div class='code'>qrcode.decodeFromCanvas(canvas).then(result=>{});</div>
    </div>`;
}