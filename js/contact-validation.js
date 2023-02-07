//firebase

// const firebaseConfig = {
//   apiKey: "AIzaSyACZV3Xgqoj8iUZmhFLOv79Zw1JxALihcw",
//   authDomain: "my-brand-website-56ee9.firebaseapp.com",
//   databaseURL: "https://my-brand-website-56ee9-default-rtdb.firebaseio.com",
//   projectId: "my-brand-website-56ee9",
//   storageBucket: "my-brand-website-56ee9.appspot.com",
//   messagingSenderId: "525117984349",
//   appId: "1:525117984349:web:c34197bb8ebb69e3a507b4",
//   measurementId: "G-Y4DMG5730R",
// };
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

  const url =
    "http://localhost:3001/documentation/#/Messages/post_api_userMessages";
  const query = {
    name: name1.value,
    email: email1.value,
    message: message1.value,
  };
  // let name = document.getElementById("name").value;
  // let email = document.getElementById("email").value;
  // let message = document.getElementById("message").value;
  if (
    name1.match(nameRegex) &&
    email1.match(emailRegex1) &&
    message1.length - required > 0
  ) {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status);
        if (data.status === 200) {
          location.reload();
          alert("Query Sent Successfully");
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => console.error(error));
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
});
//     //initialize firebase
//     firebase.initializeApp(firebaseConfig);
//     //reference for the database
//     const formsDB = firebase.database().ref("Contactform");
//     document
//       .getElementById("contact-form")
//       .addEventListener("submit", submitForm);
//     function submitForm(e) {
//       e.preventDefault();

//       var name = getElementVal("name");
//       var email = getElementVal("email");
//       var msg = getElementVal("message");

//       saveMessages(name, email, msg);

//       //enable alert

//       document.querySelector(".alert").style.display = "flex";

//       //removing the alert

//       setTimeout(() => {
//         document.querySelector(".alert").style.display = "flex";
//       }, 3000);

//       // remove the form

//       document.getElementById("contact-form").reset();
//     }

//     const saveMessages = (name, email, msg) => {
//       var newForm = formsDB.push();

//       newForm.set({
//         nameId: name,
//         emailId: email,
//         msgcontent: msg,
//       });
//     };

//     const getElementVal = (id) => {
//       return document.getElementById(id).value;
//     };
//   }
// });

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

/*
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
*/
