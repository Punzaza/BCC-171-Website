let initialTimeDifference = null;

const start = Date.UTC(2012, 4, 14, 0, 30, 0); // 14 May 2012 07:30:00 GMT+7
const end = Date.UTC(2024, 1, 24, 1, 0, 0); // 24 Feb 2024 08:00:00 GMT+7 (USE THIS!)
// const end = Date.UTC(2024, 1, 23, 17, 25, 0); // 24 Feb 2024 08:00:00 GMT+7

async function calculateTime() {
    let now;

    if (initialTimeDifference === null) {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/GMT');
        const data = await response.json();
        now = new Date(data.utc_datetime).getTime();
        initialTimeDifference = Date.now() - now;
    } else {
        now = Date.now() - initialTimeDifference;
    }

    const elapsed = now - start;
    const until = end - now;

    return [elapsed, until];
}

async function update() {
    const [elapsed, until] = await calculateTime();
    const total = end - start;
    const percentage = (elapsed / total) * 100;
    const live = document.getElementById("bacca-live");

    if (percentage > 100) {
        document.getElementById('percentage').innerHTML = "100" + "%";
        document.querySelector('#progress-bar div').style.width = "100" + "%";
        document.getElementById('days').innerHTML = "";
        document.getElementById('hours').innerHTML = "";
        document.getElementById('minutes').innerHTML = "";
        document.getElementById('seconds').innerHTML = "";
        live.style.visibility = "visible";
        return;
    }

    document.getElementById('percentage').innerHTML = percentage.toFixed(8) + "%";
    document.querySelector('#progress-bar div').style.width = percentage.toFixed(8) + "%";

    const days = Math.floor(until / (24 * 60 * 60 * 1000));
    const hours = Math.floor((until % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((until % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((until % (60 * 1000)) / 1000);

    document.getElementById('days').innerHTML = days + " DAYS";
    document.getElementById('hours').innerHTML = hours + " HOURS";
    document.getElementById('minutes').innerHTML = minutes + " MINUTES";
    document.getElementById('seconds').innerHTML = seconds + " SECONDS";

    setTimeout(update, 0);
}

window.onload = async function() {
    await update(); // initial call
    document.querySelector('.countdown').style.visibility = 'visible';
    document.getElementById('percentage').style.visibility = 'visible';
    document.getElementById('progress-bar').style.visibility = 'visible';
    document.querySelector('.footer').style.visibility = 'visible';
    const music_length = document.getElementById('music-duration');
    var music_minutes = Math.floor(audio.duration / 60);
    var music_seconds = Math.floor(audio.duration % 60);
    music_length.innerHTML = music_minutes + ":" + music_seconds;
}

function progress_focus() {
    const circle = document.getElementById('circle');
    const progress = document.querySelector('.progress');
    circle.style.opacity = "1";
    progress.style.backgroundColor = "#FFFFFF";
}

function progress_unfocus() {
    const circle = document.getElementById('circle');
    const progress = document.querySelector('.progress');
    circle.style.opacity = "0";
    progress.style.backgroundColor = "#FFFFFF";
}

document.addEventListener('DOMContentLoaded', function() {

    window.matchMedia("(orientation: landscape)").addEventListener("change", e => {
        const landscape = e.matches;
    
        if (landscape) {
            function isMobile() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            }
            var element = document.getElementById("overlay");
            if (isMobile()) {
                element.style.visibility = "visible";
            }
        } else {
            element.style.visiblity = "hidden";
        }
    });

    window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
        const landscape = e.matches;
    
        if (landscape) {
            function isMobile() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            }
            var element = document.getElementById("overlay");
            if (isMobile()) {
                element.style.visibility = "hidden";
            }
        } else {
            element.style.visiblity = "visible";
        }
    });

    const audio = document.getElementById('audio');
    var adjusting = false;
    const playPauseBtn = document.getElementById('play-pause-btn');
    const back = document.getElementById('backwards');
    const forw = document.getElementById('forwards');

    const progressBar = document.getElementById('music-bar');
    const progressContainer = document.getElementById('mobile-adjust');
    const circle = document.getElementById('circle');
    const music_current = document.getElementById('music-time');
    const music_bottom = document.getElementById('music-bottom');

    let isPlaying = false;
    audio.volume = 0.4;

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
        audio.pause();
        // playPauseBtn.textContent = 'Play';
        } else {
        audio.play();
        // playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progress = (currentTime / duration) * 100;
        if (!adjusting) {
        progressBar.style.width = progress + '%';
        circle.style.left = progress + '%';
        var current_minutes = Math.floor(audio.currentTime / 60);
        var current_seconds = Math.floor(audio.currentTime % 60);
        if (current_seconds >= 10) {
            music_current.innerHTML = current_minutes + ":" + current_seconds;
        }
        else {
            music_current.innerHTML = current_minutes + ":0" + current_seconds;
        }
        }
    });

    audio.addEventListener('ended', () => {
        playPauseBtn.textContent = 'Play';
        isPlaying = false;
    });

    let isDragging = false;

    progressContainer.addEventListener('mousedown', () => {
        isDragging = true;
    });

    progressContainer.addEventListener('touchstart', () => {
        isDragging = true;
    });

    back.addEventListener('mousedown', () => {
        audio.currentTime = 0;
    });

    back.addEventListener('touchstart', () => {
        audio.currentTime = 0;
    });

    forw.addEventListener('mousedown', () => {
        audio.currentTime = audio.duration;
    });

    forw.addEventListener('touchstart', () => {
        audio.currentTime = audio.duration;
    });

    document.addEventListener('mouseup', (e) => {
        if (isDragging) {
        const clickX = e.clientX - progressContainer.getBoundingClientRect().left;
        const percent = (clickX / progressContainer.clientWidth) * 100;
        const duration = audio.duration;
        audio.currentTime = (percent / 100) * duration;
        isDragging = false;
        }
        adjusting = false;
    });

    document.addEventListener('touchend', (e) => {
        if (isDragging) {
        const clickX = e.changedTouches[0].clientX - progressContainer.getBoundingClientRect().left;
        const percent = (clickX / progressContainer.clientWidth) * 100;
        const duration = audio.duration;
        audio.currentTime = (percent / 100) * duration;
        progressBar.style.backgroundColor = "white";
        circle.style.opacity = "0";
        isDragging = false;
        }
        adjusting = false;
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
        adjusting = true;
        const clickX = e.clientX - progressContainer.getBoundingClientRect().left;
        const duration = audio.duration;
        var percent = (clickX / progressContainer.clientWidth) * 100;
        if (percent > 100) {
            percent = 100;
        }
        else if (percent < 0) {
            percent = 0;
        }
        progressBar.style.width = percent + '%';
        circle.style.left = percent + '%';
        var current_minutes = Math.floor((percent / 100) * duration / 60);
        var current_seconds = Math.floor((percent / 100) * duration % 60);
        if (current_seconds >= 10) {
            music_current.innerHTML = current_minutes + ":" + current_seconds;
        }
        else {
            music_current.innerHTML = current_minutes + ":0" + current_seconds;
        }
        }
    });

    window.addEventListener('touchmove', (e) => {
        if (isDragging) {
        adjusting = true;
        const clickX = e.changedTouches[0].clientX - progressContainer.getBoundingClientRect().left;
        const duration = audio.duration;
        var percent = (clickX / progressContainer.clientWidth) * 100;
        if (percent > 100) {
            percent = 100;
        }
        else if (percent < 0) {
            percent = 0;
        }
        progressBar.style.width = percent + '%';
        progressBar.style.backgroundColor = "#white";
        circle.style.left = percent + '%';
        circle.style.opacity = "1";
        var current_minutes = Math.floor((percent / 100) * duration / 60);
        var current_seconds = Math.floor((percent / 100) * duration % 60);
        if (current_seconds >= 10) {
            music_current.innerHTML = current_minutes + ":" + current_seconds;
        }
        else {
            music_current.innerHTML = current_minutes + ":0" + current_seconds;
        }
        }
    });

});
