'use strict';

(function (root) {
  //TODO: Enable this in production
  //root.ng.core.enableProdMode();
  
  root.app = root.app || {};
  root.app.register = function (name, fn) {
    var value = fn(root.ng);
    value.overriddenName = name;
    root.app[name] = value;
  }
})(window);
