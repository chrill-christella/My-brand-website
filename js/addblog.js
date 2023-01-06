// CKEDITOR.replace("editor1");
// var textRegex= /^[a-zA-Z]+ [a-zA-Z]+$/;
// var required=100;
const articleId = location.hash.slice(1);
if (JSON.parse(localStorage.getItem("articles")) === null) {
  localStorage.setItem("articles", JSON.stringify([]));
}

let imageUrl = "";

document.querySelector("#picture").addEventListener("change", function () {
  const reader = new FileReader();
  reader.readAsDataURL(this.files[0]);
  reader.addEventListener("load", () => {
    imageUrl = reader.result;
  });
});

const articles = JSON.parse(localStorage.getItem("articles"));
let data;
console.log(articles.length);
if (articleId.length !== 0) {
  const foundArticle = articles.filter((article) => {
    return article.id === articleId;
  });
  data = foundArticle.length !== 0 ? foundArticle[0] : undefined;
  document.querySelector(".blog-title").value = data.title;
  document.querySelector("#description").value = data.description;
  imageUrl = data.picture;
}
articleId.length !== 0
  ? (document.querySelector(".add").textContent = "Edit Blog")
  : (document.querySelector(".add").textContent = "Create Blog");
document.querySelector("#add-blog").addEventListener("submit", (e) => {
  e.preventDefault();
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
  const isInEditMode = articleId.length !== 0;
  const newData = {
    id: isInEditMode ? data.id : self.crypto.randomUUID(),
    title: e.target.elements["title"].value,
    description: e.target.elements["description"].value,
    picture: imageUrl,
    comments: isInEditMode ? data.comments : [],
    likes: 0,
  };
  if (isInEditMode) {
    const existingArticle = JSON.parse(localStorage.getItem("articles"));
    const freshArticle = existingArticle.filter((article) => {
      return article.id !== articleId;
    });
    freshArticle.push(newData);
    localStorage.setItem("articles", JSON.stringify(freshArticle));
    location.assign(`/html/viewblog.html?id=${newData.id}`);
  } else {
    const existingArticle = JSON.parse(localStorage.getItem("articles"));
    existingArticle.push(newData);
    localStorage.setItem("articles", JSON.stringify(existingArticle));
    location.assign(`/html/viewblog.html?id=${newData.id}`);
  }
  e.target.elements["title"].value = "";
  e.target.elements["description"].value = "";
  e.target.elements["picture"].value = "";
});

// document.getElementById('add-blog').addEventListener('submit',(event)=>{
//     const title= document.querySelector('.blog-title').value;
//     const description= document.querySelector('#description').value;
//     const query={
//         title: title,
//         description: description,
//     };
//     const oldBlogs = JSON.parse(localStorage.getItem('blogs'))
//     oldBlogs.push(query)
//     localStorage.setItem('blogs', JSON.stringify(oldBlogs))
// })
