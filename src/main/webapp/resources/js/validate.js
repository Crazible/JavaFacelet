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

// Overriding method 'replace' of the class DOMTokenList
DOMTokenList.prototype.replace = function (oldToken, newToken) {
    this.remove(oldToken); this.add(newToken);
}

const success = "success";
const error = "error";

//-------------------------------------------------------------------------

const labelList = document.querySelectorAll('label.last');

const sliderEntry = ice.ace.instance('j_idt19:mySlider');

const checkSlider = function() {
    labelList[0].classList.add(success);
    labelList[0].innerHTML = sliderEntry.getValue();
    return Number.parseFloat(sliderEntry.getValue());
}

//-------------------------------------------------------------------------

const inputText = document.querySelector('.y');

const checkInputText = function() {
    let floatPattern = /^[+-]?\d+(\.\d+)?$/;
    // replace comma to dot
    let fieldValue = inputText.value.trim().replace(',', '.');

    if (fieldValue === "") {
        // removes all effects
        labelList[1].classList.remove(success, error);
        labelList[1].innerHTML = 'Enter value of Y [-5..3]'
        return undefined; // if invalid data
    }
    if (floatPattern.test(fieldValue)) {
        let floatValue = parseFloat(fieldValue);

        if (floatValue < -5 || floatValue > 3) {
            // replacing status
            labelList[1].classList.replace(success, error);
            labelList[1].innerHTML = fieldValue.toString();
            return undefined; // if invalid data
        } else {
            // replacing status
            labelList[1].classList.replace(error, success);
            labelList[1].innerHTML = fieldValue.toString();
            return floatValue; // valid data
        }
    } else {
        // replacing status
        labelList[1].classList.replace(success, error);
        labelList[1].innerHTML = fieldValue.toString();
        return undefined; // if invalid data
    }
}

//-------------------------------------------------------------------------

const checkBoxList = document.querySelectorAll('.zaebaletotcheckbox');

const check = function(checkBox, val) {
    checkBoxList.forEach(checkbox => checkbox.checked = false);
    checkBox.checked = true;
    labelList[2].classList.add(success);
    labelList[2].innerHTML = val.toString();
}

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