const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
    let id = e.target.dataset.id;
    if (id) {
        get_info(id);
    // remove selected from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

    // hide other articles
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    } 
});

// Display the message for selected tab
function get_info(id){
    message = document.querySelector('.about-content');
    switch(id){
        case "family":
            message.innerHTML = `<c> ${fam_msg} </c>`;
            break;
        case "gregory":
            message.innerHTML = `<c> ${greg_msg} </c>`; 
            break;
        case "friends":
            message.innerHTML = `<c> ${fren_msg} </c>`;
            break;
        default:        
    }
}

// Get the button element
var trivia_btn = document.getElementById("game-btn");

// Add an event listener to the button
trivia_btn.addEventListener("click", function() {
    // Redirect to the new page when the button is clicked
    window.location.href = "test.html";
});

// Messages 
greg_msg = "Come back plz, i have buds for you"

fam_msg = "Hi Jaja, Hi jaja, I like jaja... huh? - Jayde"

fren_msg = "Mother i love and miss you so much pweez come back - Yuka"


// RUN once to get starting tab message
get_info('family');
