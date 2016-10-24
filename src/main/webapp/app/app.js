/*global app*/
'use strict';

app.register ('Main',function (ng) {
  return ng.core.

  Component({
    selector: 'my-app',
    templateUrl: 'app/views/main.html',
    directives: [ng.router.ROUTER_DIRECTIVES]
  }).
  Class({
    constructor: function () {}
  });

});
