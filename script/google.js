'use strict';
(function (google) {
	var config = {
		'client_id'		: '1032024970797-9ve7tv2elvv5bk16dge56uvpqobegmpp.apps.googleusercontent.com',
    	'scope'			: 'https://www.googleapis.com/auth/calendar'
	};
	google.auth = function () {
		return new Promise(function (fulfill, reject) {
			window.gapi.auth.authorize(config, function () {
				try {
					window.gapi.client.load('calendar', 'v3', function(arg) {
						fulfill(arg);
					});
				} 
				catch(err) {
					reject(err);
				}
			});
		});
	};
	google.getCalendarList = function () {
		return new Promise(function (fulfill) {
			var request = window.gapi.client.calendar.calendarList.list();
			request.execute(function(res) {
				console.log(res.items);
			    fulfill(res.items);   
			});
		});
	};
}(window.scheduleTransfer.google));