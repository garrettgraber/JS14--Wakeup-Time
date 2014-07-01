

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
	var timeJqueryObj = $('<div>').addClass('time-value');

	autoLabelsJqueryObj.append('<p class="time-label">AM</p><br><p class="time-label">PM</p>');
	autoLabelsJqueryObj.appendTo(innerShellJqueryObj);

	clockIndicatorJqueryObj.append('<div id="time-am" class="time-shift"></div>');
	clockIndicatorJqueryObj.append('<div id="time-pm" class="time-shift"></div>');
	
	timeJqueryObj.append('<p id="hours-time" class="display-time">22</p><p class="display-time">:</p><p id="minutes-time" class="display-time">10</p><p class="display-time">:</p><p id="seconds-time" class="display-time">10</p>');

	timeJqueryObj.appendTo(clockTextJqueryObj);

	clockIndicatorJqueryObj.appendTo(clockScreenJqueryObj);
	clockTextJqueryObj.appendTo(clockScreenJqueryObj);
	clockScreenJqueryObj.appendTo(innerShellJqueryObj);

	amJqueryObj.append('<p class="radio-label">AM    53 60 70 90 110 140 170</p>');
	fmJqueryObj.append('<p class="radio-label">FM     89 92 96 102 106 108</p>');

	amJqueryObj.appendTo(innerShellJqueryObj);
	fmJqueryObj.appendTo(innerShellJqueryObj);

	innerShellJqueryObj.appendTo(outerShellJqueryObj);

	return outerShellJqueryObj;
};

var timeGo = function() {

	var hours = 0;
	var minutes = 59;
	var seconds = 55;
	var amStatus = true;

	window.setInterval(function() {
		seconds += 1;
		var previousMinute = minutes;
		var previousHour = hours;
		if (seconds === 60) {
			minutes += 1;
			seconds = 0;
		}
		if (minutes === 60) {
			hours += 1;
			minutes = 0;
		}
		if (hours === 13) {
			hours = 1;
			amStatus = !amStatus;
			if (amStatus === true) {
				$('#time-pm').css('backgroundColor', 'black');
				$('#time-am').css('backgroundColor', 'red');
			}
			else {
				$('#time-am').css('backgroundColor', 'black');
				$('#time-pm').css('backgroundColor', 'red');
			}
		}
		var secondsDisplay = changeToDouble(seconds);
		var minutesDisplay = changeToDouble(minutes);
		var hoursDisplay = changeToDouble(hours);

		$('#seconds-time').text(secondsDisplay);
		if (previousMinute !== minutes) { $('#minutes-time').text(minutesDisplay) }
		if (previousHour !== hours) { $('#hours-time').text(hoursDisplay) }





		console.log('hello\n')}, 1000);

};

var changeToDouble = function(inValue) {
	var outValue;
	if (inValue < 10) {
		outValue = "0" + inValue.toString();
	}
	else {
		outValue = inValue.toString();
	}
	return outValue;
};

$(document).on('ready', function() {

	var domJqueryObjects = createClock();
	console.log(domJqueryObjects);
	domJqueryObjects.appendTo('#main-container');

	timeGo();
  
});