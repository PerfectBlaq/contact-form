/* DOM Elements */
const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("e-mail");
const queryType = document.getElementById("general-enquiry");
const queryTypes = document.querySelectorAll(".radio__input");
const message = document.getElementById("message");
const terms = document.getElementById("tc-s");
const fieldError = document.getElementsByClassName("field__err");
const radioError = document.getElementById("radio__err");
const mssgError = document.getElementById("mssg__err");
const termsError = document.getElementById("consent__err");
const toast = document.getElementById("toast");
/*DOM elements in arrays so I can access them easily using loops */
const elements = [[firstName, lastName, email], queryTypes, message, terms];
const errors = [fieldError, radioError, mssgError, termsError];
// console.log(firstName.value, "", " ");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formValid = true;
  if (firstName.validity.valueMissing) {
    fieldError[0].classList.add("show");
    firstName.style.borderColor = "red";
    formValid = false;
  }
  if (lastName.validity.valueMissing) {
    fieldError[1].classList.add("show");
    lastName.style.borderColor = "red";
    formValid = false;
  }
  if (email.validity.valueMissing || email.validity.valueMismatch) {
    fieldError[2].classList.add("show");
    email.style.borderColor = "red";
    formValid = false;
  }
  //   got stuck here
  // finally solve the error, what happened: firstly none of my radio input had a required attribut so the valuemissing was returning undefined, finally fixed it by giving one an attribute of required and secondly the class I was dynamically adding wasnt working and this is because the id has a higher specificty than the class so I had to give the styling in the class I was adding dynamically !important
  if (queryType.validity.valueMissing) {
    radioError.className = "show";
    formValid = false;
  }
  if (message.validity.valueMissing) {
    mssgError.className = "show";
    message.style.borderColor = "red";
    formValid = false;
  }
  if (terms.validity.valueMissing) {
    termsError.className = "show";
    formValid = false;
  }
  if (formValid) {
    form.reset();
    toast.classList.add("show");
    if (toast.classList.contains("show")) {
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    }
  }
  // console.log(e);
});
// console.log(errors[0]);
for (let i = 0; i < 3; i++) {
  elements[0][i].addEventListener("input", () => {
    elements[0][i].style.borderColor = "var(--grey500-med)";
    errors[0][i].classList.remove("show");
  });
}
for (let i = 1; i <= 3; i++) {
  if (i == 1) {
    elements[i].forEach((query) => {
      query.addEventListener("change", () => {
        errors[i].classList.remove("show");
      });
    });
  }
  if (i == 2) {
    elements[i].addEventListener("input", () => {
      elements[i].style.borderColor = "var(--grey500-med)";
      errors[i].classList.remove("show");
    });
  }
  if (i == 3) {
    elements[i].addEventListener("change", () => {
      errors[i].classList.remove("show");
    });
  }
}
