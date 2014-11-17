(function(exportName) {

  /**
   * 处理 URL 解析
   * @see https://gist.github.com/sofish/505e3c63f08dee01e543
   */
  var exports = exports || {};

  /*<function name="parse">*/
  /**
   * 解析链接字符串并返回
   * @param{String} url 链接字符串
   * @return{Object} 返回解析后的对象
   * @example
```js
var url = 'http://sub.example.com:8023/home/?foo=bar&ciao=cc#hash';
console.log(JSON.stringify(jurls.parse(url), null, 2));
```
  */

  var urlCaches = {};
  var urlElement;
  var urlAttrs = ['protocol', 'host', 'hostname', 'pathname', 'search', 'hash', 'port'];

  var parse = function(url) {
    if (urlCaches[url]) {
      return urlCaches[url];
    }
    if (!urlElement) {
      urlElement = document.createElement('a');
    }
    urlElement.href = url;
    var result = {};
    for (var i = 0; i < urlAttrs.length; i++) {
      result[urlAttrs[i]] = urlElement[urlAttrs[i]];
    }
    urlCaches[url] = result;
    return result;
  };
  exports.parse = parse;

  if (typeof define === 'function') {
    if (define.amd || define.cmd) {
      define(function() {
        return exports;
      });
    }
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = exports;
  } else {
    window[exportName] = exports;
  }
  /*</function>*/

})('jurls');