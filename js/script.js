var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".feedback-form");
var closePopup = document.querySelector(".close-popup");
var yourname = document.querySelector("[name=yourname]");
var loginLogin = popup.querySelector(".feedback-name");
var loginEmail = popup.querySelector(".feedback-email");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-form-opened");
  yourname.focus();
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupRemover();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popupRemover();
  }
});

function popupRemover() {
  popup.classList.remove("feedback-form-opened");
  loginLogin.classList.remove("input-error");
  loginEmail.classList.remove("input-error");
  popup.classList.remove("feedback-error");
}

popup.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginEmail.value) {
  evt.preventDefault();
  popup.classList.remove("feedback-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("feedback-error");
  }
  if (!loginLogin.value) {
    loginLogin.classList.add("input-error");
  }
  if (!loginEmail.value) {
    loginEmail.classList.add("input-error");
  }
});

loginLogin.addEventListener("click", function () {
  loginLogin.classList.remove("input-error");
});

loginEmail.addEventListener("click", function () {
  loginEmail.classList.remove("input-error");
});
