window.jsboxCode = {
    lib: 'https://cdn.jsdelivr.net/npm/tc-qrcode/tc-qrcode.min.js',
    lang: 'html',
    code: /* html */`<img id='image' src='https://cdn.jsdelivr.net/gh/theajack/qrcode/helper/demo-qrcode.png'/>
<button onclick="decodeQrcode()">Decode QRcode</button>
<input id='input' value='Hello World!'/>
<button onclick="encodeQrcode()">Encode QRcode</button>
<script>
    function decodeQrcode(){
        TCQrcode.decodeFromImage(document.getElementById('image'))
            .then(function (result) {
                alert(result);
            })
    }
    function encodeQrcode(){
        const image = TCQrcode.encodeAsBase64(document.getElementById('input').value);
        document.getElementById('image').setAttribute('src', image);
    }
</script>`
};