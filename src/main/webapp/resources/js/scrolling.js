
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
