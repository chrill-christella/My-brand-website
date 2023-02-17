//
let url = location.href;
let id = url.split("=")[1];

const apiUrl = `https://website-api-o6er.onrender.com/api/article/getOneArticle/${id}`;

const renderArticle = (article) => {
  document.querySelector(".box-container").innerHTML = `
    <div class="image">
        <img src="${article.picture}" alt="">
    </div>              
    <div class="content">
        <h3 >${article.title}</h3>
        <p>${article.description}</p> 
    </div> `;

  document.querySelector("#likes").innerHTML = `${article.likes}`;
  document.querySelector("#comments").innerHTML = `${article.comments.length}`;

  let comments = "";
  for (const comment of article.comments) {
    comments =
      comments +
      `<h3>${comment.commentor}</h3><p>${comment.comment}</p>
        <hr>`;
  }
  document.querySelector(".comments").innerHTML = comments;
};
