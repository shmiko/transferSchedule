'use strict';
//iterface of all objects in program
window.scheduleTransfer = {
	UI : {
		onGoogleAuth : undefined,
		onNulpLinkInput : undefined,
		onCalendarSelect : undefined,
		onNulpScheduleStartDateInput : undefined,
		onNulpScheduleEndDateInput : undefined,
		onStartTransfer : undefined
	},
	google : {
		auth : undefined,
		addEvent : undefined,
		setCalendar : undefined,
	},
	nulp : {
		setLink : undefined,
		setStartDate : undefined,
		setEndDate : undefined,
	},
	transfer : {
		start : undefined, 
	}
};