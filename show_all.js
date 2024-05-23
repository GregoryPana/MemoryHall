let res = document.getElementById('gallery');

// Function to display all images regardless of category
x = 0

function diplayImages() {
    x = x+1;
    let displayItems = data.map(function (item) {
        console.log(x);

        // Returns the image url and the category
        return `<img src=${item.path} alt=${item.type} />`;
        });
        displayItems = displayItems.join("");
        res.innerHTML = displayItems;
}

// run
diplayImages();



// ======= NO LONGER NEEDED WITH REMOVAL OF ALL PAGES =========