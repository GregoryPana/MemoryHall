let res = document.getElementById('gallery');

// Function to display all imaes regardless of category
function diplayImages() {

    let displayItems = data.map(function (item) {

        // Returns the image url and the category
        return `<img src=${item.path} alt=${item.type} />`;
        });
        displayItems = displayItems.join("");
        res.innerHTML = displayItems;
}

// run
diplayImages();