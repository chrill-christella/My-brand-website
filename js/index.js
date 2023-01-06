const showContainers = document.querySelectorAll(".show-replies");

showContainers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let parentContainer = e.target.closest(".comment__container");
    let _id = parentContainer.id;
    if (_id) {
      let childrenContainer = parentContainer.querySelectorAll(
        `[dataset=${_id}]`
      );
      childrenContainer.forEach((child) => child.classList.toggle("opened"));
    }
  })
);
let likebtn = document.querySelector("#like");
let input1 = document.querySelector("#input1");
var required = 5;

likebtn.addEventListener("click", () => {
  input1.value = parseInt(input1.value) + 1;
  input1.style.color = "#12ff00";
});

document.querySelector("#blog-c").addEventListener("submit", (event) => {
  event.preventDefault();
  const comment = event.target.elements["comment"].value;

  if (comment.length - required >= 0) {
    document.querySelector(".description_error").textContent = "";
    console.log(comment);
    input2.value = parseInt(input2.value) + 1;
    input2.style.color = "#12ff00";
  } else if (comment.length == 0) {
    document.querySelector(".description_error").textContent =
      "Enter your description, Minimum 5 characters ";
  } else {
    document.querySelector(".description_error").textContent =
      " description is Invalid, Minimum 5 characters";
  }
});
