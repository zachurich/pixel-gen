parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Jkll":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:1,y:1},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000000",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{w:10,h:10};t(this,e),this.x=i.x,this.y=i.y,this.w=r.w,this.h=r.h,this.opacity=0,this.color=n}return i(e,[{key:"init",value:function(t){return t.beginPath(),t.rect(this.x,this.y,this.w,this.h),t.fillStyle=this.color,t.fill(),{x:this.x,y:this.y,w:this.w,h:this.h}}}]),e}();exports.default=n;
},{}],"lTk1":[function(require,module,exports) {
"use strict";function r(r,o){return Array(o-r+1).fill().map(function(o,t){return r+t})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.range=r,exports.randNum=t,exports.roundToNearest=n,exports.randIndex=e,exports.default=exports.randomFloat=void 0;var o=function(r){return Math.random()};function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1?arguments[1]:void 0;return Math.floor(Math.random()*(o-r)+r)}function n(r,o){return Math.round(r/o)*o}function e(r){return console.log(">>",r[Math.floor(Math.random()*r.length)]),r[Math.floor(Math.random()*r.length)]}exports.randomFloat=o;var a={randNum:t,randIndex:e,randomFloat:o,range:r,roundToNearest:n};exports.default=a;
},{}],"/X4j":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.colors=void 0;var F=[["#084C61","#DB504A","#E3B505","#4F6D7A","#56A3A6"],["#BC201D","#1F7B41","#4DC697","#FFD777","#449FB7"],["#F52148","#6D2F62","#FA9464","#567BF3","#E54E1E"],["#4441fd","#fb3a5e","#fea13a"],["#E3E3E3","#CACACA","#A8A8A8","#939393"],["##42CE68","#4EBD2D","#75DE56","#A5EC91","#3A8226"],["#5C8EE7","#3E75D6","#275EBF","#88B2FD","#2052A9"],["#F54D20","#FF734E","#FF9C81","#B82800","#F85C31"],["#FFD6F6","#F6ADE6","#DE75C7","#FF59DB"]];exports.colors=F;var E=F;exports.default=E;
},{}],"dXaI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=a(require("./Pixel")),e=a(require("../helpers")),i=require("../resources/colors");function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function s(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}var o=function(){function a(t,r){n(this,a),this.context=t,this.frameId=void 0,this.canvas=r,this.bgColor="#282828",this.colors=i.colors,this.palette=[],this.ppf=e.default.range(0,10),this.width=this.canvas.width,this.height=this.canvas.height,this.iterator=0,this.colorIndex=0,this.reverse=!1,this.clear=!1}return s(a,[{key:"init",value:function(t){this.palette=this.pickRandomPalette(this.colors),this.setInitialColors(t),this.animate(t)}},{key:"pickRandomPalette",value:function(t){return e.default.randIndex(t)}},{key:"setInitialColors",value:function(t){t.strokeStyle=this.palette[this.palette.length-1],t.fillStyle="transparent",t.fillRect(0,0,this.width,this.height)}},{key:"clearCanvas",value:function(t){this.clear=!0,window.cancelAnimationFrame(this.frameId),this.iterator=0,t.clearRect(0,0,this.width,this.height),this.setInitialColors(t)}},{key:"stopCanvas",value:function(t){window.cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(t){var e=this;this.frameId=requestAnimationFrame(function(){return e.animate(t)}),this.ppf.forEach(function(){e.draw(t)})}},{key:"draw",value:function(i){var a=e.default.randNum(0,this.width),n=e.default.randNum(0,this.height),r={x:e.default.roundToNearest(a,10),y:e.default.roundToNearest(n,10)};return new t.default(r,this.palette[Math.floor(Math.random()*this.palette.length)]).init(i)}}]),a}();exports.default=o;
},{"./Pixel":"Jkll","../helpers":"lTk1","../resources/colors":"/X4j"}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./classes/Canvas"));function t(e){return e&&e.__esModule?e:{default:e}}var n=window.devicePixelRatio,a=document.querySelector("canvas"),c=document.querySelector("#start"),r=document.querySelector("#stop"),i=1e3;a.width=i,a.height=i/2,a.style.width="".concat(i/1.5,"px"),a.style.height="".concat(i/3,"px");var s=a.getContext("2d");s.scale(n,n);var o=new e.default(s,a);c.addEventListener("click",function(){o.clearCanvas(s),o.init(s),c.innerText="restart"}),r.addEventListener("click",function(){o.stopCanvas(s)});
},{"./classes/Canvas":"dXaI"}]},{},["Focm"], null)
//# sourceMappingURL=/pixel-gen.4bd81e44.map