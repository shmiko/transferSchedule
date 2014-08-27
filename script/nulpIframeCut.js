'use strict';
function runYQL(command, callback){
	var callback_name = '__YQL_callback_'+(new Date()).getTime();
	window[callback_name] = callback;
	var a = document.createElement('script');
	a.src = 'http://query.yahooapis.com/v1/public/yql?q=' + 
	window.escape(command)+'&format=json&callback='+callback_name;
	a.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(a);
}

getPageJSON('http://lp.edu.ua/node/40?inst=8&group=6563&semestr=0&semest_part=1',
       function(data){console.log(data);}
);

function getPageJSON(url, callback) {
	return runYQL('select * from html where url=\''+url+'\'', callback);
}