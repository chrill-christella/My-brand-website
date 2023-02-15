var textRegex = /^[a-zA-Z]+ [a-zA-Z]/;
var required = 5;
document.querySelector("#add-blog").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.target.elements["title"].value;
  const description = event.target.elements["editor1"].value;
  if (title.match(textRegex)) {
    document.querySelector(".title_error").textContent = "";
    console.log(title);
  } else if (title.length == 0) {
    document.querySelector(".title_error").textContent = "Enter The title";
  } else {
    document.querySelector(".title_error").textContent = "Title is Invalid";
  }

  if (description.length - required >= 0) {
    document.querySelector(".description_error").textContent = "";
    console.log(description);
  } else if (description.length == 0) {
    document.querySelector(".description_error").textContent =
      "Enter your description, Minimum 5 characters ";
  } else {
    document.querySelector(".description_error").textContent =
      " description is Invalid, Minimum 5 characters";
  }
});
