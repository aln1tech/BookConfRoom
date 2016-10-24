'use stict';

app.register ('BookingComponent', function (ng) {
	return ng.core.Component({
		templateUrl: 'app/views/booking.html'
	}).
	Class({
		constructor: function() {
			
		},
		ngOnInit : function() { 
			console.log('employeeNo ngOnInit --->'+this.employeeNo);
		},
		bookConfRoom: function(){
			console.log('employeeNo --->'+this.employeeNo);
			console.log('bookingDate from time --->'+this.bookingFromDate);
			console.log('bookingDate to time --->'+this.bookingToDate);
			console.log('reason --->'+this.reason);  		
		}
	});

});