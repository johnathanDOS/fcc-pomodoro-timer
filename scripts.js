var timeDisplay = document.getElementById('timer-display');
timeDisplay.innerHTML = document.getElementById('work-time').innerHTML
var workTime;
var breakTime;
var timeRemaining;
var working;
let timer = null;
var tone = new Audio('./sounds/tone.mp3');

//create date object from integer input and return as HR:MIN:SEC string
function getTime(userInput) {
  var time = new Date(null)
  time.setMinutes(userInput, 0)
  return time;
}

//work time countdown
function workCountdown() {
  time = document.getElementById('work-time').innerHTML * 60;
  if (workTime == undefined) {
    workTime = getTime(document.getElementById('work-time').innerHTML)
  }
  workTime.setSeconds(workTime.getSeconds() - 1)
  timeRemaining = workTime.toISOString().substr(14, 5)
  timeDisplay.innerHTML = timeRemaining
  if (timeDisplay.innerHTML == "00:00") {
    tone.play();
    working = false;
  } else {
    working = true;
    $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
    i++
    console.log(time)
  }
  if (working == false) {
    workTime = getTime(document.getElementById('work-time').innerHTML)
    i=0;
  }
  console.log("working")
  document.getElementById('circle').style.stroke = "red"
}

//break time countdown
function breakCountdown() {
  time = document.getElementById('break-time').innerHTML * 60;
  if (breakTime == undefined) {
    breakTime = getTime(document.getElementById('break-time').innerHTML)
  }
  breakTime.setSeconds(breakTime.getSeconds() - 1)
  timeRemaining = breakTime.toISOString().substr(14, 5)
  timeDisplay.innerHTML = timeRemaining
  if (timeDisplay.innerHTML == "00:00") {
    working = true;
    tone.play();
  } else {
    working = false;
    $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
    i++
    console.log(time)
  }
  if (working == true) {
    breakTime = getTime(document.getElementById('break-time').innerHTML)
    i=0
  }
  console.log("taking a break")
  document.getElementById('circle').style.stroke = "blue"
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
document.getElementById('start-btn').addEventListener("click", function () {
  if (timer) {
    clearInterval(timer);
  }
  working = true;
  timer = setInterval(runTimer, 1000)
})

document.getElementById('reset-btn').addEventListener("click", function() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    console.log(timer);
  }
  timeDisplay.innerHTML = document.getElementById('work-time').innerHTML;
  workTime = null;
  breakTime = null;
  i = 0;
  $(".circle_animation").css('stroke-dashoffset', initialOffset);
})

var time;
var initialOffset = '440';
var i = 0
