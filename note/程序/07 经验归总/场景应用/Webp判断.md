# Webp 判断

webp 格式的图片资源拥有更优的图片压缩算法，支持有损和无损压缩方式，支持透明度。

无损：webp 较 png 体积缩小约 28%

有损：webp 较 png 体积缩小约 70% (75%质量)

## 判断是否支持 webp

- 通过 canvas 判断

```js
// HTMLCanvasElement.toDataURL(type = 'image/png', encoderOptions = 0.92)
// 如果传入的类型非“image/png”，但是返回的值以“data:image/png”开头，那么该传入的类型是不支持的。
// encoderOptions 表示图片质量
const isSupportWebp = function () {
  try {
    return (
      document
        .createElement("canvas")
        .toDataURL("image/webp", 0.5)
        .indexOf("data:image/webp") === 0
    );
  } catch (err) {
    return false;
  }
};
```

- 通过加载 webp 图片判断

```js
const supportsWebp = () => {
  if (!window.createImageBitmap || !window.Image) return Promise.resolve(false);

  return new Promise(resolve => {
    const image = new Image();
    image.onload = () => {
      createImageBitmap(image)
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          resolve(false);
        });
    };
    image.onerror = () => {
      resolve(false);
    };
    image.src =
      "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  });
};
```

```js
// chrome 提供的 webp 特性检查
function check_webp_feature(feature, callback) {
  var kTestImages = {
    lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
    alpha:
      "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
    animation:
      "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
  };
  var img = new Image();
  img.onload = function () {
    var result = img.width > 0 && img.height > 0;
    callback(feature, result);
  };
  img.onerror = function () {
    callback(feature, false);
  };
  img.src = "data:image/webp;base64," + kTestImages[feature];
}
```
