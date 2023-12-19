// filter menu
document.getElementById("openMenu").addEventListener("click", openMenu);
document.getElementById("closeMenu").addEventListener("click", closeMenu);

function openMenu() {
document.getElementById("sideMenu").style.width = "50vw";
// document.getElementById("openMenu").style.display = "none";
}

function closeMenu() {
document.getElementById("sideMenu").style.width = "0";
// document.getElementById("openMenu").style.display = "block";
}