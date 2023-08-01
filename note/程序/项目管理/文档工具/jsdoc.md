# jsdoc

[jsdoc](https://jsdoc.bootcss.com/) 用于提取按照规范编写的 js 注释并生产对应的文档 <br />
一般用于对工具库生成对应的文档站点 <br />
目前主流代码编辑器都支持 jsdoc 提供的注释规范 <br />
在日常编码中, 对于公共函数模块, 最好也提供相应的规范注释 <br />
对于 ts 开发的项目, 也支持该注释规范并且省略了复杂的参数说明

## 作为文档工具

### 基本使用

1. 安装

   ```bash
   npm i jsdoc --save-dev
   ```

2. 配置 npm script

   **package.json**

   ```diff
   {
      "scripts": {
   +     "jsdoc": "jsdoc"
      },
   }
   ```

3. 编写一个测试 js 文件

   **test.js**

   ```js
   /**
    * @param {String} a
    * @param {String} b
    */
   function test(a, b) {
     console.log(a, b);
   }
   ```

4. 生产文档

   ```bash
   npm run jsdoc test.js
   ```

5. 其他
   - 使用命令行可以添加其他的参数
   - 也可以使用一个配置文件

### 注释标签

- 块标签: 一个标签占一行
- 内联标签: 一行内可以使用多个，需要含在花括号内，若标签文本含有右花括号需要使用反斜线转义

```js
/**
 * @description 这是块标签
 * 行内标签如 {@description 这样的} 是行内标签
 */
```

## 作为注释规范

### 类

- ES5 中的类需要通过 `@class` `@constructor` 进行注释表明
- ES6 中的 `class` 则不需要通过上述标签进行标记
- `@extends ClassName`

### `@abstract` | `@virtual`

- 概述
  - 表示该成员(通常是父类方法)必须在派生类中实现(或重写)
  - `@virtual` 为该标签的别名
- 语法
  - `@abstract`
- 示例
  - `@abstract`

### `@access`

- 概述
  - 指定该成员的访问级别: public 、protected、private
  - 私有成员(pricate) 默认不会生成在输出文档中，可以通过 `-p/--private` 命令行选项强制开启
- 语法
  - `@access <public|protected|private>`
  - `@public` 等同于 `@access public`
  - `@protected` 等同于 `@access protected`
  - `@private` 等同于 `@access private`

### `@alias`

- 概述
  - 标记成员有一个别名
  - 可以用于更加详细的描述成员所处上下文
- 语法
  - `@alias <aliasNamepath>`

### `@augments` | `@extends`

- 概述
  - 指明该类继承自哪个父类
  - 倾向于使用 `@extends`
- 语法
  - `@extends <namepath>`

### `@author`

- 概述
  - 指定项目的作者
- 语法
  - `@author <name>[<emailAddress>]`
- 示例
  - `@author lazyNeko <233@666.com>`

### `@borrows`

- 概述
  - 指明该对象使用其他对象的成员
- 语法
  - `@borrows <that namepath> as <this namepath>`
- 示例

  ```js
  var thatObj = function () {};
  /**
   * @borrows thatObj as show
   */
  var thisObj = {
    show: thatObj,
  };
  ```

### `@callback`

- 概述
  - 描述一个回调函数
- 语法
  - `@callback <namepath>`
- 示例

  ```js
  /**
   * @params {aCallback} a的回调
   */
  function a(cb) {}

  /**
   * a 回调的描述
   * @callback aCallback
   * @param {} 这里写参数说明
   */
  ```

### `@class`

- 概述
  - 描述该成员为一个构造函数
  - 如果使用 ES6 的 `class` 关键字则可以省略
  - 别名 `@constructor`
- 语法
  - `@class [<type> <name>]`

### `@classdesc`

- 概述
  - 对该类进行描述
- 语法
  - `@classdesc <some descruption>`

### `@constant`

- 概述
  - 描述该成员为常量
  - 别名 `@const`
- 语法
  - `@constant [<type> <name>]`

### `@constructs`

- 概述
  - 描述该成员为类的构造函数
- 语法
  - `@constructs [<name>]`

### `@copyright`

- 概述
  - 描述一些版权信息
  - 通常与 `@file` 连用
- 语法
  - `@copyright <some copyright text>`

### `@default`

- 概述
  - 描述默认值
  - 如果描述对象的值为简单值(字符串、数字、布尔或 null )，jsDoc 将自动获取值
  - 别名 `@defaultvalue`
- 语法
  - `@default [<value>]`

### `@deprecated`

- 概述
  - 描述该方法不推荐使用
- 语法
  - `@deprecated [<some text>]`

### `@description`

- 概述
  - 描述一个标识
  - 如果在注释开始的地方添加描述则可省略该标签
  - 别名 `@desc`
- 语法
  - `@description <some description>`

### `@enum`

- 概述
  - 描述一个相关属性的集合
  - 默认枚举成员与枚举本身类型相同
  - 可以使用 `@type` 给不同类型的成员进行单独描述
  - 通常和 `@readOnly` 结合使用
- 语法
  - `@enum [<type>]`
- 示例

  ```js
  /**
   * @readonly
   * @enum {number}
   */
  const state = {
    ALIVE: 1,
    DEAD: 0,
    /** @type {string} */
    UNKNOW: "unknow",
  };
  ```

### `@event`

- 概述
  - 描述一个事件
- 语法
  - `@event <className>#[event:]<eventName>`
- 示例

  ```js
  /**
   * Throw a snowball.
   *
   * @fires Hurl#snowball
   */
  Hurl.prototype.snowball = function () {
    /**
     * Snowball event.
     *
     * @event Hurl#snowball
     * @type {object}
     * @property {boolean} isPacked - Indicates whether the snowball is tightly packed.
     */
    this.emit("snowball", {
      isPacked: this._snowball.isPacked,
    });
  };
  ```

### `@example`

- 概述
  - 提供一个如何使用描述项的例子
  - 一个 doclet(按规范编写的注释) 可以同时使用多个 `@example` 标签
  - 示例中可以使用 html 标签
- 语法
  - `@example <example>`
- 示例

  ```js
  /**
   * 两数相加
   * @param {number} a 加数a
   * @param {number} b 加数b
   * @return {number} 和
   * @example <h3>用例说明</h3>
   * add(1, 2) // return 3
   * add(2, 3) // return 5
   */
  function add(a, b) {
    return a + b;
  }
  ```

### `@exports`

- 概述
  - 描述一个由 js 模块导出的成员
  - jsdoc 可自动识别 node 中的 `exports` 和 `module.exports` ，通常可以省略
- 语法
  - `@exports <moduleName>`

### `@external`

- 概述
  - 标识一个外部的类、命名空间或模块
  - 外部标识引用的路径名始终需要使用 `external:` 前缀，可以省略 `@external` 标签
  - 别名 `@host`
- 语法
  - `@external <NameOfExternal>`

### `@file`

- 概述
  - 描述一个文件
  - 该标签用于在文件开头使用
  - 别名 `@fileoverview` 、`@overview`
- 语法
  - `@file <description>`

### `@fires`

- 概述
  - 描述该对象可能触发的事件
  - 别名 `@emits`
- 语法
  - `@fires <className>#[event:]<eventName>`

### `@function`

- 概述
  - 标记一个函数或方法
  - 别名 `@func` 、`@method`
- 语法
  - `@function [<FunctionName>]`
- 示例

  ```js
  /** @function */
  const scrollDebounced = debounce(scroll); //这里执行后返回一个函数，如果不加上标识则会被认为是一个一般对象
  ```

### `@global`

- 概述
  - 标记一个全局对象
- 语法
  - `@global`
- 示例

  ```ts
  /** @global */
  window.a = 233;
  ```

### `@ignore`

- 概述
  - 忽略文档中的一个标识
  - 该标签优先于所有其他标签
  - 与 `@class` 或 `@module` 结合使用会忽略整个类或模块的注释
  - 与 `@namespace` 结合，须要将 `@ignore` 标签添加到所有子类和命名空间中
- 语法
  - `@ignore`
- 示例

  ```ts
  /**
   * @namespace
   * @ignore
   */
  var Clothes = {
    /**
     * @class
     * @ignore
     */
    Jacket: function () {
      /** The jacket's color. */
      this.color = null;
    },
  };
  ```

### `@implements`

- 概述
  - 描述该类实现一个接口
- 语法
  - `@implements {interfaceName}`

### `@inheritdoc`

- 概述
  - 表示该标识应继承父类的文档
  - 该标签通常可以省略
  - 手动指定可以为 CLosure Compiler(闭包编译器)提供兼容性
- 语法
  - `@inheritdoc`

### `@inner`

- 概述
  - 描述一个内部对象
  - 可以通过 'Parent~Chld' 被引用
- 语法
  - `@inner`

### `@instance`

- 概述
  - 描述一个实例
  - 可以通过 'Parent#Child' 被引用
- 语法
  - `@instance`

### `@interface`

- 概述
  - 描述一个接口
- 语法
  - `@interface [<name>]`

### `@kind`

- 概述
  - 标识的类型
  - 通常该标签省略
  - `@kind <kindName>` 相当于 `@<kindName>`
- 语法
  - `@kind <kindName>`

### `@lends`

- 概述
  - 将一个字面量对象的所有属性标记为莫格标识符的成员
- 语法
  - `@lends <namepath>`

### `@license`

- 概述
  - 描述项目采用了何种软件许可协议
- 语法
  - `@license <identifier>`

### `@listens`

- 描述
  - 列出一个标识的监听事件
- 语法
  - `@listens <eventName>`

### `@member`

- 描述
  - 记录一个成员
  - 别名: `@var`
- 语法
  - `@member [<type>] [<name>]`
- 示例

  ```js
  /**
   * class Person
   */
  class Person {
    constructor(name, age) {
      /** @member {string} */
      this.name = name;
      /** @member {number} */
      this.age = age;
    }
  }
  ```

### `@memberof`

- 描述
  - 标识成员所属父级
  - 默认标注的标识符是静态成员
  - `@memberof!` 强制对象被记录为属于特定的父级标识符
  - 对于类的实例成员可以使用 `@memberof ClassName.prototype` 或 `@meneberof ClassName#`
- 语法
  - `@memberof <parentNamePath>`
  - `@memberof! <parentNamePath>`

### `@mixin`

- 描述
  - 记录一个 mixin 对象
- 语法
  - `@mixin [<MixinName>]`

### `@mixes`

- 描述
  - 指示当前对象混入了 `OtherObjectPath` 对象的所有成员，被混入的对象是一个 `@mixin`
- 语法
  - `@mixes <OtherObjectPath>`

### `@module`

- 描述
  - 记录一个 js 模块
- 语法
  - `@module [ [{<Type>}] <moduleName> ]`

### `@name`

- 描述
  - 记录一个对象的名称
  - 强制 jsdoc 使用指定的名称而忽略代码中的名称
  - 尽量避免使用该标签

### `@namespace`

- 描述
  - 记录一个命名空间对象
- 语法
  - `@namespace [{<Type>}]  <SomeName>`

### `@override`

- 描述
  - 指定一个标识符覆盖其父类同名的标识符
- 语法
  - `@override`

## 示例

### 描述接口类型

使用 `@typedef` 描述一个接口类型
使用 `@prop` 描述其属性
`@prop` 是 `@property` 标签的简写

```js
/**
 * @typedef {Object} Seven
 * @prop {number} seven
 */
```

### 描述变量类型

使用 `@type` 标签描述一个变量的类型
使用 `const` 声明可以省略 `@const` 标签注释

```js
/** @default */
let myName = "unknow";

/** @type {number} */
const sevenNum = 7;

/** @type {number[]} */
const sevenArr = [7];

/** @type {Seven} */
const sevenObj = {
  seven: 7,
};

/**
 * @readonly
 * @enum {number}
 */
const Top = {
  First: 1,
  Second: 2,
  Third: 3,
};

/** @kind constant */
const SEVEN = 7;

/** @kind function */
const getSeven = () => 7;
```

### 描述函数

使用 `@param` 标签描述函数参数
对于任意类型的参数可以使用 `{*}` 表示
对于可选参数使用 `[argName]` 表示
使用 `[argName=value]` 的格式可以描述参数的默认值

```js
/**
 * 验证是否为为数字
 * @since 0.0.1
 * @deprecated 1.0.0
 * @param {*} arg 需要验证的值
 * @return {boolean}
 * @example
 * isNumber(7)
 * // => true
 * isNumber(7)
 * // => false
 */
const isNumber = arg => typeof arg === "number";
```

```js
/**
 * 获取某人年龄
 * @param {Object} p
 * @param {string} p.name
 * @param {number} p.age
 * @param {boolean} [ignoreName=false]
 * @return {string}
 * @throws {TypeError} 不是个对象
 */
const getPAgeDes = (p, ignoreName = false) => {
  if (typeof p === "object")
    return ignoreName ? String(p.age) : `${p.name}: ${p.age} `;
  throw new TypeError("需要是个对象");
};
```

### 描述类

ES6 中的类中使用 `@member` 会失效
使用 `@private`, `@public`, `@protected` 标签代替 `@member`, 同时提供了更详细的访问权限描述

```js
/**
 * Graph
 * @abstract
 */
class Graph {
  /** @abstract */
  getArea() {}
}
/**
 * @extends Graph
 */
class Rect extends Graph {
  /**
   * 初始化矩形宽高
   * @param {number} width 款
   * @param {number} height 高
   */
  constructor(width, height) {
    /**
     * @private
     * @readonly
     */
    this._type = "rect";
    /** @public */
    this.width = width;
    /** @public */
    this.height = height;
  }
  /**
   * 获取面积
   * @override
   * @return {number}
   */
  getArea() {
    return this.width * this.height;
  }
}
```

```js
/** @class */
function Data() {
  /** @member {Object} */
  this.point = {};
}
```

### 描述事件

对于事件的描述需要指名其具体的路径，jsdoc 中描述路径的格式为

- `className#instanceMember`: 指向类的实例成员
- `className.staticMember`: 指向类的静态成员
- `className~innerMember`: 指向类的内部成员

描述事件

- `@fires` 或 `@emits` 描述事件派发
- `@event` 用于事件的具体描述
- `@listens` 描述事件的监听

```js
const EventEmitter = require("events").EventEmitter;

/**
 * @emits Door#open 调用 open 方法时触发
 * @emits Door#close 调用 close 方法时触发
 */
class Door extends EventEmitter {
  constructor(name) {
    super();
    this.name = name || "door";
    this.state = "close";
  }
  /**
   * @event Door#open 开门
   * @prop {string} name
   */
  open() {
    this.state = "open";
    this.emit("open", this.name);
  }
  /**
   * @event Door#close 关门
   * @prop {string} name
   */
  close() {
    this.state = "close";
    this.emit("close", this.name);
  }
}

const door = new Door();
/** @listens Door#open */
door.on("open", () => {
  console.log("门开了");
});
door.open();
```

### 描述其他信息

```js
/**
 * @author lazyneko
 * @summary a summary
 * @version 0.0.1
 * @license Apache-2.0
 * @copyright 木有版权
 * @tutorial www.google.com
 * @todo 需要实现内容
 */
```
