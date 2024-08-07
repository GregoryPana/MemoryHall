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

// Messages 


var beaches = ["Anse Major", "Beau Vallon", "Grand Police", "Anse Intendance", "Grand Anse (Mahe - Ranil)", "Anse Du Riz", "Anse Georgette (Praslin)", "Anse Lazio (Praslin)",  "Anse Cocos (La Digue)", "Anse Source D'argent (La Digue)"];
beach_list = "";
hikes_list = "";
poi_list = "";

beaches.forEach(function(entry) {
    beach_list = beach_list + " <li> " + entry + " </li>" 
});

let hikes = ["Anse Major Trail", "Copolia Trail", "Mont Trois Freres"]

hikes.forEach(function(entry) {
    hikes_list = hikes_list + " <li> " + entry + " </li>" 
});

let pois = ["Grand Police Rock Pool", "Ros Sodyer Rock Pool", "Praslin", "La Digue"]

pois.forEach(function(entry) {
    poi_list = poi_list + " <li> " + entry + " </li>" 
});

// Display the message for selected tab
function get_info(id){
    message = document.querySelector('.about-content');
    switch(id){
        case "beaches":
            message.innerHTML = `<c> ${beach_list} </c>`;
            break;
        case "hikes":
            message.innerHTML = `<c> ${hikes_list} </c>`; 
            break;
        case "poi":
            message.innerHTML = `<c> ${poi_list} </c>`;
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



// RUN once to get starting tab message
print(list_print(beach_msg));
get_info('beaches');
