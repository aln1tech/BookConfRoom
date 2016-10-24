/*global app*/
'use stict';

app.register ('HomeComponent', function (ng) {
  return ng.core.Component({
    template: '<br/><center><div><h3>Home Page of this application! </h3></div></center>',
  }).
  Class({
  	constructor:function () {
  	  this.name ="world";
  	}
  });

});