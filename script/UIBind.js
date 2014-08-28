(function (scheduleTransfer) {
	'use strict';
	var google = scheduleTransfer.google,
		nulp = scheduleTransfer.nulp,
		UI = scheduleTransfer.UI;
	UI.onGoogleAuth = google.auth;
	UI.onNulpLinkInput = nulp.setLink;
	UI.onCalendarSelect = google.setCalendar;
	UI.onNulpScheduleStartDateInput = nulp.setStartDate;
	UI.onNulpScheduleEndDateInput = nulp.setEndDate;
	UI.onStartTransfer = window.scheduleTransfer.transfer.start;
} (window.scheduleTransfer));