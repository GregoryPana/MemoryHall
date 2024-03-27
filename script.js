// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const image_paths = [
    {
        id: 1,
        img: "./Gallery/picture_test.jpg",
        desc: "Flower1",
    },
    {
        id: 2,
        img: "./Gallery/flower-6.jpg",
        desc: "Flower2",
    },
    {
        id: 3,
        img: "./Gallery/colours.jpg",
        desc: "Flower3",
    },
    {
        id: 4,
        img: "./Gallery/desert.jpg",
        desc: "Flower3",
    },
    {
        id: 5,
        img: "./Gallery/bird.jpg",
        desc: "Flower3",
    },
    {
        id: 6,
        img: "./Gallery/beach.jpg",
        desc: "Flower3",
    },
];

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

let res = document.getElementById('gallery');

navToggle.addEventListener('click', function() {
    // toggles to show or unshow the links 
    links.classList.toggle("show-links");
    diplayImages(image_paths);
    //loadDoc();
});


function diplayImages(im_path) {
    let displayItems = im_path.map(function (item) {
      // console.log(item);

    return `<img src=${item.img} alt=${item.desc} />`;
    });
    displayItems = displayItems.join("");
    // console.log(displayItems);
    res.innerHTML = displayItems;
}
