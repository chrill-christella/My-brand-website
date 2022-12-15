const firebaseConfig = {
  apiKey: "AIzaSyBDuAkFklsIUaLleqb6ZBVpcECcvftt7ec",
  authDomain: "forms-1d3fd.firebaseapp.com",
  databaseURL: "https://forms-1d3fd-default-rtdb.firebaseio.com",
  projectId: "forms-1d3fd",
  storageBucket: "forms-1d3fd.appspot.com",
  messagingSenderId: "912521975738",
  appId: "1:912521975738:web:67cdfe13b0ad070c02ef83",
};
//initialize firebase
firebase.initializeApp(firebaseConfig);
//reference for the database
const formsDB = firebase.database().ref("forms");
document.getElementById("form").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();

  var nameId = getElementVal("name");
  var emailId = getElementVal("email");
  var msgcontent = getElementVal("message");

  saveMessages(nameId, emailId, msgcontent);

  //enable alert

  document.querySelector(".alert").style.display = "flex";

  //removing the alert

  setTimeout(() => {
    document.querySelector(".alert").style.display = "flex";
  }, 3000);

  // remove the form

  document.getElementById("form").reset();
}

const saveMessages = (nameId, emailId, msgcontent) => {
  var newForm = formsDB.push();

  newForm.set({
    nameId: nameId,
    emailId: emailId,
    msgcontent: msgcontent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

//end of firebase
var emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var textRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
var required = 20;
// var left= message.length-required;
document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.elements["sender-name"].value;
  const email = event.target.elements["sender-email"].value;
  const message = event.target.elements["message"].value;

  if (name.match(textRegex)) {
    document.querySelector(".name_error").textContent = "";
    console.log(name);
  } else if (name.length == 0) {
    document.querySelector(".name_error").textContent = "Enter your full name";
  } else {
    document.querySelector(".name_error").textContent = "Enter your name";
  }

  if (email.match(emailRegex)) {
    document.querySelector(".email_error").textContent = "";
    console.log(email);
  } else if (email.length == 0) {
    document.querySelector(".email_error").textContent = "Enter your email";
  } else {
    document.querySelector(".email_error").textContent = "Email is Invalid";
  }

  if (message.length - required >= 0) {
    document.querySelector(".message_error").textContent = "";
    console.log(message);
  } else if (message.length == 0) {
    document.querySelector(".message_error").textContent =
      "Enter The message, Minimum 20 characters";
  } else {
    document.querySelector(".message_error").textContent =
      "Enter the message, Minimum 20 characters ";
  }

  document.querySelector("#form").reset();
});
