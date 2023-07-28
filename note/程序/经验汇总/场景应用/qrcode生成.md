# 前端二维码生成

二维码生成可以借助现成的库

- `node-qrcode`: 功能更丰富，根据容错等级自动判断生成大小
- `qrcodejs`: 兼容性更好，简单易用

## `node-qrcode` 示例

```shell
npm i qrcode
```

```js
import QRCode from "node-qrcode";
const text = "ZzzzNeko";
QRCode.toCanvas(document.getElementById("qrcode"), text, {
  errorCorrectionLevel: "L",
});
```

## `qrcodejs` 示例

需要手动引入 [qrcodejs](https://github.com/davidshimjs/qrcodejs/blob/master/qrcode.js) 内容

```js
const text = "ZzzzNeko";
new QRCode(document.getElementById("qrcode"), {
  text,
  width: 220,
  height: 220,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.L, // L|M|Q|H
});
```
