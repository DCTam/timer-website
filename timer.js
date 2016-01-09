var breakLength = 0;
var sessionLength = 0;
var sessionSec = 0;
var sessionMin = 0;
var sessionHour = 0;
var seconds = 59;
var timerTotal;
var timerSec;
var timerMin;
var timerHour;

$(document).ready(function() {
	
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
	
    $('#clearBut').on('click', function(){
        stopTime();
    });
    
});

function startTimer(timeLength){
	if(timeLength >= 60){
		sessionHour = Math.floor(timeLength / 60);
	}
	sessionMin = Math.floor(timeLength % 60);
	sessionSec = Math.floor(timeLength * 60);
	
	$('#hrSpan').html(sessionHour);
    $('#minSpan').html(sessionMin);
    alert(sessionHour + " " + sessionMin + " " + sessionSec);
	updateTotal(sessionSec);
    updateSec(sessionSec);
   
}

function updateTotal(totalSec){ 
    //$('#totalSpan').html(totalSec);   
    totalSec--;
    timerTotal = setTimeout('updateTotal('+totalSec+')', 1);
    
    if(totalSec < 0){
        alert("break time");
        clearTimeout(timerSec);
        clearTimeout(timerTotal);
        
    }   
}

function updateSec(){
    $('#secSpan').html(seconds);
    seconds--;
    timerSec = setTimeout('updateSec('+seconds+')', 1);
    
    if(seconds < 0){
        updateMin();
        seconds = 59;
    }

}

function updateMin(){
    sessionMin--;
    
    if(sessionMin < 0){
        updateHour();
        sessionMin = 59;
    }
    
    $('#minSpan').html(sessionMin);
}

function updateHour(hours){
    sessionHour--;
    $('#hrSpan').html(sessionHour);
    
}


//function stopTime(){
//    clearTimeout(timerTotal);
//    clearTimeout(timerSec);
//    clearTimeout(timerMin);
//    clearTimeout(timerHour);
//} test
