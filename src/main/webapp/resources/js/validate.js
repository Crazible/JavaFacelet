/*
 * Scrolling settings
 */

// Getting an object of navigation bar
const navbar = document.querySelector('div.navbar');

const sticky = navbar.offsetTop; // Top of navbar (pixels)
window.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
})

const clockUI = document.querySelector('.navbar-inner .ui-clock');
const clockCircle = document.querySelector('#clock');

// Setting listener for clock ui
window.addEventListener('scroll', function () {
    if (clockCircle.getBoundingClientRect().bottom < 0) {
        clockUI.classList.remove('invisible');
    } else {
        clockUI.classList.add('invisible');
    }
})


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
// Starts timer
iconHandler();
setInterval(iconHandler, timeout);

///////////////////////////////////////////////////////////////////////////

const point = document.querySelector('#dot');
const graphic = document.querySelector('#graphic');

let x = 175, y = 175;
const onChangeRedrawDot = function () {
    
}

// redraws the point on the graph
const redrawPoint = function (x, y) {
    point.setAttribute("cx", x);
    point.setAttribute("cy", y);
}
// rolls point to another point
graphic.addEventListener("mousemove", (event) => {
    const coordinate = graphic.getBoundingClientRect();
    // coordinates
    const cx = event.clientX - coordinate.x;
    const cy = event.clientY - coordinate.y;

    redrawPoint(cx, cy);
})
// moves dot to pre-clicked point
graphic.addEventListener("mouseleave", () => {
    setTimeout(() => {
        redrawPoint(x, y);
    }, 50);
})

graphic.addEventListener("click", () => {
    
})