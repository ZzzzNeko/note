# js

## 原型链

```js
// 考察 原型链，new，函数 this
function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}
Foo.getName(); // 2
getName(); // 4  var getName 替换全局 getName
Foo().getName(); // 1 window.getName -> 1; this -> window;
getName(); // 1 此时调用的同上
new Foo.getName(); // 2 调用 Foo.getName 构造函数
new Foo().getName(); // 3 实例 foo.getName -> 原型链上的 getName
new new Foo().getName(); // 3 调用构造函数，该构造函数为 实例 foo.getName
```

## 类型转换

```js
// 考察 隐式类型转换
"1" == true; // true
"2" == true; // false  注意 true 会转换为 '1'
1 == true; // true
2 == true; // false
```

## 数据复写

```js
// 方法一：复写 valueOf 或 toString
// var a = {
//   _n: 0,
//   valueOf() {
//     return ++this._n;
//   },
//   toString() {
//     return ++this._n;
//   },
// };

// 方法二：数据劫持
var _a = 0;
Object.defineProperty(window, "a", {
  get() {
    return ++_a;
  },
});

if (a == 1 && a == 2 && a == 3) {
  console.log("a 为什么可以输出该文本");
}
```

## 变量提升

```js
function fn() {
  console.log("fn first");
}
fn(); // 函数提升，同名函数后者覆盖前者，故调用第二个函数
function fn() {
  console.log(inner); // 变量提升，不会报错，值为 undefined
  var inner = "inner";
}
```

## 异步处理

```js
var a = 0;
var b = async () => {
  // 由于 a + 先执行，所以此处 a 为全局的 0
  // 若修改为 a = (await 10) + a 则 a 为 a++ 后的 1
  a = a + (await 10);
  console.log("2", a); // -> '2' 10
};
b();
a++;
console.log("1", a); // -> '1' 1
```

## 倒计时误差纠正

```js
var start = +new Date();
var count = 0;
var interval = 1000;

function countdown() {
  count++;
  const now = +new Date();
  const random = parseInt(Math.random() * 100);
  while (+new Date() - now < random) {}
  var offset = +new Date() - (start + count * interval);
  var nextInterval = interval - offset;
  console.log("剩余: ", 60 - count, " 误差:", offset);
  if (count < 60) {
    setTimeout(countdown, nextInterval);
  }
}
setTimeout(countdown, interval);
```
