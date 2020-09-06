// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\hero\\tablet\\milk-tablet.png":[["milk-tablet.39f8aaca.png","images/hero/tablet/milk-tablet.png"],"images/hero/tablet/milk-tablet.png"],"./..\\images\\hero\\tablet\\ice-cream-tablet.png":[["ice-cream-tablet.0c1b9f97.png","images/hero/tablet/ice-cream-tablet.png"],"images/hero/tablet/ice-cream-tablet.png"],"./..\\images\\hero\\tablet\\girl-tablet.png":[["girl-tablet.afeb3b97.png","images/hero/tablet/girl-tablet.png"],"images/hero/tablet/girl-tablet.png"],"./..\\images\\hero\\tablet\\ellipse-tablet.png":[["ellipse-tablet.d90e4d70.png","images/hero/tablet/ellipse-tablet.png"],"images/hero/tablet/ellipse-tablet.png"],"./..\\images\\hero\\tablet\\milk-tablet@2x.png":[["milk-tablet@2x.5c5eae0a.png","images/hero/tablet/milk-tablet@2x.png"],"images/hero/tablet/milk-tablet@2x.png"],"./..\\images\\hero\\tablet\\ice-cream-tablet@2x.png":[["ice-cream-tablet@2x.870b7283.png","images/hero/tablet/ice-cream-tablet@2x.png"],"images/hero/tablet/ice-cream-tablet@2x.png"],"./..\\images\\hero\\tablet\\girl-tablet@2x.png":[["girl-tablet@2x.df02fc81.png","images/hero/tablet/girl-tablet@2x.png"],"images/hero/tablet/girl-tablet@2x.png"],"./..\\images\\hero\\tablet\\ellipse-tablet@2x.png":[["ellipse-tablet@2x.400e3765.png","images/hero/tablet/ellipse-tablet@2x.png"],"images/hero/tablet/ellipse-tablet@2x.png"],"./..\\images\\hero\\mobile\\ice-cream-mobile.png":[["ice-cream-mobile.586361a9.png","images/hero/mobile/ice-cream-mobile.png"],"images/hero/mobile/ice-cream-mobile.png"],"./..\\images\\hero\\mobile\\ellipse-mobile.png":[["ellipse-mobile.5aea9cd1.png","images/hero/mobile/ellipse-mobile.png"],"images/hero/mobile/ellipse-mobile.png"],"./..\\images\\hero\\mobile\\ice-cream-mobile@2x.png":[["ice-cream-mobile@2x.e554d023.png","images/hero/mobile/ice-cream-mobile@2x.png"],"images/hero/mobile/ice-cream-mobile@2x.png"],"./..\\images\\hero\\mobile\\ellipse-mobile@2x.png":[["ellipse-mobile@2x.30244b91.png","images/hero/mobile/ellipse-mobile@2x.png"],"images/hero/mobile/ellipse-mobile@2x.png"],"./..\\images\\hero\\desktop\\milk-desktop.png":[["milk-desktop.1f150436.png","images/hero/desktop/milk-desktop.png"],"images/hero/desktop/milk-desktop.png"],"./..\\images\\hero\\desktop\\ice-cream-desktop.png":[["ice-cream-desktop.798dfea5.png","images/hero/desktop/ice-cream-desktop.png"],"images/hero/desktop/ice-cream-desktop.png"],"./..\\images\\hero\\desktop\\girl-desktop.png":[["girl-desktop.7e7e8417.png","images/hero/desktop/girl-desktop.png"],"images/hero/desktop/girl-desktop.png"],"./..\\images\\hero\\desktop\\ellipse-desktop.png":[["ellipse-desktop.d4b22f33.png","images/hero/desktop/ellipse-desktop.png"],"images/hero/desktop/ellipse-desktop.png"],"./..\\images\\hero\\desktop\\milk-desktop@2x.png":[["milk-desktop@2x.be561276.png","images/hero/desktop/milk-desktop@2x.png"],"images/hero/desktop/milk-desktop@2x.png"],"./..\\images\\hero\\desktop\\ice-cream-desktop@2x.png":[["ice-cream-desktop@2x.ad51f33c.png","images/hero/desktop/ice-cream-desktop@2x.png"],"images/hero/desktop/ice-cream-desktop@2x.png"],"./..\\images\\hero\\desktop\\girl-desktop@2x.png":[["girl-desktop@2x.c049eaa6.png","images/hero/desktop/girl-desktop@2x.png"],"images/hero/desktop/girl-desktop@2x.png"],"./..\\images\\hero\\desktop\\ellipse-desktop@2x.png":[["ellipse-desktop@2x.b52e504d.png","images/hero/desktop/ellipse-desktop@2x.png"],"images/hero/desktop/ellipse-desktop@2x.png"],"./..\\images\\products-section\\icon-arrow.png":[["icon-arrow.f3910b36.png","images/products-section/icon-arrow.png"],"images/products-section/icon-arrow.png"],"./..\\images\\products-section\\icon-arrow@2x.png":[["icon-arrow@2x.f1a85069.png","images/products-section/icon-arrow@2x.png"],"images/products-section/icon-arrow@2x.png"],"./..\\images\\reviews\\mobile\\ice-creams-mobile.png":[["ice-creams-mobile.91fe3477.png","images/reviews/mobile/ice-creams-mobile.png"],"images/reviews/mobile/ice-creams-mobile.png"],"./..\\images\\reviews\\mobile\\ice-creams-mobile@2x.png":[["ice-creams-mobile@2x.06d25897.png","images/reviews/mobile/ice-creams-mobile@2x.png"],"images/reviews/mobile/ice-creams-mobile@2x.png"],"./..\\images\\reviews\\tablet\\ice-creams-tablet.png":[["ice-creams-tablet.7d7323ae.png","images/reviews/tablet/ice-creams-tablet.png"],"images/reviews/tablet/ice-creams-tablet.png"],"./..\\images\\reviews\\tablet\\ice-creams-tablet@2x.png":[["ice-creams-tablet@2x.0dfb6289.png","images/reviews/tablet/ice-creams-tablet@2x.png"],"images/reviews/tablet/ice-creams-tablet@2x.png"],"./..\\images\\reviews\\desktop\\ice-creams-desktop.png":[["ice-creams-desktop.030e2521.png","images/reviews/desktop/ice-creams-desktop.png"],"images/reviews/desktop/ice-creams-desktop.png"],"./..\\images\\reviews\\desktop\\ice-creams-desktop@2x.png":[["ice-creams-desktop@2x.618d011f.png","images/reviews/desktop/ice-creams-desktop@2x.png"],"images/reviews/desktop/ice-creams-desktop@2x.png"],"./..\\images\\how_its_made\\button_arrow.svg":[["button_arrow.c7f09d1a.svg","images/how_its_made/button_arrow.svg"],"images/how_its_made/button_arrow.svg"],"./..\\images\\how_its_made\\milky_waves.png":[["milky_waves.5917df94.png","images/how_its_made/milky_waves.png"],"images/how_its_made/milky_waves.png"],"./..\\images\\how_its_made\\milky_waves_dp.png":[["milky_waves_dp.01f7774d.png","images/how_its_made/milky_waves_dp.png"],"images/how_its_made/milky_waves_dp.png"],"./..\\images\\reviews\\kovichki.png":[["kovichki.bfedf991.png","images/reviews/kovichki.png"],"images/reviews/kovichki.png"],"./..\\images\\reviews\\tablet\\text-underline-tablet.png":[["text-underline-tablet.8fd79f86.png","images/reviews/tablet/text-underline-tablet.png"],"images/reviews/tablet/text-underline-tablet.png"],"./..\\images\\reviews\\kovichki@2x.png":[["kovichki@2x.778d2893.png","images/reviews/kovichki@2x.png"],"images/reviews/kovichki@2x.png"],"./..\\images\\reviews\\tablet\\text-underline-tablet@2x.png":[["text-underline-tablet@2x.3c4043bc.png","images/reviews/tablet/text-underline-tablet@2x.png"],"images/reviews/tablet/text-underline-tablet@2x.png"],"./..\\images\\reviews\\mobile\\text-underline-mobile.png":[["text-underline-mobile.c28c774a.png","images/reviews/mobile/text-underline-mobile.png"],"images/reviews/mobile/text-underline-mobile.png"],"./..\\images\\reviews\\mobile\\text-underline-mobile@2x.png":[["text-underline-mobile@2x.5a1143e0.png","images/reviews/mobile/text-underline-mobile@2x.png"],"images/reviews/mobile/text-underline-mobile@2x.png"],"./..\\images\\reviews\\desktop\\text-underline-desktop.png":[["text-underline-desktop.288de581.png","images/reviews/desktop/text-underline-desktop.png"],"images/reviews/desktop/text-underline-desktop.png"],"./..\\images\\reviews\\desktop\\text-underline-desktop@2x.png":[["text-underline-desktop@2x.30279655.png","images/reviews/desktop/text-underline-desktop@2x.png"],"images/reviews/desktop/text-underline-desktop@2x.png"],"./..\\images\\png\\locations-bg@1x.png":[["locations-bg@1x.7307be55.png","images/png/locations-bg@1x.png"],"images/png/locations-bg@1x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62371" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map