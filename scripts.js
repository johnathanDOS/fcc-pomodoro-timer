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
    workTime = getTime(document.getElementById('work-time').innerHTML)
  }
  workTime.setSeconds(workTime.getSeconds() - 1)
  timeRemaining = workTime.toISOString().substr(11, 8)
  timeDisplay.innerHTML = timeRemaining
  if (timeDisplay.innerHTML == "00:00:00") {
    working = false;
  } else {
    working = true;
  }
  if (working == false) {
    workTime = getTime(document.getElementById('work-time').innerHTMl)
  }
  console.log("working")
}

//break time countdown
function breakCountdown() {
  if (breakTime == undefined) {
    breakTime = getTime(document.getElementById('break-time').innerHTML)
  }
  breakTime.setSeconds(breakTime.getSeconds() - 1)
  timeRemaining = breakTime.toISOString().substr(11, 8)
  timeDisplay.innerHTML = timeRemaining
  if (timeDisplay.innerHTML == "00:00:00") {
    working = true;
  } else {
    working = false;
  }
  if (working == true) {
    breakTime = getTime(document.getElementById('break-time').innerHTML)
  }
  console.log("taking a break")
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

document.getElementById('break-id-minus').addEventListener("click", function () {
  if (document.getElementById('break-time').innerHTML > 1) {
    document.getElementById('break-time').innerHTML -= 1;
  }
})

document.getElementById('break-id-plus').addEventListener("click", function () {
  document.getElementById('break-time').innerHTML =
  parseInt(document.getElementById('break-time').innerHTML, 10) + 1;
})

document.getElementById('work-id-minus').addEventListener("click", function () {
  if (document.getElementById('work-time').innerHTML > 1) {
    document.getElementById('work-time').innerHTML -= 1;
  }
})

document.getElementById('work-id-plus').addEventListener("click", function () {
  document.getElementById('work-time').innerHTML =
  parseInt(document.getElementById('work-time').innerHTML, 10) + 1;
})

document.getElementById('start-btn').addEventListener("click", function () {
  working = true;
  setInterval(runTimer, 1000)
})
