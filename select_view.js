//           all or nothing-0, friends-1, greg-2, family-3
const categories = ["", "friends", "greg", "family", "jayde"];

let rez = document.getElementById('gallery');

// Get the full pathname
let filename = window.location.pathname;
// Split the pathname by '/' to get an array of parts
var pathnameParts = filename.split('/');
// Get the last part of the array, which is the filename only
var linkHref = pathnameParts[pathnameParts.length - 1];

// Background + Navbar elements
const body_bg = document.querySelector("body");
const navbar = document.querySelector("nav");

// Background Colour
const bg_family = '--clr-family-page';
const bg_greg = '--clr-greg-page';
const bg_friend = '--clr-friends-page';
const bg_timer = '--clr-timer-page';
const bg_jayde = '--clr-jayde-page';
const bg_def = '--clr-custom-bg';


// Nav-bar colours
const nav_def = '--clr-nav-def';
const nav_greg = '--clr-nav-greg';
const nav_timer = '--clr-nav-timer';
const nav_friends = '--clr-nav-friends';
const nav_family = '--clr-nav-family';
const nav_jayde = '--clr-nav-jayde';

// Find the category for the page and asisgn colours and theme
function get_category() {
    switch(linkHref) {
        case "friends.html": // Freinds Page
            set_colours(bg_friend, nav_friends)
            category = categories[1];
            break;
        case "greg.html": //  Gregory Page
            set_colours(bg_greg, nav_greg)
            category = categories[2];
            break;
        case "family.html": // Family Page
            set_colours(bg_family, nav_family)
            category = categories[3];
            break;
        case "jayde.html": // Jayde Page
            set_colours(bg_jayde, nav_jayde)
            category = categories[4];
            break;
        case "timer.html": // countdown - Timer Page
            set_colours(bg_timer, nav_timer)
            category = categories[0];
            break;
        default: // main page
            set_colours(bg_def , nav_def);
            category = categories[0];
            break;       
    }
    return category
}

// Assign the parsed backround and nav bar colour 
function set_colours(bg_color, nav_color) {
    body_bg.style.backgroundColor = `var(${bg_color})`;
    navbar.style.backgroundColor = `var(${nav_color})`;
}

// Display the items found for the corresponding page's category selected
function show_category() {
    let displayItems = data.map(function (item) {
        // Get the current page and display images only for that category
        if (item.type == get_category())
        // Returns the image url and the category
        return `<img src=${item.path} alt=${item.type} />`;
        });
        displayItems = displayItems.join("");
        rez.innerHTML = displayItems;
}

