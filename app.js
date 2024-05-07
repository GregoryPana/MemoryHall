
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
    // toggles to show or unshow the links 
    links.classList.toggle("show-links");
});
