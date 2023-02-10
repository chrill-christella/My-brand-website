const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
let isEmailValid = false;
let isPasswordValid = false;

let formError = document.querySelector(".form_error");
const url = "";
const login = document.querySelector("#login");
login.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.elements["email"].value;
  const password = e.target.elements["password"].value;
  const loginData = {
    email: `${email}`,
    password: `${password}`,
  };
  console.log(loginData);
  // if (isEmailValid && isPasswordValid) {

  fetch("http://localhost:3001/api/user/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === 200) {
        const accessToken = data.payload.accessToken;
        localStorage.setItem("kiri", JSON.stringify(accessToken));
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        window.location.assign("../html/dashboard.html");
      } else {
        throw new Error(data.message);
      }
    })
    .catch((error) => {
      console.log(error);
      formError.textContent = error.message;
      setTimeout(() => {
        formError.textContent = "";
      }, 5000);
    });
  // }
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
