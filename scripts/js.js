// filter menu
document.getElementById("openMenu").addEventListener("click", openMenu);
document.getElementById("closeMenu").addEventListener("click", closeMenu);

function openMenu() {
document.getElementById("sideMenu").style.width = "50vw";
}

function closeMenu() {
document.getElementById("sideMenu").style.width = "0";
}

//like systeem

var change = document.querySelector('#likebtn');
change.addEventListener('click', likeChange);
function likeChange() {
  change.classList.toggle('changeBtn');
}
console.log("test");