// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"classes/Pixel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pixel =
/*#__PURE__*/
function () {
  function Pixel() {
    var coords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      x: 1,
      y: 1
    };
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#000000";
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      w: 10,
      h: 10
    };

    _classCallCheck(this, Pixel);

    this.x = coords.x;
    this.y = coords.y;
    this.w = size.w;
    this.h = size.h;
    this.opacity = 0;
    this.color = color;
  }

  _createClass(Pixel, [{
    key: "init",
    value: function init(ctx) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.w, this.h);
      ctx.fillStyle = this.color;
      ctx.fill();
      return {
        x: this.x,
        y: this.y,
        w: this.w,
        h: this.h
      };
    }
  }]);

  return Pixel;
}();

exports.default = Pixel;
},{}],"helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
exports.randNum = randNum;
exports.roundToNearest = roundToNearest;
exports.randIndex = randIndex;
exports.default = exports.randomFloat = void 0;

function range(start, end) {
  return Array(end - start + 1).fill().map(function (_, idx) {
    return start + idx;
  });
}

var randomFloat = function randomFloat(n) {
  return Math.random();
};

exports.randomFloat = randomFloat;

function randNum() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 ? arguments[1] : undefined;
  return Math.floor(Math.random() * (max - min) + min);
}

function roundToNearest(n, nearest) {
  return Math.round(n / nearest) * nearest;
}

function randIndex(arr) {
  console.log(">>", arr[Math.floor(Math.random() * arr.length)]);
  return arr[Math.floor(Math.random() * arr.length)];
}

var _default = {
  randNum: randNum,
  randIndex: randIndex,
  randomFloat: randomFloat,
  range: range,
  roundToNearest: roundToNearest
};
exports.default = _default;
},{}],"resources/colors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.colors = void 0;
var colors = [["#084C61", "#DB504A", "#E3B505", "#4F6D7A", "#56A3A6"], ["#BC201D", "#1F7B41", "#4DC697", "#FFD777", "#449FB7"], ["#F52148", "#6D2F62", "#FA9464", "#567BF3", "#E54E1E"], ["#4441fd", "#fb3a5e", "#fea13a"], ["#E3E3E3", "#CACACA", "#A8A8A8", "#939393"], ["##42CE68", "#4EBD2D", "#75DE56", "#A5EC91", "#3A8226"], ["#5C8EE7", "#3E75D6", "#275EBF", "#88B2FD", "#2052A9"], ["#F54D20", "#FF734E", "#FF9C81", "#B82800", "#F85C31"], ["#FFD6F6", "#F6ADE6", "#DE75C7", "#FF59DB"]];
exports.colors = colors;
var _default = colors;
exports.default = _default;
},{}],"classes/Canvas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Pixel = _interopRequireDefault(require("./Pixel"));

var _helpers = _interopRequireDefault(require("../helpers"));

var _colors = require("../resources/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Canvas =
/*#__PURE__*/
function () {
  function Canvas(c, canvas) {
    var spp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    _classCallCheck(this, Canvas);

    this.context = c;
    this.frameId = undefined;
    this.canvas = canvas;
    this.bgColor = "#282828";
    this.colors = _colors.colors;
    this.palette = [];
    this.ppf = _helpers.default.range(0, 20); // pixel per frame

    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.iterator = 0;
    this.colorIndex = 0;
    this.reverse = false;
    this.clear = false;
    this.spp = spp; // size per pixel
  }

  _createClass(Canvas, [{
    key: "init",
    value: function init(c) {
      this.palette = this.pickRandomPalette(this.colors);
      this.setInitialColors(c);
      this.animate(c);
    }
  }, {
    key: "pickRandomPalette",
    value: function pickRandomPalette(colors) {
      return _helpers.default.randIndex(colors);
    }
  }, {
    key: "setInitialColors",
    value: function setInitialColors(c) {
      c.strokeStyle = this.palette[this.palette.length - 1];
      c.fillStyle = "white";
      c.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas(c) {
      // set clear flag to 'true' to restart 'generator' loop
      this.clear = true;
      window.cancelAnimationFrame(this.frameId);
      this.iterator = 0;
      c.clearRect(0, 0, this.width, this.height);
      this.setInitialColors(c);
    }
  }, {
    key: "stopCanvas",
    value: function stopCanvas(c) {
      window.cancelAnimationFrame(this.frameId);
    }
  }, {
    key: "animate",
    value: function animate(c) {
      var _this = this;

      var self = function self() {
        return _this.animate(c);
      };

      this.frameId = requestAnimationFrame(self); // pixel per frame

      this.ppf.forEach(function () {
        var object = _this.draw(c);
      });
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var randX = _helpers.default.randNum(0, this.width);

      var randY = _helpers.default.randNum(0, this.height);

      var pixel;
      var object;
      var coords = {
        x: _helpers.default.roundToNearest(randX, this.spp),
        y: _helpers.default.roundToNearest(randY, this.spp)
      };
      var size = {
        w: this.spp,
        h: this.spp
      };
      pixel = new _Pixel.default(coords, this.palette[Math.floor(Math.random() * this.palette.length)], size);
      object = pixel.init(ctx);
      return object;
    }
  }]);

  return Canvas;
}();

exports.default = Canvas;
},{"./Pixel":"classes/Pixel.js","../helpers":"helpers.js","../resources/colors":"resources/colors.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _Canvas = _interopRequireDefault(require("./classes/Canvas"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dpiRatio = window.devicePixelRatio;
var canvas = document.querySelector("#canvas");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");

function setCanvasSize() {
  var initial;

  if (window.innerWidth <= 500) {
    initial = 420;
    canvas.height = initial;
    canvas.width = initial / 2;
    canvas.style.height = canvas.height + "px";
    canvas.style.width = canvas.width + "px";
    return 5;
  } else {
    initial = 1000;
    canvas.height = initial / 2;
    canvas.width = initial;
    canvas.style.height = initial / 3 + "px";
    canvas.style.width = initial / 1.5 + "px";
    return 10;
  }
}

function convertToPng() {
  var pngData = canvas.toDataURL("image/png");
  window.location.href = pngData.replace(/^data:image\/[^;]/, "data:application/pixel-gen");
}

var spp = setCanvasSize();
var c = canvas.getContext("2d");
c.scale(dpiRatio, dpiRatio);
var canvasObj = new _Canvas.default(c, canvas, spp);
start.addEventListener("click", function () {
  canvasObj.clearCanvas(c);
  canvasObj.init(c);
  start.innerText = "restart";
  var download = document.querySelector(".download");

  if (download) {
    download.removeEventListener("click", convertToPng);
    stop.classList.remove("download");
    stop.innerText = "stop";
  }
});
stop.addEventListener("click", function () {
  stop.classList.add("download");
  stop.innerText = "download?";
  canvasObj.stopCanvas(c);
  document.querySelector(".download").addEventListener("click", convertToPng);
});
},{"./classes/Canvas":"classes/Canvas.js","./helpers":"helpers.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59128" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/pixel-gen.e31bb0bc.map