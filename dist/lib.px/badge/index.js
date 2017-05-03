/*! vue-ydui v0.5.7 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Badge=void 0;var o=r(39),a=n(o);t.Badge=a.default},1:function(e,t){e.exports=function(e,t,r,n){var o,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,a=e.default);var i="function"==typeof a?a.options:a;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),r&&(i._scopeId=r),n){var u=i.computed||(i.computed={});Object.keys(n).forEach(function(e){var t=n[e];u[e]=function(){return t}})}return{esModule:o,exports:a,options:i}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},3:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=c[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(a(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(a(r.parts[o]));c[r.id]={id:r.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function a(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(g)return h;n.parentNode.removeChild(n)}if(v){var a=p++;n=l||(l=o()),t=s.bind(null,n,a,!1),r=s.bind(null,n,a,!0)}else n=o(),t=i.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function s(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function i(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document,d=r(4),c={},f=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,g=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){g=r;var o=d(e,t);return n(o),function(t){for(var r=[],a=0;a<o.length;a++){var s=o[a],i=c[s.id];i.refs--,r.push(i)}t?(o=d(e,t),n(o)):o=[];for(var a=0;a<r.length;a++){var i=r[a];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete c[i.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],s=a[0],i=a[1],u=a[2],d=a[3],c={id:e+":"+o,css:i,media:u,sourceMap:d};n[s]?n[s].parts.push(c):r.push(n[s]={id:s,parts:[c]})}return r}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),n=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,r=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||r.test(e)||n.test(e)},o=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var r=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===r||"auto"===r)return t;t=t.parentNode}return window},a=function(e,t){var r=e==window?document.body.offsetHeight:e.offsetHeight,n=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-n,a=o+t.offsetHeight;return o>=0&&o<r||a>0&&a<=r},s=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},i=function(e,t){s(e,t)||(e.className=""==e.className?t:e.className+" "+t)},u=function(e,t){if(s(e,t)){for(var r=" "+e.className.replace(/[\t\r\n]/g,"")+" ";r.indexOf(" "+t+" ")>=0;)r=r.replace(" "+t+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")}};t.pageScroll=r,t.isColor=n,t.getScrollview=o,t.checkInview=a,t.addClass=i,t.removeClass=u},37:function(e,t,r){t=e.exports=r(2)(),t.push([e.id,'.badge{color:#fff;font-size:12px;position:relative;display:inline-block;border-radius:1000px;line-height:1;padding:3px 6px;white-space:nowrap;background-color:#d0d0d0}.badge-radius{border-radius:2px}.badge-primary{background-color:#04be02;color:#fff}.badge-danger{background-color:#ef4f4f;color:#fff}.badge-warning{background-color:#ffb400;color:#fff}.badge-hollow{background-color:#fbfbfb;color:#b2b2b2}.badge-hollow:after{content:"";width:200%;height:200%;border:1px solid #b2b2b2;position:absolute;top:0;left:0;border-radius:50px;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5)}.badge-radius:after{border-radius:2px}',""])},39:function(e,t,r){r(155);var n=r(1)(r(158),r(131),null,null);e.exports=n.exports},131:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"badge",class:e.typesClass,style:{backgroundColor:e.bgcolor,color:e.color}},[e._t("default")],2)},staticRenderFns:[]}},155:function(e,t,r){var n=r(37);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);r(3)("3a793ee4",n,!0)},158:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5);t.default={name:"yd-badge",props:{type:{validator:function(e){return["primary","danger","warning","hollow"].indexOf(e)>-1}},shape:{validator:function(e){return["circle","square"].indexOf(e)>-1}},color:{validator:function(e){return!e||(0,n.isColor)(e)}},bgcolor:{validator:function(e){return!e||(0,n.isColor)(e)}}},computed:{typesClass:function(){return this.bgcolor?"square"==this.shape?" badge-radius":"":(this.type?"badge-"+this.type:"")+("square"==this.shape?" badge-radius":"")}}}}})});