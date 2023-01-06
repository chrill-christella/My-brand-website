//firebase

const firebaseConfig = {
  apiKey: "AIzaSyBDuAkFklsIUaLleqb6ZBVpcECcvftt7ec",
  authDomain: "forms-1d3fd.firebaseapp.com",
  databaseURL: "https://forms-1d3fd-default-rtdb.firebaseio.com",
  projectId: "forms-1d3fd",
  storageBucket: "forms-1d3fd.appspot.com",
  messagingSenderId: "912521975738",
  appId: "1:912521975738:web:67cdfe13b0ad070c02ef83",
};

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailRegex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
const required = 10;
let isFormValidated = false;

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  // const name = event.target.elements['sender-name'].value;
  // const email= event.target.elements['sender-email'].value;
  // const message= event.target.elements['message'].value;

  const name1 = document.getElementById("name");
  const email1 = document.getElementById("email");
  const message1 = document.getElementById("message");

  name1.addEventListener("input", () => {
    validatename();
  });
  email1.addEventListener("input", () => {
    validateemail();
  });
  message1.addEventListener("input", () => {
    validatemessage();
  });
  validate();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  if (
    name.match(nameRegex) &&
    email.match(emailRegex1) &&
    message.length - required > 0
  ) {
    alert("Success");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    //initialize firebase
    firebase.initializeApp(firebaseConfig);
    //reference for the database
    const formsDB = firebase.database().ref("forms");
    document
      .getElementById("contact-form")
      .addEventListener("submit", submitForm);
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

      document.getElementById("contact-form").reset();
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
  }
});

function validatename() {
  const name = document.getElementById("name").value;

  if (name.match(nameRegex)) {
    document.querySelector(".name_error").textContent = "";
    console.log(name);
  } else if (name.length == 0) {
    document.querySelector(".name_error").textContent = "Enter your full name";
  } else {
    document.querySelector(".name_error").textContent = "Enter your name";
  }
}

function validateemail() {
  const email = document.getElementById("email").value;

  if (email.match(emailRegex1)) {
    document.querySelector(".email_error").textContent = "";
    console.log(email);
  } else if (email.length == 0) {
    document.querySelector(".email_error").textContent = "Enter your email";
  } else {
    document.querySelector(".email_error").textContent = "Email is Invalid";
  }
}

function validatemessage() {
  const message = document.getElementById("message").value;

  if (message.length - required > 0) {
    document.querySelector(".message_error").textContent = "";
    console.log(message);
  } else if (message.length == 0) {
    document.querySelector(".message_error").textContent =
      "Enter The message, Minimum 10 characters";
  } else {
    document.querySelector(".message_error").textContent =
      "Enter the message, Minimum 10 characters ";
  }
}

function validate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (name.match(nameRegex)) {
    document.querySelector(".name_error").textContent = "";
    console.log(name);
  } else if (name.length == 0) {
    document.querySelector(".name_error").textContent = "Enter your full name";
  } else {
    document.querySelector(".name_error").textContent = "Enter your name";
  }

  if (email.match(emailRegex1)) {
    document.querySelector(".email_error").textContent = "";
    console.log(email);
  } else if (email.length == 0) {
    document.querySelector(".email_error").textContent = "Enter your email";
  } else {
    document.querySelector(".email_error").textContent = "Email is Invalid";
  }
  if (message.length - required > 0) {
    document.querySelector(".message_error").textContent = "";
    console.log(message);
  } else if (message.length == 0) {
    document.querySelector(".message_error").textContent =
      "Enter The message, Minimum 10 characters";
  } else {
    document.querySelector(".message_error").textContent =
      "Enter the message, Minimum 10 characters ";
  }
}

//local storage
localStorage.setItem("queries", JSON.stringify([]));
document.getElementById("contact-form").addEventListener("submit", (event) => {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const query = {
    name: name,
    email: email,
    message: message,
  };
  const oldQueries = JSON.parse(localStorage.getItem("queries"));
  oldQueries.push(query);
  localStorage.setItem("queries", JSON.stringify(oldQueries));
});
