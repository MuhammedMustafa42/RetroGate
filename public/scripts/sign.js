const openSignInBtn = document.getElementById("sign-in-button");
const closeSignInBtn = document.getElementById("close-button");
const modal = document.getElementById("sign-in");

const openSignUpBtn = document.getElementById("sign-up-button");
const closeSignUpBtn = document.getElementById("up-close-button");
const upModal = document.getElementById("sign-up");

const overlay = document.getElementById("overlay");

function upOpenModal() {
  upModal.classList.add("active");
  overlay.classList.add("active");
}

function upCloseModal() {
  upModal.classList.remove("active");
  overlay.classList.remove("active");
}

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function signOut() {}

openSignInBtn.addEventListener("click", openModal);
closeSignInBtn.addEventListener("click", closeModal);

openSignUpBtn.addEventListener("click", upOpenModal);
closeSignUpBtn.addEventListener("click", upCloseModal);
