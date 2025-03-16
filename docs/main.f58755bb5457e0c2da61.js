(()=>{"use strict";function a(d){var e=c[d];if(void 0!==e)return e.exports;var f=c[d]={id:d,exports:{}};return b[d](f,f.exports,a),f.exports}var b={56:(a,b,c)=>{a.exports=function(a){var b=c.nc;b&&a.setAttribute("nonce",b)}},72:(a)=>{function b(a){for(var b=-1,c=0;c<e.length;c++)if(e[c].identifier===a){b=c;break}return b}function c(a,c){for(var f={},g=[],h=0;h<a.length;h++){var i=a[h],j=c.base?i[0]+c.base:i[0],k=f[j]||0,l="".concat(j," ").concat(k);f[j]=k+1;var m=b(l),n={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)e[m].references++,e[m].updater(n);else{var o=d(n,c);c.byIndex=h,e.splice(h,0,{identifier:l,updater:o,references:1})}g.push(l)}return g}function d(a,b){var c=b.domAPI(b);c.update(a);var d=function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap&&b.supports===a.supports&&b.layer===a.layer)return;c.update(a=b)}else c.remove()};return d}var e=[];a.exports=function(a,d){d=d||{},a=a||[];var f=c(a,d);return function(a){a=a||[];for(var g=0;g<f.length;g++){var h=f[g],i=b(h);e[i].references--}for(var j=c(a,d),k=0;k<f.length;k++){var l=f[k],m=b(l);0===e[m].references&&(e[m].updater(),e.splice(m,1))}f=j}}},113:(a)=>{a.exports=function(a,b){if(b.styleSheet)b.styleSheet.cssText=a;else{for(;b.firstChild;)b.removeChild(b.firstChild);b.appendChild(document.createTextNode(a))}}},314:(a)=>{a.exports=function(a){var b=[];return b.toString=function(){return this.map(function(b){var c="",d="undefined"!=typeof b[5];return b[4]&&(c+="@supports (".concat(b[4],") {")),b[2]&&(c+="@media ".concat(b[2]," {")),d&&(c+="@layer".concat(0<b[5].length?" ".concat(b[5]):""," {")),c+=a(b),d&&(c+="}"),b[2]&&(c+="}"),b[4]&&(c+="}"),c}).join("")},b.i=function(a,c,d,e,f){"string"==typeof a&&(a=[[null,a,void 0]]);var g={};if(d)for(var h,i=0;i<this.length;i++)h=this[i][0],null!=h&&(g[h]=!0);for(var j,k=0;k<a.length;k++)(j=[].concat(a[k]),!(d&&g[j[0]]))&&("undefined"!=typeof f&&("undefined"==typeof j[5]?j[5]=f:(j[1]="@layer".concat(0<j[5].length?" ".concat(j[5]):""," {").concat(j[1],"}"),j[5]=f)),c&&(j[2]?(j[1]="@media ".concat(j[2]," {").concat(j[1],"}"),j[2]=c):j[2]=c),e&&(j[4]?(j[1]="@supports (".concat(j[4],") {").concat(j[1],"}"),j[4]=e):j[4]="".concat(e)),b.push(j))},b}},540:(a)=>{a.exports=function(a){var b=document.createElement("style");return a.setAttributes(b,a.attributes),a.insert(b,a.options),b}},601:(a)=>{a.exports=function(a){return a[1]}},659:(a)=>{function b(a){if("undefined"==typeof c[a]){var b=document.querySelector(a);if(window.HTMLIFrameElement&&b instanceof window.HTMLIFrameElement)try{b=b.contentDocument.head}catch(a){b=null}c[a]=b}return c[a]}var c={};a.exports=function(a,c){var d=b(a);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(c)}},702:(a,b,c)=>{c.d(b,{A:()=>i});var d=c(601),e=c.n(d),f=c(314),g=c.n(f),h=g()(e());h.push([a.id,`

h1 {
    color: red;
}

`,""]);const i=h},825:(a)=>{function b(a,b,c){var d="";c.supports&&(d+="@supports (".concat(c.supports,") {")),c.media&&(d+="@media ".concat(c.media," {"));var e="undefined"!=typeof c.layer;e&&(d+="@layer".concat(0<c.layer.length?" ".concat(c.layer):""," {")),d+=c.css,e&&(d+="}"),c.media&&(d+="}"),c.supports&&(d+="}");var f=c.sourceMap;f&&"undefined"!=typeof btoa&&(d+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(f))))," */")),b.styleTagTransform(d,a,b.options)}function c(a){return null!==a.parentNode&&void a.parentNode.removeChild(a)}a.exports=function(a){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var d=a.insertStyleElement(a);return{update:function(c){b(d,a,c)},remove:function(){c(d)}}}}},c={};(()=>{a.n=(b)=>{var c=b&&b.__esModule?()=>b["default"]:()=>b;return a.d(c,{a:c}),c}})(),(()=>{a.d=(b,c)=>{for(var d in c)a.o(c,d)&&!a.o(b,d)&&Object.defineProperty(b,d,{enumerable:!0,get:c[d]})}})(),(()=>{a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})(),(()=>{a.nc=void 0})();var d=a(72),e=a.n(d),f=a(825),g=a.n(f),h=a(659),i=a.n(h),j=a(56),k=a.n(j),l=a(540),m=a.n(l),n=a(113),o=a.n(n),p=a(702);var q={styleTagTransform:o(),setAttributes:k(),insert:i().bind(null,"head"),domAPI:g(),insertStyleElement:m()},r=e()(p.A,q);p.A&&p.A.locals?p.A.locals:void 0;(function(c){console.log("Creando etiqueta h1, en el HTML");var a=document.createElement("h1");a.innerText="Hola, ".concat(c),document.body.append(a)})("Marcelo")})();