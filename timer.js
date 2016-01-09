var breakLength = 0;
var sessionLength = 0;
var sessionSec = 0;
var sessionMin = 0;
var sessionHour = 0;

$(document).ready(function(){
	
	$('#breakMinus').on('click', function(){
		breakLength = +$('#breakNum').html() - 1;
		if(breakLength > 0){
			$('#breakNum').empty;
			$('#breakNum').html(breakLength);
		}
	});
	
	$('#breakPlus').on('click', function(){
		breakLength = +$('#breakNum').html() + 1;
		$('#breakNum').empty;
		$('#breakNum').html(breakLength);
	});
	
	$('#sessionMinus').on('click', function(){
		sessionLength = +$('#sessionNum').html() - 1;
		if(sessionLength > 0){
			$('#sessionNum').empty();
			$('#sessionNum').html(sessionLength);
		}
	});
	
	$('#sessionPlus').on('click', function(){
		sessionLength = +$('#sessionNum').html() + 1;
		$('#sessionNum').empty();
		$('#sessionNum').html(sessionLength);
	});

	$('#startBut').on('click', function(){
		startTimer(+$('#sessionNum').html());
	});	
	
});

function startTimer(timeLength){
	if(timeLength >= 60){
		sessionHour = Math.floor(timeLength / 60);
	}
	sessionMin = Math.floor(timeLength % 60);
	sessionSec = Math.floor(timeLength * 60);
	
	//setInterval(function(print), 1000);
	
	$('#timerOutput').html(sessionHour + ":" + sessionMin + ":" + sessionSec);
	alert(sessionHour + " " + sessionMin + " " + sessionSec);
	
}

//fuction print(){
//	$('#timerOutput').html(sessionHour + ":" + sessionMin + ":" + sessionSec);
//	//sessionSec -= 1;
//}
//
//function decNum(num){
//	num -= 1;
//}
