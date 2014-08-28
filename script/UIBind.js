(function (scheduleTransfer) {
	'use strict';
	var google = scheduleTransfer.google,
		nulp = scheduleTransfer.nulp,
		UI = scheduleTransfer.UI;
	UI.onGoogleAuth = function () {
		google.auth().then(function () {
			google.getCalendarList().then(UI.setCalendarList);
		}).catch(function (err) {
			console.error(err);
		});
	}
	UI.onNulpLinkInput = nulp.setLink;
	UI.onCalendarSelect = google.setCalendar;
	UI.onNulpScheduleStartDateInput = nulp.setStartDate;
	UI.onNulpScheduleEndDateInput = nulp.setEndDate;
	UI.onStartTransfer = window.scheduleTransfer.transfer.start;
} (window.scheduleTransfer));