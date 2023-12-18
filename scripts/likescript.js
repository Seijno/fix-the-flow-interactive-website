//like systeem
const change = document.querySelector('#likebtn');
change.addEventListener('click', likeChange);
function likeChange() {
  change.classList.toggle('changeBtn');
}