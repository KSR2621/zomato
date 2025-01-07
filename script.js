// JavaScript to animate the placeholder text in the search input
const searchInput = document.querySelector('main input');

let placeholderText = "Search for restaurant, cuisine or a dish";
let placeholderIndex = 0;

function typeEffect() {
    if (placeholderIndex < placeholderText.length) {
        searchInput.placeholder += placeholderText.charAt(placeholderIndex);
        placeholderIndex++;
        setTimeout(typeEffect, 100);
    }
}

searchInput.placeholder = ""; // Clear initial placeholder
typeEffect();

// Smooth scroll on header links (assuming links have IDs or are defined)
document.querySelectorAll("header ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});
