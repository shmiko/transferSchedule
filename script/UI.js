'use strict';
window.scheduleTransfer.UI._inputTests = {

};
(function (UI) {
	var googleBtn = document.getElementById('googleBtn'),
		nulpLinkInput = document.getElementsByName('nulpLink')[0],
		dateInputs = document.getElementsByName('dateInput'),
		startDateInput = dateInputs[0],
		endDateInput = dateInputs[1],
		transferBtn = document.getElementById('start');
	googleBtn.onclick = function () {
		UI.onGoogleAuth();
	};
	nulpLinkInput.onchange = function () {
		UI.onNulpLinkInput(nulpLinkInput.value);
	};
	startDateInput.onchange = function () {
		UI.onNulpScheduleStartDateInput(startDateInput.value);
	};
	endDateInput.onchange = function () {
		UI.onNulpScheduleEndDateInput(endDateInput.value);
	};
	transferBtn.onclick = function () {
		UI.onStartTransfer();
	};
	UI.setCalendarList = function (calendarList) {
		var optionsHtml = '';
		calendarList.forEach(function (calendar) {
			optionsHtml += '<option value=' + calendar.id + '>' + calendar.name + '</option>';
		});
	}
} (window.scheduleTransfer.UI));