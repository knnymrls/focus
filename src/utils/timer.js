export function startTimer() {
    let seconds = 0, minutes = 0, hours = 0;
    const timerElement = document.getElementById('timer');

    function updateTimer() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }

        if (hours != 0) {
            timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }

    // Update the timer every second (1000 milliseconds)
    setInterval(updateTimer, 1000);
}
