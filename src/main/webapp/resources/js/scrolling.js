
/*
 * Scrolling settings
 */

// Getting an object of navigation bar
const navbar = document.querySelector('#navbar');

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
