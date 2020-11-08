# JS

## 类型

### 内置类型

- 基本类型：`string` `number` `boolen` `null` `undefined` `symbol` `bigint`
- 引用类型：`object` `function`
- 获取类型：`Object.prototype.toString.call(arg)`

说明：`null` 属于基本类型，但 `typeof null === 'object'`

### 类型转换

强制类型转换：使用数据类型对变量进行手动转换，如 `Number('123')` <br>
隐式类型转换：在运算时对错误的数据类型变量进行转换，如 `'1' + 1 === '11'` <br>
对象类型转换：在发生类型转换时会调用 `valueOf` 和 `toString` 方法

- 当调用 `valueOf` 返回值为对象时，会继续调用 `toString()` 方法
- 使用强制类型转换 `String` 时会直接调用 `toString()` 方法
- ES6 中可以覆写 `[Symbol.toPrimitive]` 替换 `valueOf` 和 `toString`

注意：

- `valueOf` 和 `toString` 在基本类型变量中无效
- `==` 在判断基础类型时不会发生类型转换，在判断引用类型时会发生类型转换
- `if()` 和 `!` 在判断引用类型时也不会发生类型转换

```js
var obj = {
  valueOf() {
    console.log("调用 valueOf");
    return 233;
  },
  toString() {
    console.log("调用 toString");
    return 666; // 输出结果为 "666"
  },
  // NOTE: [Symbol.toPrimitive] 会覆盖 valueOf 和 toString
  // [Symbol.toPrimitive]() {
  //   return 2;
  // },
};
obj == 233; // 调用 valueOf true
String(obj); // 调用 toString "666"

// [] 调用 valueOf 返回 []，再调用 toString 返回 ""
// ![] 不触发类型转换，直接返回 false
[] == ![]; // true     相当于 "" == false
[1] == true; // true   相当于 1 == true
[2] == true; // false  相当于 2 == true => 2 == Number(true) => 2 == 1

undefined == false; // false 基本类型，直接比较不发生类型转换
null == false; // false   null 属于基本类型
```

## 执行环境

### 变量提升

变量提升指先调用后声明的情况，js 代码在执行前会进行解析，`function` 和 `var` 声明的变量会提升到执行上下文的头部

- 在解析阶段，`function` 声明的函数存入内存，在执行阶段会跳过赋值
- 在解析阶段，`var` 声明的变量会提升声明，需要在执行阶段才会赋值
- 同一作用域中变量提升的优先级高于父级作用域
- `let` 和 `const` 不会发生变量提升

```js
console.log(a); // 输出 a 函数
a();
var a = "a";
console.log(a); // 'a'
function a() {
  console.log(a); // undefined
  var a = "a -> a";
}
a(); // error
```

### 闭包

闭包是一个函数和对其周围状态(词法环境)的引用的组合；<br>
闭包可以让一个内层函数访问其外层函数的作用域 <br>
闭包最大的作用是隐藏变量，避免外部访问

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(i) {
      console.log(i);
    },
    i * 1000,
    i
  );
}
```

## 类与继承

### 原型链

函数和类可以在其原型(`prototype`属性)上扩展方法和属性 <br>
在继承时，子类的 `__proto__` 指向父类的原型，自身通过 `prototype` 扩展原型方法和属性 <br>
在实例化时，实例的 `__proto__` 指向其类的 `prototype` <br>
在调用方法时会按照先自身、后递归向上查询原型方法的顺序执行 <br>

### 类

ES5

```js
function Klass(value) {
  this.value = value;
}
Klass.prototype.showName = function () {
  console.log(this.name);
};
Klass.showName = function () {
  console.log("static function");
};
```

ES6

```js
class Klass {
  constructor(value) {
    this.value = value;
  }
  showName() {
    console.log(this.name);
  }
  static showName() {
    console.log("static function");
  }
}
```

ES5 中的实例可以使用 `instance.constructor()` 调用构造函数 <br>
ES6 中的实例不能使用 `instance.constructor()` 调用构造函数

### 继承

ES5 (借用上面的 `Klass`)

```js
function Child(value, child) {
  Klass.call(this, value);
  this.child = child;
}
Child.__proto__ = Object.create(Klass.prototype);
Child.prototype.constructor = Child;
Child.prototype.showChild = function () {
  console.log(this.child);
};
```

ES6(借用上面的 `Klass`)

```js
class Child extends Klass {
  constructor(value, child) {
    super(value);
    this.child = child;
  }
  showChild() {
    console.log(this.child);
  }
}
```

### new 的过程

`const ret = new Klass`

1. 创建空对象
2. 赋值原型链 `instance.__proto__ = Klass.prototype`
3. 调用构造函数
4. 返回实例或构造函数返回值 `return isObjOrFn(ret) ? ret : instance`

### instanceof 的过程

`A instanceof B`

1. 获取对象的 `__proto__`
2. 判断 `__proto__` 是否等于 `B.prototype`
3. 若不满足则向上遍历直到 `__proto__` 为 `null`

### this

在不改变 `this` 指向的情况下，`this` 拥有指向最后调用它的对象 <br>
若找不到该对象，则默认为全局对象<br>

改变 `this` 指向

- 箭头函数：箭头函数中 `this` 指向函数所在上下文中的 `this`
- `call`/``apply`/`bind`

## 模块

CommonJS 模块

- 基于函数实现
- 引入时会执行一次
- 再次引入会获取缓存

ES6 模块

- 引入时会执行一次
- 重复引用只执行一次
- 输出内容可以为接口
- 输出接口内容可以异步修改

重要区别

- CommonJS 输出内容为值拷贝
- ES6 输出内容为值引用
