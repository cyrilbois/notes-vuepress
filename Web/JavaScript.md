# JavaScript


[[toc]]



## Flag

> Vanilla JS 就是指JavaScript

+ Ecma 国际，技术委员会 [https://github.com/tc39](https://github.com/tc39)
+ ECMAScript支持度检测 [https://github.com/ruanyf/es-checker](https://github.com/ruanyf/es-checker)
+ 检查JS文件中的ES版本 [https://github.com/dollarshaveclub/es-check](https://github.com/dollarshaveclub/es-check)
+ ES6支持情况 [https://kangax.github.io/compat-table/es6](https://kangax.github.io/compat-table/es6)

* [JS刷新当前页面的几种方法总结](http://www.iqianduan.net/blog/refresh-browser-method)
* [js keyup、keypress和keydown事件 详解](https://www.cnblogs.com/manongxiaobing/archive/2012/11/05/2755412.html)
* [js中keyup-keypress-keydown以及oninput四个事件](https://blog.csdn.net/FGstudy/article/details/101854125)
* [keydown,keypress,keyup三者之间的区别](https://blog.csdn.net/qq_26102281/article/details/83785085)
* [前端三大框架与 YUI 以及 EXT.js 这类组件化框架最大的区别是什么？](https://www.zhihu.com/question/336968422/answer/762705515)
* [ECMAscript和Javascript的区别](https://www.jianshu.com/p/10cfcb536d4a)
* [KeyboardEvent.keyCode已弃用，MDN已经提供了一个解决方案](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/keyCode)

- [https://github.com/jsdoc](https://github.com/jsdoc)
- [https://github.com/apidoc](https://github.com/apidoc)

> [Polyfill](https://developer.mozilla.org/zh-CN/docs/Glossary/Polyfill) 是一块代码（通常是 Web 上的 JavaScript）
> ，用来为旧浏览器提供它没有原生支持的较新的功能 [https://github.com/financial-times/polyfill-service](https://github.com/financial-times/polyfill-service)
> [https://github.com/taylorhakes/promise-polyfill](https://github.com/taylorhakes/promise-polyfill)


- 恶意软件分析 [https://github.com/HynekPetrak/malware-jail](https://github.com/HynekPetrak/malware-jail)
- 物联网的超轻量级JavaScript引擎 [https://github.com/jerryscript-project/jerryscript](https://github.com/jerryscript-project/jerryscript)



## 学习

* [https://github.com/wangdoc/javascript-tutorial](https://github.com/wangdoc/javascript-tutorial)
    * [https://wangdoc.com/javascript](https://wangdoc.com/javascript)
* [https://github.com/ruanyf/jstutorial](https://github.com/ruanyf/jstutorial)
    * [http://javascript.ruanyifeng.com](http://javascript.ruanyifeng.com)
+ ECMAScript 6入门 [https://github.com/ruanyf/es6tutorial](https://github.com/ruanyf/es6tutorial)
    + [https://es6.ruanyifeng.com](https://es6.ruanyifeng.com)
* 现代JavaScript教程 [https://github.com/javascript-tutorial/zh.javascript.info](https://github.com/javascript-tutorial/zh.javascript.info)
* 浏览器脚本教程 [https://www.w3school.com.cn/b.asp](https://www.w3school.com.cn/b.asp)
* 参考手册 [https://www.w3school.com.cn/r.asp](https://www.w3school.com.cn/r.asp)
* 文档对象模型 (DOM) [https://developer.mozilla.org/zh-CN/docs/Glossary/DOM](https://developer.mozilla.org/zh-CN/docs/Glossary/DOM)
* [https://github.com/Asabeneh/30-Days-Of-JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript)
* [https://github.com/wesbos/JavaScript30](https://github.com/wesbos/JavaScript30)
* [https://github.com/30-seconds/30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code)
* JavaScript算法和数据结构 [https://github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)
* 答题 [https://github.com/lydiahallie/javascript-questions](https://github.com/lydiahallie/javascript-questions)
* 可读性的代码写法 [https://github.com/ryanmcdermott/clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)
* [https://github.com/felipefialho/frontend-challenges](https://github.com/felipefialho/frontend-challenges)

- [页面生命周期：DOMContentLoaded，load，beforeunload，unload](https://zh.javascript.info/onload-ondomcontentloaded)



**模块规范**

- [https://github.com/umdjs/umd](https://github.com/umdjs/umd)
- [https://github.com/amdjs](https://github.com/amdjs)
    - [https://github.com/requirejs](https://github.com/requirejs)
    - [RequireJS和AMD规范 -- JavaScript 标准参考教程（alpha）](https://javascript.ruanyifeng.com/tool/requirejs.html)
- [https://github.com/cmdjs](https://github.com/cmdjs)
- [https://github.com/seajs](https://github.com/seajs)
- [http://www.commonjs.org](http://www.commonjs.org)
- [CommonJS规范 -- JavaScript 标准参考教程（alpha）](https://javascript.ruanyifeng.com/nodejs/module.html)
- [Module 的语法 - ECMAScript 6入门](https://es6.ruanyifeng.com/#docs/module)

```js
/**
 * CommonJS 主要是NodeJs使用
 * 在一个node执行一个文件时，会给这个文件内生成一个 exports和module对象，而module有一个exports属性。
 * exports = module.exports = {};
 */
module.exports.x = x; // 导出模块
module.exports  = {};
// 为了方便，Node为每个模块提供一个exports变量，指向module.exports
// 注意，不能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系
//exports.x = x;
var example = require('./example.js'); // 导入模块

/**
 * AMD（Asynchronous Module Defination，浏览器端js模块化） 主要是RequireJS使用
 */
//定义模块myModule.js
define(['dependency'],function(){
   var name = 'Bily';
   function printName(){
        console.log(name);
    }
    return {
       printName: printName
    }
});
//加载模块
require(['myModule'],function(my){
    my.printName();
});


/**
 * CMD(Common Module Definition,通用模块定义)
 */
// cmd1.js
define(function(require,exports,module){
  // ...
  module.exports={
    // ...
  }
});

// cmd2.js
define(function(require,exports,module){
  var cmd2 = require('./cmd1')
  // cmd2.xxx  依赖就近书写
  module.exports={
     // ...
  }
});

/**
 * ECMAScript6
 * export与export default均可用于导出常量、函数、文件、模块等
 * 在一个文件或模块中，export、import可以有多个，export default仅有一个
 * 通过export方式导出，在导入时要加{ }，export default则不需要
 * export能直接导出变量表达式，export default不行。
 */
export x = x; // 导出模块
export default {} // 为模块指定默认输出
import { stat, exists, readFile } from 'fs'; // 导入模块
var express = require('express');
```

- `Uncaught SyntaxError: Cannot use import statement outside a module`

> 在报错是说无法在模块外部使用`import`语句，因为`Module`的加载实现的是`es6`语法，
> 所以在浏览器加载`html`文件时，需要在`script`标签中加入`type="module"`属性。

```html
<script type="module" src="/static/js/index.js"></script>
```



## 第三方库

+ [NPM依赖：类库工具](https://www.jianshu.com/p/2a127cfba1cf)
+ [前端开发中用到的npm工具](https://segmentfault.com/a/1190000021865006)

* [https://github.com/CreateJS](https://github.com/CreateJS)
* [https://github.com/ReactiveX/rxjs](https://github.com/ReactiveX/rxjs)
* [https://github.com/jashkenas/coffeescript](https://github.com/jashkenas/coffeescript)
* [https://github.com/observablehq](https://github.com/observablehq)
* [https://github.com/documentcloud](https://github.com/documentcloud)
* 模板语言 [https://github.com/handlebars-lang/handlebars.js](https://github.com/handlebars-lang/handlebars.js)
* 当前设备 [https://github.com/matthewhudson/current-device](https://github.com/matthewhudson/current-device)
* 转换编译器 [https://github.com/babel](https://github.com/babel)
    * [https://babeljs.io](https://babeljs.io)
    * [https://www.babeljs.cn](https://www.babeljs.cn)
* 使浏览器支持require [https://github.com/browserify](https://github.com/browserify)
* 拷贝文字 [https://github.com/zenorocha/clipboard.js](https://github.com/zenorocha/clipboard.js)
    * [http://www.clipboardjs.cn](http://www.clipboardjs.cn)
* [https://github.com/zeroclipboard/zeroclipboard](https://github.com/zeroclipboard/zeroclipboard)
* 绑定按键 [https://github.com/jamiebuilds/tinykeys](https://github.com/jamiebuilds/tinykeys)
* 语法高亮 [https://github.com/PrismJS](https://github.com/PrismJS)
* [https://github.com/validatorjs/validator.js](https://github.com/validatorjs/validator.js)
* [https://github.com/zTree/zTree_v3](https://github.com/zTree/zTree_v3)
* 文件上传 [https://github.com/fex-team/webuploader](https://github.com/fex-team/webuploader)
* [https://github.com/lovefc/fcup2](https://github.com/lovefc/fcup2)
* 图片懒加载 [https://github.com/tuupola/lazyload](https://github.com/tuupola/lazyload)
* Metro风兼瀑布流布局 [https://github.com/desandro/masonry](https://github.com/desandro/masonry)
* 图片查看 [https://github.com/fengyuanchen/viewerjs](https://github.com/fengyuanchen/viewerjs)
* [https://github.com/dimsemenov/PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)
* 响应式导航 [https://github.com/VPenkov/okayNav](https://github.com/VPenkov/okayNav)
* 拖曳 [https://github.com/desandro/draggabilly](https://github.com/desandro/draggabilly)
* 拖放 [https://github.com/bevacqua/dragula](https://github.com/bevacqua/dragula)
* 图像缩放 [https://github.com/kingdido999/zooming](https://github.com/kingdido999/zooming)
* 国际化 [https://github.com/i18next/i18next](https://github.com/i18next/i18next)
* 图像中提取颜色 [https://github.com/briangonzalez/rgbaster.js](https://github.com/briangonzalez/rgbaster.js)
* 模拟数据生成 [https://github.com/nuysoft/Mock](https://github.com/nuysoft/Mock)
* SVG渲染图像占位符 [https://github.com/imsky/holder](https://github.com/imsky/holder)
* 动画引擎 [https://github.com/julianshapiro/velocity](https://github.com/julianshapiro/velocity)
* [https://github.com/dankogai/js-base64](https://github.com/dankogai/js-base64)
* 交互式医学图像 [https://github.com/cornerstonejs/cornerstone](https://github.com/cornerstonejs/cornerstone)
* 选色器 [https://github.com/bgrins/spectrum](https://github.com/bgrins/spectrum)
* [https://github.com/ant-design/ant-design](https://github.com/ant-design/ant-design)
* 手势交互 [https://github.com/hammerjs/hammer.js](https://github.com/hammerjs/hammer.js)
* [https://github.com/material-motion/material-motion-js](https://github.com/material-motion/material-motion-js)
* 自动执行 [https://github.com/gruntjs](https://github.com/gruntjs)
* velocity模板语法的JS实现 [https://github.com/shepherdwind/velocity.js](https://github.com/shepherdwind/velocity.js)

- [https://github.com/Rob--W/cors-anywhere](https://github.com/Rob--W/cors-anywhere)



**弹窗/提示框**

+ [https://github.com/topics/dialog](https://github.com/topics/dialog)
+ [https://github.com/topics/popup](https://github.com/topics/popup)
+ [https://github.com/topics/confirm](https://github.com/topics/confirm)
+ [https://github.com/topics/alert](https://github.com/topics/alert)
+ [https://github.com/topics/ajax](https://github.com/topics/ajax)

* [https://github.com/sentsin/layui](https://github.com/sentsin/layui)
* [https://github.com/sentsin/layer](https://github.com/sentsin/layer)
* [https://github.com/sweetalert2/sweetalert2](https://github.com/sweetalert2/sweetalert2)
    * [https://www.sweetalert2.cn](https://www.sweetalert2.cn)
* 提示和弹出框 [https://github.com/popperjs/popper-core](https://github.com/popperjs/popper-core)
* alert()和confirm()包装 [https://github.com/makeusabrew/bootbox](https://github.com/makeusabrew/bootbox)



**存储/缓存**

+ [https://github.com/topics/storage](https://github.com/topics/storage)
+ [https://github.com/topics/localstorage](https://github.com/topics/localstorage)
+ [https://github.com/topics/indexeddb](https://github.com/topics/indexeddb)

* [https://github.com/ustbhuangyi/storage](https://github.com/ustbhuangyi/storage)
* [https://github.com/jaywcjlove/store.js](https://github.com/jaywcjlove/store.js)
* [https://github.com/localForage/localForage](https://github.com/localForage/localForage)
    * [https://github.com/xmoyking/localForage-cn](https://github.com/xmoyking/localForage-cn)
        * [https://localforage.docschina.org](https://localforage.docschina.org)
* [https://github.com/typicode/lowdb](https://github.com/typicode/lowdb)
* [https://github.com/marcuswestin/store.js](https://github.com/marcuswestin/store.js)



**编辑器**

- [https://github.com/notadd/neditor](https://github.com/notadd/neditor)
- [https://github.com/mycolorway/simditor](https://github.com/mycolorway/simditor)
- [https://github.com/summernote/summernote](https://github.com/summernote/summernote)
- [https://github.com/yabwe/medium-editor](https://github.com/yabwe/medium-editor)
- [https://github.com/wangeditor-team/wangEditor](https://github.com/wangeditor-team/wangEditor)
- [https://github.com/ckeditor/ckeditor5](https://github.com/ckeditor/ckeditor5)
- [https://github.com/kindsoft/kindeditor](https://github.com/kindsoft/kindeditor)
- [https://github.com/ianstormtaylor/slate](https://github.com/ianstormtaylor/slate)
- [https://github.com/quilljs/quill](https://github.com/quilljs/quill)
- [https://github.com/alibaba/GGEditor](https://github.com/alibaba/GGEditor)



**工具**

* [http://github.com/mootools](http://github.com/mootools)
* [https://github.com/liriliri/licia](https://github.com/liriliri/licia)
* [https://github.com/lodash/lodash](https://github.com/lodash/lodash)
* [[https://github.com/jashkenas]([https://github.com/jashkenas)
    * debounce（防抖）、throttle（节流／限频） [https://github.com/jashkenas/underscore](https://github.com/jashkenas/underscore)
    * [https://underscorejs.net](https://underscorejs.net)
* [https://github.com/ramda/ramda](https://github.com/ramda/ramda)
* [https://github.com/proYang/outils](https://github.com/proYang/outils)
* [https://github.com/30-seconds/30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code)
* 工具库 [https://github.com/tnfe/bbo](https://github.com/tnfe/bbo)
* 代码格式化 [https://github.com/prettier/prettier](https://github.com/prettier/prettier)
* [https://github.com/standard/standard](https://github.com/standard/standard)
* 转换HTML/XML [https://github.com/posthtml/posthtml](https://github.com/posthtml/posthtml)
* 幻灯片 [https://github.com/webslides/webslides](https://github.com/webslides/webslides)
* [https://github.com/gnab/remark](https://github.com/gnab/remark)
* 正则表达式 [https://github.com/slevithan/XRegExp](https://github.com/slevithan/XRegExp)


**文档**

* [https://github.com/MrRio/jsPDF](https://github.com/MrRio/jsPDF)
* [https://github.com/mozilla/pdf.js](https://github.com/mozilla/pdf.js)
* 电子表格数据工具包 [https://github.com/SheetJS](https://github.com/SheetJS)

- 压缩或编码解码库 [https://github.com/photopea](https://github.com/photopea)
- 压缩 [https://github.com/photopea](https://github.com/nodeca/pako)
- [https://github.com/Stuk/jszip](https://github.com/Stuk/jszip)
- [https://gitlab.pagedmedia.org/tools/pagedjs](https://gitlab.pagedmedia.org/tools/pagedjs)



**日期时间**

+ 替换Moment.js列表 [https://github.com/you-dont-need/You-Dont-Need-Momentjs](https://github.com/you-dont-need/You-Dont-Need-Momentjs)

* 日期处理类库 [https://github.com/moment](https://github.com/moment)
    * [http://momentjs.cn](http://momentjs.cn)
    * [https://github.com/moment/luxon](https://github.com/moment/luxon)
* [https://github.com/iamkun/dayjs](https://github.com/iamkun/dayjs)
* [https://github.com/js-joda](https://github.com/js-joda)
* [https://github.com/date-fns](https://github.com/date-fns)
* [https://github.com/hustcc/timeago.js](https://github.com/hustcc/timeago.js)


**HTTP**

* [https://github.com/wendux/fly](https://github.com/wendux/fly)
* [https://github.com/github/fetch](https://github.com/github/fetch)
* [https://github.com/axios/axios](https://github.com/axios/axios)
* [https://github.com/umijs/umi-request](https://github.com/umijs/umi-request)
* [https://github.com/seanmonstar/reqwest](https://github.com/seanmonstar/reqwest)

- [https://github.com/rndme/download](https://github.com/rndme/download)


**导出**

* [TableExport](https://github.com/clarketm/TableExport)
* [tableExport.jquery.plugin](https://github.com/hhurz/tableExport.jquery.plugin)
* [excellentexport](https://github.com/jmaister/excellentexport)



**流程图**

+ [https://github.com/topics/diagram](https://github.com/topics/diagram)
+ [https://github.com/topics/flowchart](https://github.com/topics/flowchart)

* 图表库 [https://github.com/NorthwoodsSoftware/GoJS](https://github.com/NorthwoodsSoftware/GoJS)
* [https://github.com/jsplumb](https://github.com/jsplumb)
* [https://github.com/antvis](https://github.com/antvis)
* [https://github.com/noflo](https://github.com/noflo)
* [https://github.com/fex-team](https://github.com/fex-team)
* [https://github.com/bpmn-io](https://github.com/bpmn-io)
* [https://github.com/dagrejs](https://github.com/dagrejs)
* [https://github.com/jgrap](https://github.com/jgraph)
    * [https://github.com/jinzhanye/pokemon-diagram](https://github.com/jinzhanye/pokemon-diagram)
    * [mxGraph 入门实例教程](https://segmentfault.com/a/1190000018510996)
* [https://github.com/fabricjs](https://github.com/fabricjs)
* [https://github.com/cytoscape](https://github.com/cytoscape)
* [https://github.com/paperjs](https://github.com/paperjs)
* [https://github.com/d3](https://github.com/d3)
* [https://github.com/freegroup/draw2d](https://github.com/freegroup/draw2d)
* [https://github.com/projectstorm/react-diagrams](https://github.com/projectstorm/react-diagrams)
* [https://github.com/auto-workflow/AWorkflow](https://github.com/auto-workflow/AWorkflow)
* [https://github.com/mermaidjs/mermaid-live-editor](https://github.com/mermaidjs/mermaid-live-editor)
* 实体建模 [https://github.com/jscad](https://github.com/jscad)
    * [https://github.com/uetchy/cadmio](https://github.com/uetchy/cadmio)
    * [https://github.com/gilboonet](https://github.com/gilboonet)
* [https://github.com/adrai](https://github.com/adrai)
* [https://github.com/socketio](https://github.com/socketio)
* [https://www.jointjs.com](https://www.jointjs.com)
    * [https://resources.jointjs.com/tutorials/joint/tutorials/ports.html](https://resources.jointjs.com/tutorials/joint/tutorials/ports.html)
* [https://github.com/jwilber/roughViz](https://github.com/jwilber/roughViz)
* 图表库 [https://github.com/highcharts](https://github.com/highcharts)
* [https://github.com/apache/incubator-echarts](https://github.com/apache/incubator-echarts)
* [https://github.com/imgcook/imove](https://github.com/imgcook/imove)
* [https://github.com/antvis/X6](https://github.com/antvis/X6)

- 虚拟白板 [https://github.com/excalidraw/excalidraw](https://github.com/excalidraw/excalidraw)



**动画**

* [https://github.com/animate-css/animate.css](https://github.com/animate-css/animate.css)
* [https://github.com/juliangarnier/anime](https://github.com/juliangarnier/anime)
* 3D库 [https://github.com/mrdoob/three.js](https://github.com/mrdoob/three.js)
* 2D渲染器 [https://github.com/pixijs/pixi.js](https://github.com/pixijs/pixi.js)
* 用于缩放图像 [https://github.com/francoischalifour/medium-zoom](https://github.com/francoischalifour/medium-zoom)
* SVG绘图编辑器 [https://github.com/SVG-Edit](https://github.com/SVG-Edit)
* 图标字体自定义 [https://github.com/uuware/icons-font-customization](https://github.com/uuware/icons-font-customization)
* [https://github.com/IanLunn/Hover](https://github.com/IanLunn/Hover)
* [https://github.com/matthieua/WOW](https://github.com/matthieua/WOW)
* [https://github.com/jlmakes/scrollreveal](https://github.com/jlmakes/scrollreveal)
* [https://github.com/miniMAC/magic](https://github.com/miniMAC/magic)
* [https://github.com/fians/Waves](https://github.com/fians/Waves)
* [https://github.com/visionmedia/move.js](https://github.com/visionmedia/move.js)
* [https://github.com/julianshapiro/velocity](https://github.com/julianshapiro/velocity)
* [https://github.com/ustbhuangyi/better-scroll](https://github.com/ustbhuangyi/better-scroll)
* [https://github.com/mescroll/mescroll](https://github.com/mescroll/mescroll)
* [https://github.com/tweenjs/tween.js](https://github.com/tweenjs/tween.js)
* [https://github.com/d3/d3](https://github.com/d3/d3)
    * [https://github.com/xswei/d3js_doc](https://github.com/xswei/d3js_doc)



**Player**

+ [https://github.com/topics/html5-video](https://github.com/topics/html5-video)
+ [https://github.com/topics/video-player](https://github.com/topics/video-player)

* [https://github.com/MoePlayer](https://github.com/MoePlayer)
* [https://github.com/sampotts/plyr](https://github.com/sampotts/plyr)
* [https://github.com/Chimeejs/chimee](https://github.com/Chimeejs/chimee)
* [https://github.com/bilibili/flv.js](https://github.com/bilibili/flv.js)
* [https://github.com/google/shaka-player](https://github.com/google/shaka-player)
* [https://gitee.com/niandeng/ckplayer](https://gitee.com/niandeng/ckplayer)
* [https://github.com/Aaaaaaaty/Blog/tree/master/html5player](https://github.com/Aaaaaaaty/Blog/tree/master/html5player)
* [https://github.com/chiruom/DanmuPlayer](https://github.com/chiruom/DanmuPlayer)
* 字体滚动 [https://github.com/chenjianfang/scroxt](https://github.com/chenjianfang/scroxt)


**反爬虫**

* [https://github.com/antoinevastel/fpscanner](https://github.com/antoinevastel/fpscanner)
* [https://github.com/ta7sudan/secan](https://github.com/ta7sudan/secan)
* [前端如何检测Chrome-Headless不被爬虫虐](https://mlln.cn/2019/07/05/%E5%89%8D%E7%AB%AF%E5%A6%82%E4%BD%95%E6%A3%80%E6%B5%8BChrome-Headless%E4%B8%8D%E8%A2%AB%E7%88%AC%E8%99%AB%E8%99%90)





## 相关链接

* Bootstrap中文网 [https://www.bootcss.com](https://www.bootcss.com)
* React [https://reactjs.bootcss.com](https://reactjs.bootcss.com)
* Next.js [https://www.nextjs.cn](https://www.nextjs.cn)
* Docusaurus [https://www.docusaurus.cn](https://www.docusaurus.cn)
* Blitz [https://www.blitzjs.cn](https://www.blitzjs.cn)
* Gatsby [https://www.gatsbyjs.cn](https://www.gatsbyjs.cn)
* Recoil [https://www.recoiljs.cn](https://www.recoiljs.cn)
* Redux [https://www.reduxjs.cn](https://www.reduxjs.cn)
* MDX [https://www.mdxjs.cn](https://www.mdxjs.cn)
* Markdown [https://www.markdown.xyz](https://www.markdown.xyz)
* Vue.js [https://vuejs.bootcss.com](https://vuejs.bootcss.com)
* VuePress [https://www.vuepress.cn](https://www.vuepress.cn)
* Nuxt.js [https://www.nuxtjs.cn](https://www.nuxtjs.cn)
* Gridsome [https://www.gridsome.cn](https://www.gridsome.cn)
* Preact [https://www.preactjs.com.cn](https://www.preactjs.com.cn)
* Svelte [https://www.sveltejs.cn](https://www.sveltejs.cn)
* Sapper [https://www.sapperjs.com](https://www.sapperjs.com)
* Webpack [https://www.webpackjs.com](https://www.webpackjs.com)
* Rollup.js [https://www.rollupjs.com](https://www.rollupjs.com)
* Parcel [https://www.parceljs.cn](https://www.parceljs.cn)
* NPM [https://www.npmjs.cn](https://www.npmjs.cn)
* Yarn [https://www.yarnpkg.com.cn](https://www.yarnpkg.com.cn)
* Gulp [https://www.gulpjs.com.cn](https://www.gulpjs.com.cn)
* jQuery [https://www.jquery123.com](https://www.jquery123.com)
* SASS [https://www.sasscss.com](https://www.sasscss.com)
* TailwindCSS [https://www.tailwindcss.cn](https://www.tailwindcss.cn)
* PurgeCSS [https://www.purgecss.cn](https://www.purgecss.cn)
* cssnano [https://www.cssnano.cn](https://www.cssnano.cn)
* PostCSS [https://www.postcss.com.cn](https://www.postcss.com.cn)
* Jest [https://www.jestjs.cn](https://www.jestjs.cn)
* WebAssembly [https://www.wasm.com.cn](https://www.wasm.com.cn)
* Deno [https://www.denojs.cn](https://www.denojs.cn)



