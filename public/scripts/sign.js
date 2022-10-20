const openSignInBtn = document.getElementById("sign-in-button");
const closeSignInBtn = document.getElementById("close-button");
const modal = document.getElementById("sign-in");
const overlay = document.getElementById("overlay");

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

openSignInBtn.addEventListener("click", openModal);
closeSignInBtn.addEventListener("click", closeModal);
