'use strict';
(function (google) {
	google.auth = function () {
		return new Promise(function (fulfill, reject) {
			window.gapi.auth.authorize(google.config, function () {
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
				var calendars = res.items.map(function (el) {
					return {
						id : el.id,
						name : el.summary,
					};
				});
			    fulfill(calendars);   
			});
		});
	};
	var calendarId = null;
	google.setCalendar = function (calId) {
		calendarId = calId;
		console.log('set id: ', calendarId);
	}
}(window.scheduleTransfer.google));