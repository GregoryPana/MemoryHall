// Get the button element
var trivia_btn = document.getElementById("trivia-btn");
var family_btn = document.getElementById("family-btn");
var timer_btn = document.getElementById("timer-btn");

// Add an event listener to the button
trivia_btn.addEventListener("click", function() {
    // Redirect to the new page when the button is clicked
    window.location.href = "trivia.html";
});

// Add an event listener to the button
family_btn.addEventListener("click", function() {
    // Redirect to the new page when the button is clicked
    window.location.href = "family.html";
});

// Add an event listener to the button
timer_btn.addEventListener("click", function() {
    // Redirect to the new page when the button is clicked
    window.location.href = "timer.html";
});