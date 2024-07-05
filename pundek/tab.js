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
        case "event_d":
            message.innerHTML = `<li> ${event_details_location} </li><li> ${event_details_date} </li><li> ${event_details_time} </li> <li> ${event_details_price} </li> <li> ${event_details_extra} </li>`;
            break;
        case "terms":
            message.innerHTML = `<p> ${terms_cond} </p>`; 
            break;
        default:        
    }
}

// Messages 
terms_cond = "The Guest acknowledges that they are responsible for their personal belongings brought to the event. The Host and villa management are not liable for any loss or theft of personal property. The Guest agrees to respect the Villa property and its furnishings. Any damage caused by the Guest or their actions during the event will be the responsibility of the Guest to reimburse or rectify. The Host and villa management are not responsible for any accidents, injuries, or damages that may occur during the event. Cancellation policies and refunds are as per the booking agreement. The Guest acknowledges and agrees that photographs or videos may be taken during the event for promotional or documentation purposes. By attending, the Guest grants permission for their likeness to be used in such materials. Late cancellations may result in forfeiture of the rental fee or deposit. By attending the villa party event, the Guest acknowledges that they have read, understood, and agreed to abide by all terms and conditions outlined in this Agreement."

event_details_location = "Location: Changkat Duta Luxury Villa"
event_details_date = "Date: Saturday 3 August 2024"
event_details_time = "Time: Open - 9.30pm  |  Close Gate - 4am"
event_details_price = "Price: RM150 Single Entry"
event_details_extra = "Food and Alcoholic Beverages provided (Free)"


// RUN once to get starting tab message
get_info('event_d');
