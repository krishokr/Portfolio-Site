// Mobile Menu
let hamburgerBtn = document.querySelector(".hamburger-icon");
let closeMenuBtn = document.querySelector(".close-icon");
let menu = document.querySelector(".navigation-list");

hamburgerBtn.addEventListener("click", function() {
    hamburgerBtn.style.display = "none";
    closeMenuBtn.style.display = "flex";
    menu.style.display = "flex";
});


closeMenuBtn.addEventListener("click", function() {
    hamburgerBtn.style.display = "flex";
    closeMenuBtn.style.display = "none";

    if (window.innerWidth <= 768) {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }
});

// Show More of Profile on Index Page
let showHiddenTextBtn = document.querySelector(".show-hidden-text");
let hiddenText = document.querySelector(".hidden-text-container");
let hideTextBtn = document.querySelector(".hide-text");

showHiddenTextBtn.addEventListener("click", function() {
    showHiddenTextBtn.style.display = "none";
    hiddenText.style.display = "flex";
    hideTextBtn.style.display = "flex";
});

hideTextBtn.addEventListener("click", function() {
    showHiddenTextBtn.style.display = "flex";
    hideTextBtn.style.display = "none";
    hiddenText.style.display = "none";
})






  