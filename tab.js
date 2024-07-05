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
        case "beaches":
            message.innerHTML = `<c> ${beach_msg} </c>`;
            break;
        case "hikes":
            message.innerHTML = `<c> ${hikes_msg} </c>`; 
            break;
        case "poi":
            message.innerHTML = `<c> ${poi_msg} </c>`;
            break;
        default:        
    }
}

// Get the button element
var trivia_btn = document.getElementById("game-btn");

// Add an event listener to the button
trivia_btn.addEventListener("click", function() {
    // Redirect to the new page when the button is clicked
    window.location.href = "trivia.html";
});

// Messages 

let beach_msg = ["Anse Major", "Anse Lazio", "Anse Intandance"];

let hikes_msg = ["Anse Major Trail", "Copolia", "Mont Trois Freres"];

let poi_msg = ["Grand Police Rock Pool", "Ros Sodyer Rock Pool"];

function list_print(array_data){
    joined_text = '';
    while (i <= array_data.length)
        {
            joined_text =  joined_text.concat(" ", array_data[i]);
        }
    return joined_text;

}
// RUN once to get starting tab message
print(list_print(beach_msg));
get_info('beaches');
