document.getElementById("clock1").addEventListener("click", clock());

var clearClock
var eClock
var hClock
var pClock
var mClock
var cClock

function clock(){

var today = new Date();
var currentHour = today.getHours();
var currentMinutes = today.getMinutes();
var currentSeconds = today.getSeconds();
var timeOfDay

	if (currentHour < 12){
		timeOfDay = "AM"
	} else {
		timeOfDay = "PM"
	}

	if (currentHour == 0){
		currentHour = 12
	}

	if (currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}

	if (currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

	if (currentHour > 12){
		currentHour = currentHour - 12;
		}

var currentTime = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
document.getElementById("clock").firstChild.nodeValue = currentTime;
clearClock = setTimeout('clock()',1000);
}

function hawaiian(){
	var today = new Date();
	var currentHour = today.getHours()-2;
	var currentMinutes = today.getMinutes();
	var currentSeconds = today.getSeconds();
	var timeOfDay

	if (currentHour < 12){
		timeOfDay = "AM"
	} else {
		timeOfDay = "PM"
	}

	if (currentHour == 0){
		currentHour = 12
	}

	if (currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}

	if (currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

	if (currentHour == -1){
		currentHour = 23;
	}

	if (currentHour == -2){
		currentHour == 22;
	}

	if (currentHour > 12){
		currentHour = currentHour - 12;
		}

var currentTime = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
document.getElementById("clock").firstChild.nodeValue = currentTime;
clearTimeout(cClock);
clearTimeout(pClock);
clearTimeout(mClock);
clearTimeout(eClock);
clearTimeout(clearClock);
hClock= setTimeout('hawaiian()', 1000);
}

function pacific(){
	var today = new Date();
	var currentHour = today.getHours();
	var currentMinutes = today.getMinutes();
	var currentSeconds = today.getSeconds();
	var timeOfDay

	if (currentHour < 12){
		timeOfDay = "AM"
	} else {
		timeOfDay = "PM"
	}

	if (currentHour == 0){
		currentHour = 12
	}

	if (currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}

	if (currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

	if (currentHour > 12){
		currentHour = currentHour - 12;
		}

var currentTime = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
document.getElementById("clock").firstChild.nodeValue = currentTime;
clearTimeout(hClock);
clearTimeout(cClock);
clearTimeout(mClock);
clearTimeout(eClock);
clearTimeout(clearClock);
pClock= setTimeout('pacific()', 1000);
}

function mountain(){
	var today = new Date();
	var currentHour = today.getHours()+1;
	var currentMinutes = today.getMinutes();
	var currentSeconds = today.getSeconds();
	var timeOfDay

	if (currentHour < 12){
		timeOfDay = "AM"
	} else {
		timeOfDay = "PM"
	}

	if (currentHour == 0){
		currentHour = 12
	}

	if (currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}

	if (currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

	if (currentHour > 12){
		currentHour = currentHour - 12;
		}

var currentTime = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
document.getElementById("clock").firstChild.nodeValue = currentTime;
clearTimeout(hClock);
clearTimeout(pClock);
clearTimeout(cClock);
clearTimeout(eClock);
clearTimeout(clearClock);
mClock = setTimeout('mountain()', 1000);
}

function central(){
		var today = new Date();
	var currentHour = today.getHours()+2;
	var currentMinutes = today.getMinutes();
	var currentSeconds = today.getSeconds();
	var timeOfDay

	if (currentHour < 12){
		timeOfDay = "AM"
	} else {
		timeOfDay = "PM"
	}

	if (currentHour == 0){
		currentHour = 12
	}

	if (currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}

	if (currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

	if (currentHour > 12){
		currentHour = currentHour - 12;
		}

var currentTime = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
document.getElementById("clock").firstChild.nodeValue = currentTime;
clearTimeout(hClock);
clearTimeout(pClock);
clearTimeout(mClock);
clearTimeout(eClock);
clearTimeout(clearClock);
cClock = setTimeout('central()', 1000);
}

function eastern(){

	var today = new Date();
	var currentHour = today.getHours()+3;
	var currentMinutes = today.getMinutes();
	var currentSeconds = today.getSeconds();
	var timeOfDay

	if (currentHour < 12){
		timeOfDay = "AM"
	} else {
		timeOfDay = "PM"
	}

	if (currentHour == 0){
		currentHour = 12
	}

	if (currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}

	if (currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

	if (currentHour > 12){
		currentHour = currentHour - 12;
		}

var currentTime = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
document.getElementById("clock").firstChild.nodeValue = currentTime;
clearTimeout(hClock);
clearTimeout(pClock);
clearTimeout(mClock);
clearTimeout(cClock);
clearTimeout(clearClock);
eClock = setTimeout('eastern()', 1000);
}






