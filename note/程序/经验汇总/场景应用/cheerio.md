# cheerio

[cheerio](https://github.com/cheeriojs/cheerio) 类似于 jquery，但通常用于服务端，对 HTML 文本进行处理

```ts
// ES6 or TypeScript:
import * as cheerio from "cheerio";

// In other environments:
const cheerio = require("cheerio");

const $ = cheerio.load('<ul id="fruits">...</ul>');

$.html();
//=> <html><head></head><body><ul id="fruits">...</ul></body></html>
```
