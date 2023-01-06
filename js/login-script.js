/*const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
// const passwordRegex = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const required = 8;

form.addEventListener("submit", (e) => {
  let messages = [];
  if (!username.value.match(emailRegex)) {
    messages.push("Email is not valid");
  }
  // if (!password.value.match(passwordRegex)) {
  if (password.value.length < 8) {
    console.log(password.value);
    messages.push("password is not valid ");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(",  ");
  }
});
*/

localStorage.setItem(
  "admin",
  JSON.stringify({ email: "admin@gmail.com", password: "Passcode@1" })
);
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
let isEmailValid = false;
let isPasswordValid = false;

let formError = document.querySelector(".form_error");

document.querySelector("#login").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.elements["email"].value;
  const password = e.target.elements["password"].value;
  const adminCredential = JSON.parse(localStorage.getItem("admin"));
  if (isEmailValid && isPasswordValid) {
    if (
      adminCredential.email === email &&
      adminCredential.password === password
    ) {
      console.log("success");
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      window.location.assign("/html/dashboard.html");
    } else {
      formError.textContent = "Invalid Credential";
      setTimeout(() => {
        formError.textContent = "";
      }, 5000);
    }
  }
});

let emailError = document.querySelector(".email_error");

document.getElementById("input_email").addEventListener("input", (e) => {
  const email = e.target.value;
  if (e.target.value.match(emailRegex)) {
    isEmailValid = true;
    emailError.textContent = "";
  } else if (email.length == 0) {
    isEmailValid = false;
    emailError.textContent = "Enter your email";
  } else {
    isEmailValid = false;
    emailError.textContent = "Email is Invalid";
  }
});

let passwordError = document.querySelector(".password_error");

document.getElementById("input_password").addEventListener("input", (e) => {
  const password = e.target.value;
  if (password.match(passwordRegex)) {
    isPasswordValid = true;
    passwordError.textContent = "";
  } else if (password.length == 0) {
    isPasswordValid = false;
    passwordError.textContent =
      "Enter your password, Minimum 8 characters with at least one letter,one digit and one special character ";
  } else {
    isPasswordValid = false;
    passwordError.textContent = " Password is Invalid";
  }
});
