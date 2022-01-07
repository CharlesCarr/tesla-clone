// Variables for grabbing elements for events
const menuButton = document.getElementById("menuButton");
const hiddenMenu = document.getElementById("flexHiddenMenu");
const menuClose = document.getElementById("closeOut");
const fullContainer = document.getElementById("fullContainer");

// Adding Click Event Listeners
menuButton.addEventListener("click", openNav);
menuClose.addEventListener("click", closeNav);

// Function to Open Side Navigation
function openNav() {
  hiddenMenu.style.width = "275px";
  fullContainer.setAttribute("class", "tint");
}

// Function to Close Side Navigation
function closeNav() {
  hiddenMenu.style.width = "0";
  fullContainer.removeAttribute("class");
}