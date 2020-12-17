# 模板技术

## 日期格式化

参见:https://github.com/GitbookIO/gitbook/blob/master/lib/constants/defaultFilters.js

```js
 gitbook.time | date('YYYY-M-D') 
```

{% raw %}

```js
//date('YYYY-M-D')在md文件中，github page build 时会出错
{{ gitbook.time | date('YYYY-M-D') }}
```

{% endraw %}
