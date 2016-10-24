'use stict';

(function (ng, app) {

ng.router.RouteConfig([
	{ path: '/home', component: app.HomeComponent, as: 'Home', useAsDefault: true},
	{ path: '/booking', component: app.BookingComponent, as: 'Booking'}
])(app.Main);

})(window.ng, window.app);