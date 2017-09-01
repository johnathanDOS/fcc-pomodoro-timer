var timeDisplay = document.getElementById('timer-display');

var workTime;
var breakTime;
var timeRemaining;
var working;

//create date object from integer input and return as HR:MIN:SEC string
function getTime(userInput) {
  var time = new Date(null)
  time.setMinutes(userInput, 0)
  return time;
}

//work time countdown
function workCountdown() {
  if (workTime == undefined) {
    workTime = getTime(document.getElementById('work-time').value)
  }
  workTime.setSeconds(workTime.getSeconds() - 1)
  timeRemaining = workTime.toISOString().substr(11, 8)
  var switchValue = getTime("0");
  if (workTime.toISOString().substr(11, 8) === switchValue.toISOString().substr(11, 8)) {
    working = false;
  } else {
    working = true;
  }
  if (working = true) {
    timeDisplay.innerHTML = timeRemaining
  }
  console.log(working)
}

//break time countdown
function breakCountdown() {
  if (breakTime == undefined) {
    breakTime = getTime(document.getElementById('break-time').value)
  }
  breakTime.setSeconds(breakTime.getSeconds() - 1)
  timeRemaining = breakTime.toISOString().substr(11, 8)
  var switchValue = getTime("0");
  if (workTime.toISOString().substr(11, 8) === switchValue.toISOString().substr(11, 8)) {
    working = true;
  } else {
    working = false;
  }
  if (working = true) {
    timeDisplay.innerHTML = timeRemaining
  }
  console.log(working)
}

//primary countdown function
function runTimer() {
  while (1 < 2) {
    if (working) {
      return workCountdown();
    } if (!working) {
      return breakCountdown();
    }
  }
}

working = true;
setInterval(runTimer, 1000)
