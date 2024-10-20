const resetBtn = document.querySelector("#reset");
const playBtn = document.querySelector("#play");
const timerEl = document.querySelector("#timer");
const root = document.documentElement;

const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
let timerInterval;

// Initial setup
timerEl.innerText = formatTime(totalSeconds);

playBtn.addEventListener("click", () => {
  playing = !playing;
  if (playing) {
    timerInterval = setInterval(run, 1000);
    playBtn.textContent = "Stop"; // Change text to "Stop" when the timer is running
  } else {
    clearInterval(timerInterval);
    playBtn.textContent = "Start"; // Change text back to "Start" when the timer is stopped
  }
});

resetBtn.addEventListener("click", resetAll);

function run() {
  if (playing) {
    currentSeconds -= 1;
    if (currentSeconds <= 0) {
      clearInterval(timerInterval);
      resetAll();
    }
    timerEl.innerText = formatTime(currentSeconds);
    root.style.setProperty("--degrees", calcDeg());
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${newSeconds.toString().padStart(2, "0")}`;
}

function calcDeg() {
  return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

function resetAll() {
  playing = false;
  clearInterval(timerInterval);
  playBtn.textContent = "Start"; // Reset to "Start" text when the timer is reset
  currentSeconds = totalSeconds;
  timerEl.innerText = formatTime(totalSeconds);
  root.style.setProperty("--degrees", "0deg");
}
