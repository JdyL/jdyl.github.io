var height = $(window).height(); // returns height of browser viewport
var width = $(window).width();

var skillHeight = 80;

var mediaIconHeight = 50;
var mainLogoHeight = 600;

var top = document.getElementById("section-one");

var screenWidthOne = 974;




$(document).ready(function () {
    scrollToTwo();
    setTimeout(10000);
});

window.onload = function () {
    bannerFixedSize();

    // setColorSchemeBanner();
    updateSkillItems('resize-framework-items', skillHeight);
    updateSkillItems('social-media-icons', mediaIconHeight);
    updateSkillItems('main-logo', (parseInt(getSectionOneHeight().slice(0, -2)) - 200));
    adjustTopBanner();
};

window.onresize = function (event) {
    updateWindowSize();
    bannerFixedSize();
    changeNavBarItemColour();
    updateWindowSize();

    updateSkillItems('main-logo', (parseInt(getSectionOneHeight().slice(0, -2)) - 200));

    // console.log("FROM UPDATE: " + $(window).height(), $(window).width());
    // console.log("raw UPDATE: " + top.height, top.width);
    adjustTopBanner();


};

function bannerFixedSize() {
    var sectionOne = document.getElementById('section-one');
    sectionOne.style.width = width + 'px';
    sectionOne.style.height = height + 'px';
    console.log(width, height);
}


var getWidth = function () {
    return width;
};

var getHeight = function () {
    return height;
}

var getSectionOneHeight = function () {
    var sectionOne = document.getElementById('section-one');
    return sectionOne.style.height;
};


function changeNavBarItemColour() {
    console.log(getWidth() + " This is the width");
    let rawItems = document.getElementsByClassName('nav-link');
    let items = document.getElementsByClassName('nav-item');
    if (getWidth() < 974) {

        for (let i = 0; i < items.length; i++) {
            // items[i].style.background = 'black';
            items[i].style.opacity = '0.9';
            items[i].style.textAlign = "right";
            items[i].style.wordWrap = "normal";
            items[i].style.margin = "5px 0px auto";
            rawItems[i].style.background = "black";
            rawItems[i].style.float = 'right';
            rawItems[i].style.wordWrap = "normal";
            rawItems[i].style.padding = "8px 18px";
        }

    } else {
        resetStyle(items);
        resetStyle(rawItems);
    }
}

function resetStyle(obj) {
    for (let k = 0; k < obj.length; k++) {
        var style = obj[k].style;
        console.log(style);
        if (style.length != 0) {
            for (let i = 0; i < style.length; i++) {
                obj[k].style[style[i]] = "initial";
            }
        }
    }
}

function updateWindowSize() {
    height = $(window).height();
    width = $(window).width();

}



function updateSkillItems(className, size) {
    let frameworkitems = document.getElementsByClassName(className);

    for (let i = 0; i < frameworkitems.length; i++) {
        // console.log("Framework Items: " + frameworkitems[i].width, frameworkitems[0].height)
        frameworkitems[i].height = size;
        // console.log("Framework Items: " + frameworkitems[i].width, frameworkitems[0].height)
    }
}


function getAllCSSComponents() {
    var css = window.getComputedStyle(element);
    for (var i = 0; i < css.length; i++) {
        console.log(css[i] + '=' + css.getPropertyValue("" + css[i]))
    }
}

// Smoothscrolling taken from W3Schools
function scrollToTwo() {
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
}

function adjustTopBanner() {
    let topBanner = document.getElementById('top-banner');
    console.log("this is the height: " + getHeight());
    topBanner.style.marginTop = (getHeight() * 0.3) + 'px';
}

changeNavBarItemColour();