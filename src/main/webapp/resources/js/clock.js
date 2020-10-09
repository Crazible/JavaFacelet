
/*
 * Clock settings
 */

// Changing time on clocks in milliseconds
let timeout = 1000; // ms

// Getting object of interactive clock
const clocks = document.querySelectorAll('span.clock');

// Updates clock time
const clockHandler = function () {
    const date = new Date();
    // getting time from object 'Date'
    let hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    let minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    let seconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    // updating text in html attributes 'span'
    clocks.forEach(clock => clock.innerHTML = `${hours}:${minutes}:${seconds}`);
}

// Starts timer
clockHandler();
setInterval(clockHandler, timeout);
