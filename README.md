jurls
=======

利用 a 标签特性，进行 url 解析

## 使用方法

```js
var url = 'http://sub.example.com:8023/home/?foo=bar&ciao=cc#hash';
console.log(JSON.stringify(jurls.parse(url), null, 2));
```
