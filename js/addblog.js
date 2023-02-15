const articleId = location.hash.slice(1);
const accessToken = localStorage.getItem("kiri");
const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn && !accessToken) {
  window.location.assign("/html/login.html");
}

let imageUrl = "";

document.querySelector("#picture").addEventListener("change", function () {
  const reader = new FileReader();
  reader.readAsDataURL(this.files[0]);
  reader.addEventListener("load", () => {
    imageUrl = reader.result;
  });
});


fetch("https://website-api-o6er.onrender.com/api/article/")

  .then((res) => res.json())
  .then((data) => {
    const articles = data.data;
    if (data.status === 200) {
      console.log(articles);
      if (articleId.length !== 0) {
        const foundArticle = articles.filter((article) => {
          return article._id === articleId;
        });
        console.log(foundArticle);
        data = foundArticle.length !== 0 ? foundArticle[0] : undefined;

        document.querySelector(".blog-title").value = data.title;
        document.querySelector("#description").value = data.description;
        imageUrl = data.picture;
      }
    } else {
      throw new Error(data.message);
    }
  })
  .catch((error) => console.error(error));

articleId.length !== 0
  ? (document.querySelector(".add").textContent = "Edit Blog")
  : (document.querySelector(".add").textContent = "Create Blog");

const formData = new FormData();
const title = document.querySelector("#kigali");
const description = document.querySelector(".rwanda");
const picture = document.querySelector("#picture");

document.querySelector("#add-blog").addEventListener("submit", (e) => {
  e.preventDefault();

  formData.append("title", title.value);
  formData.append("description", description.value);
  formData.append("picture", picture.files[0]);

  //Validation
  // const title = e.target.elements['title'].value;
  // const description = e.target.elements['description'].value;
  //     if (title.match(textRegex)) {
  //     document.querySelector(".title_error").textContent = ""
  //     console.log(title)

  // } else if(title.length == 0){
  //     document.querySelector(".title_error").textContent = "Enter The title"
  // }else{
  //     document.querySelector(".title_error").textContent = "Title is Invalid"
  // }

  //     if (description.length-required>0) {
  //     document.querySelector(".description_error").textContent = ""
  //     console.log(description)

  // } else if(description.length==0){
  //     document.querySelector(".description_error").textContent = "Enter your description, Minimum 100 characters "
  // } else {
  //     document.querySelector(".description_error").textContent = " description is Invalid, Minimum 100 characters";
  // }
  //Add blog to dashboard

  // const date = Date.parse(new Date());
  // console.log(date)
  let data;
  const isInEditMode = articleId.length !== 0;

  if (isInEditMode) {
    //const url = `https://localhost:3001/api/article/updateArticle/${articleId}`;


    fetch(
      `https://website-api-o6er.onrender.com/api/article/updateArticle/${articleId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("kiri"))}`,
        },

        body: formData,
      }
    )

      .then((response) => response.json())
      .then((data) => {
        console.log(data.status);
        if (data.status === 200) {
          location.reload();
          alert("Blog updated Successfully");
          location.assign(`/html/viewblog.html?id=${articleId}`);

        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => console.error(error));
  } else {

    fetch("https://website-api-o6er.onrender.com/api/article", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kiri"))}`,
      },
      body: formData,
      //body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status);
        if (data.status === 201) {
          // location.reload()
          alert("Blog Created Successfully");
          location.assign(`/html/viewblog.html?id=${data.articleID}`);
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // const existingArticle = JSON.parse(localStorage.getItem('articles'))
    // existingArticle.push(newData)
    // localStorage.setItem('articles', JSON.stringify(existingArticle))
  }
  e.target.elements["title"].value = "";
  e.target.elements["description"].value = "";
  e.target.elements["picture"].value = "";
});
