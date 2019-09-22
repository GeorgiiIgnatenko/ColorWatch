const clock = document.getElementById('clock');
const color = document.getElementById('color');
let currentColor;
let currentTime;


function changeColor() {
  let time = new Date();
  let hours = time.getHours().toString();
  let mins = time.getMinutes().toString();
  let sec = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }
  if (mins.length < 2) {
    mins = '0' + mins;
  }
  if (sec.length < 2) {
    sec = '0' + sec;
  }


  currentTime = `${hours}:${mins}:${sec}`;
  currentColor = `#${hours}${mins}${sec}`;
  color.textContent = currentColor;
  clock.textContent = currentTime;

  document.body.style.backgroundColor = currentColor;

}


setInterval(hexoClock, 1000);