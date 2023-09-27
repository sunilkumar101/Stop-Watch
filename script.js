//variables declaration.
let timerInterval;
let startTime = 0;
let isRunning = false;

//fetching the display, startBtn, stopBtn and resetBtn elements.
const display = document.querySelector(".display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

//formating the time as hh:mm:ss
function formatTime(ms) {
  const date = new Date(ms);
  return date.toISOString().substr(11, 8);
}

//startTimerWatch function definition.
function startTimerWatch() {
  if (!isRunning) {
    startTime = startTime || Date.now();
    console.log(startTime);
    isRunning = true;
    timerInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 1000);
    startBtn.textContent = "Pause";
  } else {
    clearInterval(timerInterval);
    isRunning = false;
    startBtn.textContent = "Resume";
  }
}

//stopTimerWatch function definition.
function stopTimerWatch() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    startBtn.textContent = "Resume";
  }
}

//resetTimerWatch function definition.
function resetTimerWatch() {
  clearInterval(timerInterval);
  startTime = 0;
  isRunning = false;
  startBtn.textContent = "Start";
  display.textContent = "00:00:00";
}

//adding event listener for startBtn, stopBtn and resetBtn.
startBtn.addEventListener("click", startTimerWatch);
stopBtn.addEventListener("click", stopTimerWatch);
resetBtn.addEventListener("click", resetTimerWatch);
