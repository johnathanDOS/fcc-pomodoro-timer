var timeDisplay = document.getElementById('timer-display');
timeDisplay.innerHTML = document.getElementById('work-time').innerHTML
var workTime;
var breakTime;
var timeRemaining;
var working;
let timer = null;

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
  timeRemaining = workTime.toISOString().substr(14, 5)
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
  timeRemaining = breakTime.toISOString().substr(14, 5)
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


document.getElementById('break-id-minus').addEventListener("click", function () {
  if (document.getElementById('break-time').innerHTML > 1) {
    document.getElementById('break-time').innerHTML -= 1;
  }
})

document.getElementById('break-id-plus').addEventListener("click", function () {
  if (document.getElementById('break-time').innerHTML < 60) {
    document.getElementById('break-time').innerHTML =
    parseInt(document.getElementById('break-time').innerHTML, 10) + 1;
  }
})

document.getElementById('work-id-minus').addEventListener("click", function () {
  if (document.getElementById('work-time').innerHTML > 1) {
    document.getElementById('work-time').innerHTML -= 1;
  }
  if (!timer) {
    timeDisplay.innerHTML = document.getElementById('work-time').innerHTML
  }
})

document.getElementById('work-id-plus').addEventListener("click", function () {
  if (document.getElementById('work-time').innerHTML < 60) {
    document.getElementById('work-time').innerHTML =
    parseInt(document.getElementById('work-time').innerHTML, 10) + 1;
  }
  if (!timer) {
    timeDisplay.innerHTML = document.getElementById('work-time').innerHTML
  }
})

document.getElementById('start-btn').addEventListener("click", function () {
  if (timer) {
    clearInterval(timer);
  }
  working = true;
  timer = setInterval(runTimer, 1000)
})

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

document.getElementById('reset-btn').addEventListener("click", function() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    console.log(timer);
  }
  timeDisplay.innerHTML = document.getElementById('work-time').innerHTML;
  workTime = getTime(document.getElementById('work-time').innerHTML);
  breakTime = getTime(document.getElementById('break-time').innerHTML);
})

// circles
var time = 60;
var initialOffset = '440';
var i = 1

/* Need initial run as interval hasn't yet occured... */
$('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));

var interval = setInterval(function() {
		$('h2').text(i);
		if (i == time) {
      clearInterval(interval);
			return;
    }
    $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
    i++;
}, 1000);
