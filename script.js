function updateClock() {

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Call updateClock every 1 second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately when the page loads
updateClock();
