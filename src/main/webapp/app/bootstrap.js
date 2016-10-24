/*global app*/
'use strict';

(function (ng, app) {
  document.addEventListener('DOMContentLoaded', function () {
    ng.platform.browser.bootstrap(app.Main , [
      ng.router.ROUTER_BINDINGS,
      ng.core.bind(ng.router.LocationStrategy).toClass(ng.router.HashLocationStrategy)
    ]);
 });
})(this.ng, this.app);
