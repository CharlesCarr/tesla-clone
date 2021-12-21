// TESTING FOR GIT/GITHUB - 2nd Commit



// Selecting Menu button and the hidden menu - adding click event to menu button
const menuButton = document.getElementById('menuButton').addEventListener('click', openNav);
const hiddenMenu = document.getElementById('flexHiddenMenu');
const menuClose = document.getElementById('closeOut').addEventListener('click', closeNav);
const fullContainer = document.getElementById('fullContainer');


// New from w3schools example

function openNav() {
    hiddenMenu.style.width = "275px";
    /* In addition to changing the width to make the side menu appear
    I need to change the styling of the background to have a tint to it
    think I can add a i
    */
    fullContainer.setAttribute('class', 'tint');
    // fullContainer.style.zIndex = "-1";
}

function closeNav() {
    hiddenMenu.style.width = "0";
    fullContainer.removeAttribute('class');
}

