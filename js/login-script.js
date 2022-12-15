const username = document.getElementById("username");
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
