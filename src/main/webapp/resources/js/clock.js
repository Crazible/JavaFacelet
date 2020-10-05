
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


// Getting array of clock icons
const clockIcons = document.querySelectorAll('.clock-icons img');

let iconIndex = 0; // Index of next icon
// Changes clock icon to next
const iconHandler = function () {
    clockIcons.forEach(icon => icon.classList.add('invisible'));
    clockIcons[iconIndex++].classList.remove('invisible');
    // Index of next icon
    if (iconIndex > 3) iconIndex = 0;
}


// Invokes in every second functions 'clockHandler' and 'iconHandler'
const invoker = function () {
    setInterval(() => { iconHandler(); clockHandler(); }, timeout);
}
// Running
invoker();
