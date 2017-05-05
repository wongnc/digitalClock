// Get users time and timezone based on UTC
var today2 = new Date();
var test = today2.getTimezoneOffset()/60;
//offet of 0 bc that is assuming user is in current timezone
var offset = 0;

function clock(){
var today = new Date();
var currentHour = today.getHours() + offset;
var currentMinutes = today.getMinutes();
var currentSeconds = today.getSeconds();
var timeOfDay

	//to check time if you need to go back a day from midnight
    if (currentHour < 0)
	{
		currentHour = currentHour + 24;
	}
	
	if (currentHour < 12){
		timeOfDay = "AM"
	} else {
		timeOfDay = "PM"
	}

	//counting for special condition if moving forward in time past 12am
	if (currentHour > 12){
		currentHour = currentHour - 12;
		if (currentHour > 12)
		{
		  currentHour = currentHour - 12;	
		  timeOfDay = "AM"
		}
	}

	if (currentHour == 0){
		currentHour = 12;
	}
		
	if (currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}

	if (currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}
	
var currentTime = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
//updating the clock id each second (node.value)
document.getElementById("clock").firstChild.nodeValue = currentTime;

}

// Offset based off current timezone utc
function hawaiian(){
offset = test - 10;
}
function pacific(){
offset = test - 8;
}
function mountain(){
offset = test - 7;
}
function central(){
offset = test - 6;
}
function eastern(){
offset = test - 5;
}
