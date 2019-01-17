/**
 * Simple Pomodoro App JS Source Code
 * Author: Sani Kamal
 * Date:16-01-2019
 */
// Global Variables

var workClicks = 25;
var breakClicks = 5;
var workDisplay = document.getElementById('work-display');
var breakDisplay = document.getElementById('break-display');
var count = 0;
var workSession;
var breakSession;

// increase work time
var increaseWork = document.getElementById('addWorkButton');
increaseWork.addEventListener("click", function() {
    workClicks++;
    workDisplay.innerHTML = workClicks;
}, false);

// decrease work time
var decreaseWork = document.getElementById('minusWorkButton');
decreaseWork.addEventListener("click", function() {
    workClicks--;
    workDisplay.innerHTML = workClicks;
    if (workClicks < 1) {
        workClicks = 1;
        workDisplay.innerHTML = workClicks;

    }
}, false);

// increase break time
var increaseBreak = document.getElementById('addBreakButton');
increaseBreak.addEventListener("click", function() {
    breakClicks++;
    breakDisplay.innerHTML = breakClicks;
}, false);

// decrease break time
var decreaseBreak = document.getElementById('minusBreakButton');
decreaseBreak.addEventListener("click", function() {
    breakClicks--;
    breakDisplay.innerHTML = breakClicks;
    if (breakClicks < 1) {
        breakDisplay.innerHTML = 1;

    }
}, false);


// function start
function start() {
    count = workClicks * 60;
    // alert(count);
    workSession = setInterval(workCountDown, 1000);
}

// function workCountDown
function workCountDown() {
    // alert('Hi...');
    var seconds = count;
    var hours = Math.floor(seconds / 3600);
    // seconds = seconds - (hours * 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    document.getElementById("showtime").innerHTML = ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2);
    count--;
    if (count < 0) {
        clearInterval(workSession);
        workSession = null;
        document.getElementById('showtime').innerHTML = "Starting Break";
        var breakDelay = setTimeout(function() {
            startBreak();
        }, 3000);
    }
}

// function pause
function pause() {
    clearInterval(workSession);
    clearInterval(breakSession);
    workSession = null;
    breakSession = null;
}


//function resume
function resume() {
    workSession = setInterval(workCountDown, 1000);
}

// funtion reset

function reset() {
    if (workSession) {
        clearInterval(workSession);
        workSession = null;
    } else {
        clearInterval(breakSession);
        breakSession = null;
    }
    document.getElementById('showtime').innerHTML = "";
    document.getElementById('timer-panel').style.backgroundColor = "#fc5d66";
    document.getElementById("pause").disabled = false;
    document.getElementById("resume").disabled = false;
}


//function startBreak

function startBreak() {
    count = breakClicks * 60;
    breakSession = setInterval(breakCountDown, 1000);
    document.getElementById("resume").disabled = true;
    document.getElementById("pause").disabled = true;

}

//function breakCountDown
function breakCountDown() {
    document.getElementById("timer-panel").style.backgroundColor = "lightblue";
    var seconds = count;
    var hours = Math.floor(seconds / 3600);
    // seconds = seconds - (hours * 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    document.getElementById("showtime").innerHTML = ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2);
    count--;
    if (count < 0) {
        clearInterval(breakSession);
        breakSession = null;
        var message = setTimeout(function() {
            document.getElementById("showtime").innerHTML = "Congratulations Pomodoro Completed!";
        }, 3000);
    }
}