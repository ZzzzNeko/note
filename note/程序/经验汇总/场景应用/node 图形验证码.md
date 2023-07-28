# captchapng

[captchpng 官网](https://www.npmjs.com/package/captchapng)

## 使用

```js
// NOTE: node 端
var express = require("express");
var router = express.Router();
var captchapng = require("captchapng");

router.get("/captchapng", function (req, res) {
  res.set({
    "Cache-control": "no-cache",
  });
  var code = parseInt(Math.random() * 9000 + 1000);
  var verify_session = ms.common_util.sha1(Date.now() + "" + code + req.ip);
  var p = new captchapng(80, 30, code); // width,height,numeric captcha
  p.color(0, 0, 0, 0); // First color: background (red, green, blue, alpha)
  p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

  var img = p.getBase64();
  var imgbase64 = new Buffer(img, "base64");

  res.end(imgbase64.toString("base64"));

  // 需要注意头
  // response.writeHead(200, { 'Content-Type': 'image/png' });
});
```

```js
// NOTE: 浏览器端
$.get(url, function (ret) {
  // 返回的是 base64 编码，img 标签 src 属性需要加上`'data:image/jpeg;base64,'`
  $("#capthaImg").attr("src", "data:image/jpeg;base64," + ret);
});
```

## 示例

```js
const captchapng = require("captchapng");

const verify_cache = {
  // verify_key: verify_val
};

function generateCaptchaPng(verify_key, width = 80, height = 30) {
  /*
   * 生成验证码，存储验证缓存，返回验证码base64编码和验证码数值
   */
  let captchaCode = parseInt(Math.random() * 9000 + 1000);
  let img = new captchapng(width, height, captchaCode); // width,height,numeric captcha
  img.color(0, 0, 0, 0); // First color: background (red, green, blue, alpha)
  img.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

  let imgbase64 = img.getBase64();

  verify_cache[verify_key] = String(verify_key) + String(captchaCode);

  return { imgbase64, captchaCode };
}

function verifyCaptchaPng(verify_key, verify_val) {
  // 判断验证码正确与否
  return String(verify_key) + String(verify_val) === verify_cache[verify_key];
}

module.exports = {
  generateCaptchaPng,
  verifyCaptchaPng,
};
```
