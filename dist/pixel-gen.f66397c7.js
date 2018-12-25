parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Jkll":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:1,y:1},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000000",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{w:10,h:10};t(this,e),this.x=i.x,this.y=i.y,this.w=r.w,this.h=r.h,this.opacity=0,this.color=n}return i(e,[{key:"init",value:function(t){return t.beginPath(),t.rect(this.x,this.y,this.w,this.h),t.fillStyle=this.color,t.fill(),{x:this.x,y:this.y,w:this.w,h:this.h}}}]),e}();exports.default=n;
},{}],"lTk1":[function(require,module,exports) {
"use strict";function r(r,o){return Array(o-r+1).fill().map(function(o,t){return r+t})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.range=r,exports.randNum=t,exports.roundToNearest=n,exports.randIndex=e,exports.default=exports.randomFloat=void 0;var o=function(r){return Math.random()};function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1?arguments[1]:void 0;return Math.floor(Math.random()*(o-r)+r)}function n(r,o){return Math.round(r/o)*o}function e(r){return console.log(">>",r[Math.floor(Math.random()*r.length)]),r[Math.floor(Math.random()*r.length)]}exports.randomFloat=o;var a={randNum:t,randIndex:e,randomFloat:o,range:r,roundToNearest:n};exports.default=a;
},{}],"/X4j":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.colors=void 0;var F=[["#084C61","#DB504A","#E3B505","#4F6D7A","#56A3A6"],["#BC201D","#1F7B41","#4DC697","#FFD777","#449FB7"],["#F52148","#6D2F62","#FA9464","#567BF3","#E54E1E"],["#4441fd","#fb3a5e","#fea13a"],["#E3E3E3","#CACACA","#A8A8A8","#939393"],["##42CE68","#4EBD2D","#75DE56","#A5EC91","#3A8226"],["#5C8EE7","#3E75D6","#275EBF","#88B2FD","#2052A9"],["#F54D20","#FF734E","#FF9C81","#B82800","#F85C31"],["#FFD6F6","#F6ADE6","#DE75C7","#FF59DB"]];exports.colors=F;var E=F;exports.default=E;
},{}],"dXaI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=a(require("./Pixel")),e=a(require("../helpers")),i=require("../resources/colors");function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function s(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}var o=function(){function a(t,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;n(this,a),this.context=t,this.frameId=void 0,this.canvas=r,this.bgColor="#282828",this.colors=i.colors,this.palette=[],this.ppf=e.default.range(0,20),this.width=this.canvas.width,this.height=this.canvas.height,this.iterator=0,this.colorIndex=0,this.reverse=!1,this.clear=!1,this.spp=s}return s(a,[{key:"init",value:function(t){this.palette=this.pickRandomPalette(this.colors),this.setInitialColors(t),this.animate(t)}},{key:"pickRandomPalette",value:function(t){return e.default.randIndex(t)}},{key:"setInitialColors",value:function(t){t.strokeStyle=this.palette[this.palette.length-1],t.fillStyle="white",t.fillRect(0,0,this.width,this.height)}},{key:"clearCanvas",value:function(t){this.clear=!0,window.cancelAnimationFrame(this.frameId),this.iterator=0,t.clearRect(0,0,this.width,this.height),this.setInitialColors(t)}},{key:"stopCanvas",value:function(t){window.cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(t){var e=this;this.frameId=requestAnimationFrame(function(){return e.animate(t)}),this.ppf.forEach(function(){e.draw(t)})}},{key:"draw",value:function(i){var a=e.default.randNum(0,this.width),n=e.default.randNum(0,this.height),r={x:e.default.roundToNearest(a,this.spp),y:e.default.roundToNearest(n,this.spp)},s={w:this.spp,h:this.spp};return new t.default(r,this.palette[Math.floor(Math.random()*this.palette.length)],s).init(i)}}]),a}();exports.default=o;
},{"./Pixel":"Jkll","../helpers":"lTk1","../resources/colors":"/X4j"}],"XOPP":[function(require,module,exports) {
var define;
var e;!function(t,n){"function"==typeof e&&e.amd?e([],n):"object"==typeof exports?module.exports=n():t.download=n()}(this,function(){return function e(t,n,o){var a,r,i=window,d="application/octet-stream",l=o||d,s=t,c=!n&&!o&&s,u=document.createElement("a"),f=function(e){return String(e)},p=i.Blob||i.MozBlob||i.WebKitBlob||f,m=n||"download";if(p=p.call?p.bind(i):Blob,"true"===String(this)&&(l=(s=[s,l])[0],s=s[1]),c&&c.length<2048&&(m=c.split("/").pop().split("?")[0],u.href=c,-1!==u.href.indexOf(c))){var b=new XMLHttpRequest;return b.open("GET",c,!0),b.responseType="blob",b.onload=function(t){e(t.target.response,m,d)},setTimeout(function(){b.send()},0),b}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(s)){if(!(s.length>2096103.424&&p!==f))return navigator.msSaveBlob?navigator.msSaveBlob(g(s),m):y(s);l=(s=g(s)).type||d}else if(/([\x80-\xff])/.test(s)){for(var w=0,h=new Uint8Array(s.length),v=h.length;w<v;++w)h[w]=s.charCodeAt(w);s=new p([h],{type:l})}function g(e){for(var t=e.split(/[:;,]/),n=t[1],o=("base64"==t[2]?atob:decodeURIComponent)(t.pop()),a=o.length,r=0,i=new Uint8Array(a);r<a;++r)i[r]=o.charCodeAt(r);return new p([i],{type:n})}function y(e,t){if("download"in u)return u.href=e,u.setAttribute("download",m),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout(function(){u.click(),document.body.removeChild(u),!0===t&&setTimeout(function(){i.URL.revokeObjectURL(u.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,d)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var n=document.createElement("iframe");document.body.appendChild(n),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,d)),n.src=e,setTimeout(function(){document.body.removeChild(n)},333)}if(a=s instanceof p?s:new p([s],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(a,m);if(i.URL)y(i.URL.createObjectURL(a),!0);else{if("string"==typeof a||a.constructor===f)try{return y("data:"+l+";base64,"+i.btoa(a))}catch(U){return y("data:"+l+","+encodeURIComponent(a))}(r=new FileReader).onload=function(e){y(this.result)},r.readAsDataURL(a)}return!0}});
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=i(require("./classes/Canvas")),t=require("./helpers"),n=i(require("downloadjs"));function i(e){return e&&e.__esModule?e:{default:e}}var r=window.devicePixelRatio,a=document.querySelector("#canvas"),d=document.querySelector("#start"),o=document.querySelector("#stop");function s(){var e;return window.innerWidth<=500?(e=420,a.height=e,a.width=e/2,a.style.height=a.height+"px",a.style.width=a.width+"px",2):(e=1e3,a.height=e/2,a.width=e,a.style.height=e/3+"px",a.style.width=e/1.5+"px",10)}function c(){var e=a.toDataURL("image/png");(0,n.default)(e,"pixel-gen.png","image/png")}var l=s(),u=a.getContext("2d");u.scale(r,r);var v=new e.default(u,a,l);d.addEventListener("click",function(){v.clearCanvas(u),v.init(u),d.innerText="restart";var e=document.querySelector(".download");e&&(e.removeEventListener("click",c),o.classList.remove("download"),o.innerText="stop")}),o.addEventListener("click",function(){o.classList.add("download"),o.innerText="download?",v.stopCanvas(u),document.querySelector(".download").addEventListener("click",c)});
},{"./classes/Canvas":"dXaI","./helpers":"lTk1","downloadjs":"XOPP"}]},{},["Focm"], null)
//# sourceMappingURL=pixel-gen.f66397c7.map