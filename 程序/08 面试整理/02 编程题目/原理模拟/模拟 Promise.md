# 模拟 Promise

```js
// 非规范 Promise 大致实现流程
class MyPromise {
  constructor(func) {
    this.state = "pending";
    this.value = undefined;
    this.error = undefined;
    this.resolvedCbs = [];
    this.rejectedCbs = [];

    const resolve = value => {
      setTimeout(() => {
        if (this.state !== "pending") return;
        this.state = "resolved";
        this.value = value;
        this.resolvedCbs.map(cb => {
          this.value = cb(this.value);
        });
      });
    };

    const reject = error => {
      setTimeout(() => {
        if (this.state !== "pending") return;
        this.state = "rejected";
        this.error = error;
        this.rejectedCbs.map(cb => cb(error));
      });
    };

    try {
      func(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(resolvedCb, rejectedCb) {
    resolvedCb = typeof resolvedCb === "function" ? resolvedCb : value => value;
    rejectedCb =
      typeof rejectedCb === "function"
        ? rejectedCb
        : error => {
            throw error;
          };
    this.resolvedCbs.push(resolvedCb);
    this.rejectedCbs.push(rejectedCb);
    return this;
  }
}
```
