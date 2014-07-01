

var createClock = function() {

	var outerShellJqueryObj = $('<div>').addClass('outer-shell');
	var innerShellJqueryObj = $('<div>').addClass('inner-shell');
	var autoLabelsJqueryObj = $('<div>').addClass('auto-label');
	var clockScreenJqueryObj = $('<div>').addClass('clock-screen');
	var clockIndicatorJqueryObj = $('<div>').addClass('clock-indicator');
	var clockTextJqueryObj = $('<div>').addClass('clock-text');
	var amJqueryObj = $('<div>').addClass('am-label');
	amJqueryObj.addClass('bottom-label');
	var fmJqueryObj = $('<div>').addClass('fm-label');
	fmJqueryObj.addClass('bottom-label');

	autoLabelsJqueryObj.append('<p class="time-label">AM</p><br><p class="time-label">PM</p>');
	autoLabelsJqueryObj.appendTo(innerShellJqueryObj);

	clockIndicatorJqueryObj.append('<div id="time-am" class="time-shift"></div>');
	clockIndicatorJqueryObj.append('<div id="time-fm" class="time-shift"></div>');

	clockIndicatorJqueryObj.appendTo(clockScreenJqueryObj);
	clockTextJqueryObj.appendTo(clockScreenJqueryObj);
	clockScreenJqueryObj.appendTo(innerShellJqueryObj);

	amJqueryObj.appendTo(innerShellJqueryObj);
	fmJqueryObj.appendTo(innerShellJqueryObj);

	innerShellJqueryObj.appendTo(outerShellJqueryObj);

	return outerShellJqueryObj;

};



$(document).on('ready', function() {

	var domJqueryObjects = createClock();
	console.log(domJqueryObjects);
	domJqueryObjects.appendTo('#main-container');
  
});