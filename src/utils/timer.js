export function startTimer() {
    // Initialize the timer variables
    let seconds = 0, minutes = 0, hours = 0;
    const timerElement = document.getElementById('timer');

    /**
     * Updates the timer and displays the new time
     */
    function updateTimer() {
        // Increment the seconds
        seconds++;

        // If the seconds reach 60, reset to 0 and increment the minutes
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            // If the minutes reach 60, reset to 0 and increment the hours
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }

        // Display the new time on the page 
        if (hours != 0) {
            // If the hours are not 0, display the hours, minutes, and seconds
            timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            // If the hours are 0, only display the minutes and seconds
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }

    // Update the timer every second (1000 milliseconds)
    setInterval(updateTimer, 1000);
}
