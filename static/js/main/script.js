const container = document.querySelector('html');
const body = document.querySelector('body');
container.scrollLeft = 0;
container.scrollTop = 0;
let targetScrollLeft = container.scrollLeft;
let currentScrollLeft = container.scrollLeft;

const isMobile = /iPhone|iPad|iPod|Android|CriOS|FxiOS|Macintosh/i.test(navigator.userAgent);
const startScroll = () => {

  if (isMobile === false) {

  const smoothScroll = () => {
    currentScrollLeft += (targetScrollLeft - currentScrollLeft) * 0.1;
    // Set a limit to prevent scrolling beyond the container's left and right border
    currentScrollLeft = Math.max(0, Math.min(currentScrollLeft, container.scrollWidth - container.clientWidth));
    container.scrollLeft = currentScrollLeft;
    requestAnimationFrame(smoothScroll);
  };
  smoothScroll();

  container.addEventListener('wheel', (e) => {
    targetScrollLeft += e.deltaY;
    // Set a limit to prevent scrolling beyond the container's left and right border
    targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, container.scrollWidth - container.clientWidth));
  });
}
}

window.onload = () => {
  if (!isMobile) {
    startScroll();
  }
  setTimeout(() => {
    fadein();
  }, 1000);
}

const fadein = () => {
  const time = document.querySelector('.time');
  const startYear = 1853;
  const endYear = 2023;
  let numbers = "";

  for(let i = startYear; i <= endYear; i++) {
    numbers += i + "<br>";
  }

  document.getElementById("year").innerHTML = numbers;
  time.classList.add('show');
  fadeup(
    [".year p", ".start", ".dash"],
    [
      { startPx: 35, endPx: 0, millisecs: 1000},
      { startPx: 35, endPx: 0, millisecs: 1000},
      { startPx: 35, endPx: 0, millisecs: 1000},
    ],
    function() {
      setTimeout( () => {
        countdown();
      }, 1000)
    }
  );
}
let counting = false;
const countdown = () => {
  counting = true;
  const container = document.querySelector(".year p");
  const rect = container.getBoundingClientRect();
  const bottom = rect.height;
  fadeup(
    [".year p"],
    [
      { startPx: 0, endPx: -bottom + 52, millisecs: 3500,},
    ],
    function() {
      counting = false;
      setTimeout( () => {
        section1Clear();
      }, 500)
    }
  );
}
let condition = true;
let clear = false;
const section1Clear = () => {
  const container = document.querySelector(".year p");
  const rect = container.getBoundingClientRect();
  const bottom = rect.height;
  fadeup(
    [".year p", ".start", ".dash", ".logo-171 img", ".icon-scroll"],
    [
      { startPx: -bottom + 52, endPx: -bottom + 2 , millisecs: 1000,},
      { startPx: 0, endPx: -50, millisecs: 1000,},
      { startPx: 0, endPx: -50, millisecs: 1000,},
      { startPx: 60, endPx: 0, millisecs: 1500,},
      { startPx: 70, endPx: 0, millisecs: 1500,},
    ],
      function(){
        if (clear === false) {
          cleared();
          document.querySelector(".year").remove();
          document.querySelector(".text").remove();
        }
      }
  );
}

const cleared = () => {
  clear = true;
}

// Set the date we're counting down to
var countDownDate = new Date("Aug 19, 2023 08:00:00 GMT+0700").getTime()
var d = document.querySelector('.day');
var h = document.querySelector('.hour');
var m = document.querySelector('.min');
var s = document.querySelector('.sec');
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  d.innerHTML = days;
  h.innerHTML = hours;
  m.innerHTML = minutes;
  s.innerHTML = seconds;

  // If the count down is finished, write some text
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("demo").innerHTML = "EXPIRED";
  // }
}, 1000);