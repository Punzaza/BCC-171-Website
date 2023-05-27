function easeInOut(t) {
  if (t < 0.5) {
    return 8 * Math.pow(t, 4);
  } else {
    t = 1 - t; // reverse progress for second half
    return 1 - 8 * Math.pow(t, 4);
  }
}

function isContainerTouchingScreenBorder(containerNames) {
  containerNames.forEach(containerName => {
    const container = document.querySelector(`.${containerName}`);
    const containerRect = container.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate the center of the container
    const containerCenterWidth = containerRect.left + (containerRect.width / 2);
    const containerCenterHeight = containerRect.top + (containerRect.height / 2);

    if (
      (containerCenterWidth <= 0 || containerCenterWidth >= viewportWidth ||
        containerCenterHeight <= 0 || containerCenterHeight >= viewportHeight) &&
      !container.classList.contains('hidden')
    ) {
      container.classList.remove('show');
      container.classList.add('hidden');
    } else if (
      containerCenterWidth > 0 && containerCenterWidth < viewportWidth &&
      containerCenterHeight > 0 && containerCenterHeight < viewportHeight &&
      container.classList.contains('hidden')
    ) {
      container.classList.remove('hidden');
      container.classList.add('show');
    }
  });
}

window.addEventListener('scroll', () => {
  const containerNames = ['logo-wrapper', 'scroll-wrapper', 'time', 'countdown-wrapper'];
  isContainerTouchingScreenBorder(containerNames);
});


let playing = false;
function fadeup(elements, options, after) {
  var classList = [];
  var marginStarts = [];
  var marginEnds = [];
  var durations = [];
  // populate arrays for each element
  for (var i = 0; i < elements.length; i++) {
    var className = document.querySelector(elements[i]);
    classList.push(className);
    marginStarts.push(options[i].startPx);
    marginEnds.push(options[i].endPx);
    durations.push(options[i].millisecs);
  }

  var startTimes = new Array(elements.length).fill(null); // initialize start times for each element
  var maxDuration = Math.max.apply(null, durations); // find the maximum duration
  function animate(currentTime) {
    for (var i = 0; i < classList.length; i++) {
      if (!startTimes[i]) {
        startTimes[i] = currentTime;
      }
      var elapsedTime = currentTime - startTimes[i];
      var progress = Math.min(elapsedTime / durations[i], 1); // calculate progress for this element's duration
      var easeProgress = easeInOut(progress);

      var currentMargin = marginStarts[i] + (marginEnds[i] - marginStarts[i]) * easeProgress;
      classList[i].style.marginTop = `${currentMargin}%`;
    }

    if (currentTime - startTimes[0] < maxDuration) { // check if any animations are still running
      playing = true;
      window.requestAnimationFrame(animate);
    } else if (after && typeof after === 'function') { // call after() only when it's a function
      playing = false;
      after();
    }
  }

  // function handleResize() {
  //   if (!isMobile) {
  //     if (!animationReset && playing === true) {
  //       startTimes.fill(null); // Reset start times on resize
  //       animationReset = true; // Set a flag to indicate that animation has been reset
  //       window.requestAnimationFrame(animate); // Restart the animation after resizing
  //     }
  //   } else {
  //     animationReset = false; // Reset the animation reset flag
  //   }
  // }
  //

  window.requestAnimationFrame(animate);

  function debounce(func, wait) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, arguments);
      }, wait);
    };
  }

  window.addEventListener('resize', debounce(() => {
    if (!isMobile) {
      if (counting === true && playing === true) {
        window.cancelAnimationFrame(animate);
        startTimes.fill(null);
        countdown();
      }
    }
  }, 250));


}
