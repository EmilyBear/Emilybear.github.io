!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).littlefoot={})}(this,(function(e){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var r=n((function(e){var n,r,o,i,a,u,c,s,l,f,d,p,h,v,m,y,g,b,w,_,x,S,E;!function(){var O,P,j="object"==typeof t?t:"object"==typeof self?self:"object"==typeof this?this:{};function T(e,t){return e!==j&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(n,r){return e[n]=t?t(n,r):r}}O=T(j,T(e.exports)),P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},n=function(e,t){function n(){this.constructor=e}P(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},i=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;0<=u;u--)(o=e[u])&&(a=(i<3?o(a):3<i?o(t,n,a):o(t,n))||a);return 3<i&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){return function(n,r){t(n,r,e)}},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(e,t,n,r){return new(n=n||Promise)((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a={next:u(0),throw:u(1),return:u(2)};return"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=0<(o=i.trys).length&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},E=function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]},l=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])},f=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},d=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||0<t--)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},p=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e},h=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r},v=function(e){return this instanceof v?(this.v=e,this):new v(e)},m=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o=[],i={};return a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(e){r[e]&&(i[e]=function(t){return new Promise((function(n,r){1<o.push([e,t,n,r])||u(e,t)}))})}function u(e,t){try{(n=r[e](t)).value instanceof v?Promise.resolve(n.value.v).then(c,s):l(o[0][2],n)}catch(e){l(o[0][3],e)}var n}function c(e){u("next",e)}function s(e){u("throw",e)}function l(e,t){e(t),o.shift(),o.length&&u(o[0][0],o[0][1])}},y=function(e){var t,n={};return r("next"),r("throw",(function(e){throw e})),r("return"),n[Symbol.iterator]=function(){return this},n;function r(r,o){n[r]=e[r]?function(n){return(t=!t)?{value:v(e[r](n)),done:"return"===r}:o?o(n):n}:o}},g=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=f(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){var i,a,u,c;t=e[n](t),i=r,a=o,u=t.done,c=t.value,Promise.resolve(c).then((function(e){i({value:e,done:u})}),a)}))}}},b=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},w=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},_=function(e){return e&&e.__esModule?e:{default:e}},x=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},S=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},O("__extends",n),O("__assign",r),O("__rest",o),O("__decorate",i),O("__param",a),O("__metadata",u),O("__awaiter",c),O("__generator",s),O("__exportStar",l),O("__createBinding",E),O("__values",f),O("__read",d),O("__spread",p),O("__spreadArrays",h),O("__await",v),O("__asyncGenerator",m),O("__asyncDelegator",y),O("__asyncValues",g),O("__makeTemplateObject",b),O("__importStar",w),O("__importDefault",_),O("__classPrivateFieldGet",x),O("__classPrivateFieldSet",S)}()})),o=n((function(e,t){t.__esModule=!0,t.getStyle=void 0,t.getStyle=function(e,t){var n,r=((null===(n=e.ownerDocument)||void 0===n?void 0:n.defaultView)||window).getComputedStyle(e);return r.getPropertyValue(t)||r[t]}})),i=n((function(e,t){t.__esModule=!0,t.pixels=void 0;var n=96,r=25.4;function i(e){return e?o.getStyle(e,"fontSize")||i(e.parentElement):o.getStyle(window.document.documentElement,"fontSize")}t.pixels=function e(t,o){var a,u,c,s,l,f=null!==(u=null===(a=null==o?void 0:o.ownerDocument)||void 0===a?void 0:a.defaultView)&&void 0!==u?u:window,d=f.document.documentElement||f.document.body,p=(s=t||"0",[parseFloat(s),(null!==(c=null==(l=s.match(/[\d-.]+(\w+)$/))?void 0:l[1])&&void 0!==c?c:"").toLowerCase()]),h=p[0];switch(p[1]){case"rem":return h*e(i(window.document.documentElement));case"em":return h*e(i(o),null==o?void 0:o.parentElement);case"in":return h*n;case"q":return h*n/r/4;case"mm":return h*n/r;case"cm":return h*n*10/r;case"pt":return h*n/72;case"pc":return h*n/6;case"vh":return(h*f.innerHeight||d.clientWidth)/100;case"vw":return(h*f.innerWidth||d.clientHeight)/100;case"vmin":return h*Math.min(f.innerWidth||d.clientWidth,f.innerHeight||d.clientHeight)/100;case"vmax":return h*Math.max(f.innerWidth||d.clientWidth,f.innerHeight||d.clientHeight)/100;default:return h}}}));function a(e,t){e.classList.add(t)}function u(e,t){e.classList.remove(t)}function c(e){var t;null!==(t=e.parentNode)&&void 0!==t&&t.removeChild(e)}var s="littlefoot-footnote__tooltip",l="is-positioned-";function f(e){var t=e.offsetHeight,n=e.getBoundingClientRect().top+t/2;return{top:n,bottom:window.innerHeight-n}}function d(e){var t=parseFloat(o.getStyle(e,"marginLeft")),n=e.offsetWidth-t;return(e.getBoundingClientRect().left+n/2)/window.innerWidth}function p(e,t){var n=2*parseInt(o.getStyle(e,"marginTop"),10)+e.offsetHeight;return t.bottom<n&&t.bottom<t.top?"top":"bottom"}var h="is-active",v="is-changing",m="is-scrollable",y=function(e){return!!e.parentElement};function g(e){var t=e.id,n=e.button,r=e.content,g=e.host,b=e.popover,w=e.wrapper,_=!1,x=0;return{id:t,activate:function(e){var t;n.setAttribute("aria-expanded","true"),a(n,v),a(n,h),n.insertAdjacentElement("afterend",b),b.style.maxWidth=document.body.clientWidth+"px",t=r,x=Math.round(i.pixels(o.getStyle(t,"maxHeight"),t)),null!=e&&e(b,n)},dismiss:function(e){n.setAttribute("aria-expanded","false"),a(n,v),u(n,h),u(b,h),null!=e&&e(b,n)},isActive:function(){return n.classList.contains(h)},isReady:function(){return!n.classList.contains(v)},isHovered:function(){return _},ready:function(){a(b,h),u(n,v)},remove:function(){c(b),u(n,v)},reposition:function(){var e,t,i,c,s,h,v,g,w,_,S;y(b)&&(r.style.maxHeight=(g=x,_=p(v=b,w=f(n)),S=parseInt(o.getStyle(v,"marginTop"),10),Math.min(g,w[_]-S-15)+"px"),s=p(e=b,f(t=n)),(h=e.dataset.footnotePosition)!==s&&(e.dataset.footnotePosition=s,u(e,""+l+h),a(e,""+l+s),i=100*d(t)+"%",c="top"===s?"100%":"0",e.style.transformOrigin=i+" "+c),b.offsetHeight<r.scrollHeight?(a(b,m),r.setAttribute("tabindex","0")):(u(b,m),r.removeAttribute("tabindex")))},resize:function(){var e,t,i,a;y(b)&&(b.style.left=(i=n,a=r.offsetWidth,-d(i)*a+parseInt(o.getStyle(i,"marginLeft"),10)+i.offsetWidth/2+"px"),w.style.maxWidth=r.offsetWidth+"px",e=n,(t=b.querySelector("."+s))&&(t.style.left=100*d(e)+"%"))},startHovering:function(){_=!0},stopHovering:function(){_=!1},destroy:function(){return c(g)}}}var b=n((function(e,t){t.__esModule=!0,t.throttle=void 0,t.throttle=function(e,t){void 0===t&&(t=0);var n,r=0;return Object.assign((function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var a=Math.max(0,r+t-Date.now());a?(clearTimeout(n),n=setTimeout((function(){r=Date.now(),e.apply(void 0,o)}),a)):(r=Date.now(),e.apply(void 0,o))}),{cancel:function(){r=0,clearTimeout(n)}})}})),w="is-fully-scrolled",_=function(e){return function(t){var n=t.currentTarget,r=-t.deltaY;0<r&&u(e,w),n&&r<=0&&r<n.clientHeight+n.scrollTop-n.scrollHeight&&a(e,w)}},x="littlefoot-footnote__content",S="littlefoot-footnote__wrapper",E="footnote-print-only",O=function(e){return a(e,E)};function P(e,t){return Array.from(e.querySelectorAll(t))}function j(e,t){return e.querySelector("."+t)||e.firstElementChild||e}function T(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function A(e){return void 0!==e}function k(e){var t,n,r=(t=e,n=":not(."+E+")",Array.from(t.children).filter((function(e){return 8!==e.nodeType&&e.matches(n)}))),o=r.filter((function(e){return"HR"===e.tagName}));r.length===o.length&&(o.concat(e).forEach(O),k(e.parentElement))}function M(e){var t=e.parentElement;c(e);var n=null==t?void 0:t.innerHTML.replace("[]","").replace("&nbsp;"," ").trim();t&&!n&&M(t)}function D(e,t){var n=T(e.body.outerHTML);P(n,'[href$="#'+e.referenceId+'"]').forEach(M);var r=n.innerHTML.trim();return{original:e,data:{id:""+(t+1),number:t+1,reference:"lf-"+e.referenceId,content:r.startsWith("<")?r:"<p>"+r+"</p>"}}}var H=function(e){var t=0,n=null;return function(o){var i=o.original,a=o.data,u=i.reference.closest(e);return t=n===u?t+1:1,n=u,{original:i,data:r.__assign(r.__assign({},a),{number:t})}}};function I(e){var t=/<%=?\s*(\w+?)\s*%>/g;return function(n){return e.replace(t,(function(e,t){var r;return String(null!==(r=n[t])&&void 0!==r?r:"")}))}}function L(e,t){var n=I(e),r=I(t);return function(e){var t=e.original,o=e.data,i=o.id,a=T('<span class="littlefoot-footnote__host">'+n(o)+"</span>"),u=a.firstElementChild;u.dataset.footnoteButton="",u.dataset.footnoteId=i,u.dataset.footnoteNumber=""+o.number;var c=T(r(o));c.dataset.footnotePopover="",c.dataset.footnoteId=i;var s,l=j(c,S),f=j(c,x);return s=c,f.addEventListener("wheel",b.throttle(_(s),16)),{original:t,data:o,id:i,button:u,host:a,popover:c,content:f,wrapper:l}}}function F(e){var t,n,r,o,i,a,c,s=e.allowDuplicates,l=e.anchorParentSelector,f=e.anchorPattern,d=e.buttonTemplate,p=e.contentTemplate,h=e.footnoteSelector,v=e.numberResetSelector,m=e.scope,y=(a=document,c=f,P(a,m+' a[href*="#"]').filter((function(e){return(e.href+e.rel).match(c)})).map((t=document,n=s,r=l,o=h,i=[],function(e){var a="#"+e.href.split("#")[1].replace(/[:.+~*[\]]/g,"\\$&"),u=P(t,a).find((function(e){return n||!i.includes(e)})),c=null==u?void 0:u.closest(o);if(c){i.push(c);var s=e.closest(r)||e;return{reference:s,referenceId:s.id||e.id,body:c}}})).filter(A).map(D).map(v?H(v):function(e){return e}).map(L(d,p)));y.forEach((function(e){var t,n=e.original,r=e.host;O(n.reference),O(n.body),k(n.body.parentElement),t=r,n.reference.insertAdjacentElement("beforebegin",t)}));var b=y.map(g);return{footnotes:b,unmount:function(){b.forEach((function(e){return e.destroy()})),P(document,"."+E).forEach((function(e){return u(e,E)}))}}}var W={activateDelay:100,activateOnHover:!1,allowDuplicates:!0,allowMultiple:!1,anchorParentSelector:"sup",anchorPattern:/(fn|footnote|note)[:\-_\d]/gi,dismissDelay:100,dismissOnUnhover:!1,footnoteSelector:"li",hoverDelay:250,numberResetSelector:"",scope:"",contentTemplate:'<aside class="littlefoot-footnote" id="fncontent:<% id %>"><div class="'+S+'"><div class="'+x+'"><div class="references-title"><i class="fa-solid fa-book-bookmark"></i>&nbsp;注释引用</div><% content %></div></div><div class="'+s+'"></div></aside>',buttonTemplate:'<button aria-label="Footnote <% number %>" class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>" /><sup>[<% number %>]</sup></button>'};function C(e,t){return e.target.closest(t)}function R(e){return null==e?void 0:e.dataset.footnoteId}var z=n((function(e,t){e.exports=function(){function e(){if(!(this instanceof e))return new e;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var t=window.document.documentElement,n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.msMatchesSelector;e.prototype.matchesSelector=function(e,t){return n.call(e,t)},e.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)};var r=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;(e.prototype.indexes=[]).push({name:"ID",selector:function(e){var t;if(t=e.match(r))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var o=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;e.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(o))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var i,a=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;e.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(a))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),e.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},i="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var u=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function c(e,t){var n,r,o,i,a,c,s=(e=e.slice(0).concat(e.default)).length,l=t,f=[];do{if(u.exec(""),(o=u.exec(l))&&(l=o[3],o[2]||!l))for(n=0;n<s;n++)if(a=(c=e[n]).selector(o[1])){for(r=f.length,i=!1;r--;)if(f[r].index===c&&f[r].key===a){i=!0;break}i||f.push({index:c,key:a});break}}while(o);return f}function s(e,t){return e.id-t.id}return e.prototype.logDefaultIndexUsed=function(){},e.prototype.add=function(e,t){var n,r,o,a,u,s,l,f,d=this.activeIndexes,p=this.selectors,h=this.selectorObjects;if("string"==typeof e){for(h[(n={id:this.uid++,selector:e,data:t}).id]=n,l=c(this.indexes,e),r=0;r<l.length;r++)a=(f=l[r]).key,(u=function(e,t){var n,r,o;for(n=0,r=e.length;n<r;n++)if(o=e[n],t.isPrototypeOf(o))return o}(d,o=f.index))||((u=Object.create(o)).map=new i,d.push(u)),o===this.indexes.default&&this.logDefaultIndexUsed(n),(s=u.map.get(a))||(s=[],u.map.set(a,s)),s.push(n);this.size++,p.push(e)}},e.prototype.remove=function(e,t){if("string"==typeof e){for(var n,r,o,i,a,u,s=this.activeIndexes,l=this.selectors=[],f=this.selectorObjects,d={},p=1===arguments.length,h=c(this.indexes,e),v=0;v<h.length;v++)for(n=h[v],r=s.length;r--;)if(i=s[r],n.index.isPrototypeOf(i)){if(a=i.map.get(n.key))for(o=a.length;o--;)(u=a[o]).selector!==e||!p&&u.data!==t||(a.splice(o,1),d[u.id]=!0);break}for(v in d)delete f[v],this.size--;for(v in f)l.push(f[v].selector)}},e.prototype.queryAll=function(e){if(!this.selectors.length)return[];for(var t,n,r,o,i,a,u={},c=[],l=this.querySelectorAll(this.selectors.join(", "),e),f=0,d=l.length;f<d;f++)for(r=l[f],t=0,n=(o=this.matches(r)).length;t<n;t++)u[(a=o[t]).id]?i=u[a.id]:(i={id:a.id,selector:a.selector,data:a.data,elements:[]},u[a.id]=i,c.push(i)),i.elements.push(r);return c.sort(s)},e.prototype.matches=function(e){if(!e)return[];for(var t,n,r,o,i,a,u,c,l,f=this.activeIndexes,d={},p=[],h=0,v=f.length;h<v;h++)if(a=(i=f[h]).element(e))for(t=0,r=a.length;t<r;t++)if(u=i.map.get(a[t]))for(n=0,o=u.length;n<o;n++)!d[l=(c=u[n]).id]&&this.matchesSelector(e,c.selector)&&(d[l]=!0,p.push(c));return p.sort(s)},e}()})),q=n((function(e,t){!function(e,t){t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var n={},r={},o=new WeakMap,i=new WeakMap,a=new WeakMap,u=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function c(e,t,n){var r=e[t];return e[t]=function(){return n.apply(e,arguments),r.apply(e,arguments)},e}function s(){o.set(this,!0)}function l(){o.set(this,!0),i.set(this,!0)}function f(){return a.get(this)||null}function d(e,t){u&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||u.get})}function p(e){if(function(e){try{return e.eventPhase,!0}catch(e){return!1}}(e)){var t=(1===e.eventPhase?r:n)[e.type];if(t){var u=function(e,t,n){var r=[],o=t;do{if(1!==o.nodeType)break;var i=e.matches(o);if(i.length){var a={node:o,observers:i};n?r.unshift(a):r.push(a)}}while(o=o.parentElement);return r}(t,e.target,1===e.eventPhase);if(u.length){c(e,"stopPropagation",s),c(e,"stopImmediatePropagation",l),d(e,f);for(var p=0,h=u.length;p<h&&!o.get(e);p++){var v=u[p];a.set(e,v.node);for(var m=0,y=v.observers.length;m<y&&!i.get(e);m++)v.observers[m].data.call(v.node,e)}a.delete(e),d(e)}}}}e.fire=function(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n}))},e.off=function(e,t,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=!!i.capture,u=a?r:n,c=u[e];c&&(c.remove(t,o),c.size||(delete u[e],document.removeEventListener(e,p,a)))},e.on=function(e,o,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=!!a.capture,c=u?r:n,s=c[e];s||(s=new t,c[e]=s,document.addEventListener(e,p,u)),s.add(o,i)},Object.defineProperty(e,"__esModule",{value:!0})}(t,z)})),U="[data-footnote-id]",V=function(e){return function(t){t.preventDefault();var n=R(C(t,U));n&&e(n)}},N=document.addEventListener,B=document.removeEventListener,G=window.addEventListener,$=window.removeEventListener;function Y(e){void 0===e&&(e={});var t,n,o,i,a,u,c,s=r.__assign(r.__assign({},W),e),l=function(e,t){function n(e){return function(n){n.isReady()&&(n.dismiss(t.dismissCallback),setTimeout(n.remove,e))}}function r(e){return function(r){t.allowMultiple||i.filter((function(e){return e.id!==r.id})).forEach(n(t.dismissDelay)),r.isReady()&&(r.activate(t.activateCallback),r.reposition(),r.resize(),setTimeout(r.ready,e))}}function o(e){return function(t){var n=i.find((function(e){return e.id===t}));n&&e(n)}}var i=e.footnotes,a=e.unmount;return{activate:function(e,t){return o(r(t))(e)},dismiss:function(e,t){return o(n(t))(e)},dismissAll:function(){return i.forEach(n(t.dismissDelay))},repositionAll:function(){return i.forEach((function(e){return e.reposition()}))},resizeAll:function(){return i.forEach((function(e){return e.resize()}))},toggle:o((function(e){return(e.isActive()?n(t.dismissDelay):r(t.activateDelay))(e)})),hover:o((function(e){e.startHovering(),t.activateOnHover&&!e.isActive()&&r(t.hoverDelay)(e)})),unhover:o((function(e){e.stopHovering(),t.dismissOnUnhover&&setTimeout((function(){return i.filter((function(e){return!e.isHovered()})).forEach(n(t.dismissDelay))}),t.hoverDelay)})),unmount:a}}(F(s),s),f=(n=function(e,t){return function(n){var r=R(C(n,"[data-footnote-button]"));r?e(r):C(n,"[data-footnote-popover]")||t()}}((t=l).toggle,t.dismissAll),o=function(e){return function(t){27!==t.keyCode&&"Escape"!==t.key&&"Esc"!==t.key||e()}}(t.dismissAll),i=b.throttle(t.repositionAll,16),a=b.throttle(t.resizeAll,16),u=V(t.hover),c=V(t.unhover),N("touchend",n),N("click",n),N("keyup",o),N("gestureend",i),G("scroll",i),G("resize",a),q.on("mouseover",U,u),q.on("mouseout",U,c),function(){B("touchend",n),B("click",n),B("keyup",o),B("gestureend",i),$("scroll",i),$("resize",a),q.off("mouseover",U,u),q.off("mouseout",U,c)});return{activate:function(e,t){void 0===t&&(t=s.activateDelay),l.activate(e,t)},dismiss:function(e,t){void 0===t&&(t=s.dismissDelay),void 0===e?l.dismissAll():l.dismiss(e,t)},unmount:function(){f(),l.unmount()},getSetting:function(e){return s[e]},updateSetting:function(e,t){s[e]=t}}}e.default=Y,e.littlefoot=Y,Object.defineProperty(e,"__esModule",{value:!0})}));