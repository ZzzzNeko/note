# css

## css 选择器性能

```css
div p a {
}
a {
}
```

不考虑实际应用，上面第二种的性能更高 <br>
CSS 选择器的查询规则是从右向左进行的，第一种相比第二种又多经过了两次查找

### translate 与 absolute 性能对比

- translate: 触发复合操作，交由 GPU 处理
- absolute: 触发当前元素的重排(非整个文档)，由 CPU 处理

在频繁修改元素位置时(如过渡动画)，translate 性能更高
