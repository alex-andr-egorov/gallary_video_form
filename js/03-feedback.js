import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector(".feedback-form "),
  email: document.querySelector(".feedback-form input"),
  texterea: document.querySelector(".feedback-form textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.email.addEventListener("input", throttle(onFormInput, 500));
refs.texterea.addEventListener("input", throttle(onTextereaInput, 500));
let objForm = { email: "", message: "" };

//наличие формы
getLocallSeved();
function getLocallSeved() {
  objForm = {};

  const savedForm = localStorage.getItem("feedback-form-state");
  parsedForm = JSON.parse(savedForm);
  if (localStorage.getItem("feedback-form-state")) {
    refs.email.value = parsedForm.email;
    refs.texterea.value = parsedForm.message;
    objForm.email = parsedForm.email;
    objForm.message = parsedForm.message;
  }
}

//отпавляем форму и чистим ее
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
}

function onFormInput(e) {
  const email = e.currentTarget.value;
  objForm[e.target.name] = email;
  localStorageFunc();
}
function onTextereaInput(e) {
  const message = e.currentTarget.value;
  objForm[e.target.name] = message;
  localStorageFunc();
}
// let localStorageFunc = throttle(function () {
//   localStorage.setItem("feedback-form-state", JSON.stringify(objForm));
// }, 500);
function localStorageFunc() {
  localStorage.setItem("feedback-form-state", JSON.stringify(objForm));
}
