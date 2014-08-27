'use strict';
(function (nulpIframe) {
	nulpIframe.onload = function () {
		console.log('nulpIframe.onload');
		var nulpDocument = nulpIframe.contentWindow.document;
		var mainPartOfPage = nulpDocument.getElementById('main');
		nulpDocument.body.innerHTML = mainPartOfPage.outerHTML;
		console.log('cut end!');
	};
} (document.getElementById('nulpIframe')));