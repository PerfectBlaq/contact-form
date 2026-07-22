/* DOM Elements */
const form = document.getElementsByClassName("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("e-mail");
const queryType = document.getElementById('general-enquiry');
const message = document.getElementById("message");
const terms = document.getElementById("tc-s");
const fieldError = document.getElementsByClassName("field__err");
const radioError = document.getElementById("radio__err");
const mssgError = document.getElementById("mssg__err");
const termsError = document.getElementById("consent__err");
console.log(firstName.value, "", " ",);

form[0].addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstName.value === ""){
    fieldError[0].classList.add("show");
    firstName.style.borderColor= "red"
  }
  if (lastName.value === "") {
    fieldError[1].classList.add("show");
    lastName.style.borderColor = "red";
  }
  if (email.value === "" || !email.includes("@gmail.com")) {
    fieldError[2].classList.add("show");
    email.style.borderColor = "red";
  }
//   got stuck here
// finally solve the error, what happened: firstly none of my radio input had a required attribut so the valuemissing was returning undefined, finally fixed it by giving one an attribute of required and secondly the class I was dynamically adding wasnt working and this is because the id has a higher specificty than the class so I had to give the styling in the class I was adding dynamically !important 
  if (queryType.validity.valueMissing){

    radioError.className = "show";
    
}
  console.log(e)
});
