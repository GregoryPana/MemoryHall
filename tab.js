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
            message.innerHTML = `<c> FAM Message </c>`;
            break;
        case "gregory":
            message.innerHTML = `<c> BF Message </c>`; 
            break;
        case "friends":
            message.innerHTML = `<c> FRIEND Message </c>`;
            break;
        default:        
    }
}


// RUN MAIN
get_info(id);