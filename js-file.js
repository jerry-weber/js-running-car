let x;
let m = 0;
let intervalDuration = 100; // Initial interval duration in milliseconds
let animationRunning = false;

function start() {
  if (!animationRunning) {
    animationRunning = true;
    x = setInterval(anim, intervalDuration);
    intervalDuration -= 10; // Reduce interval duration for faster animation
  }
}

function stop() {
  clearInterval(x);
  animationRunning = false;
  intervalDuration = 100; // Reset interval duration when animation stops
}

function anim() {
  if (animationRunning) {
    console.log(m);
    var pageWidth = window.innerWidth;
    if (m >= pageWidth) {
      clearInterval(x);
      m = 0;
      intervalDuration = 100; // Reset interval duration after animation completes
    } else {
      m = m + 5;
      document.getElementById("im").style.visibility = "visible";
      var target = document.getElementById("im");
      target.style.marginLeft = m + "px";
    }
  }
}

// Additional function to reset animation
function resetAnimation() {
  clearInterval(x);
  m = 0;
  animationRunning = false;
  intervalDuration = 100; // Reset interval duration when animation resets
  document.getElementById("im").style.visibility = "hidden";
}
