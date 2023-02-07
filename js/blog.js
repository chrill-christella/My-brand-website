// render blogs

const articles = JSON.parse(localStorage.getItem("articles"))
  ? JSON.parse(localStorage.getItem("articles"))
  : [];

const renderArticles = (articles) => {
  const box_container = document.querySelector(".box-container");
  box_container.innerHTML = "";
  for (const article of articles) {
    console.log(article);
    const box = document.createElement("div");
    box.setAttribute("class", "box shadow");
    const id = document.createElement("span");
    id.setAttribute("class", "hidden");
    id.textContent = article.id;
    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "image");
    const img = document.createElement("img");
    img.setAttribute("src", article.picture);
    const h3Likes = document.createElement("h3");
    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-heart");
    h3Likes.appendChild(icon);
    h3Likes.textContent = "43";
    imgDiv.appendChild(img);
    imgDiv.appendChild(h3Likes);
    const content = document.createElement("div");
    content.setAttribute("class", "content");
    const h3Content = document.createElement("h3");
    h3Content.textContent = article.title;
    const date = document.createElement("div");
    date.setAttribute("class", "published-date");
    date.appendChild(date);
    const p = document.createElement("p");
    p.textContent = article.description;
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "btn");
    anchor.setAttribute("href", "./viewblog.html?id=" + article.id);
    anchor.textContent = "read more";
    content.appendChild(h3Content);
    content.appendChild(p);
    content.appendChild(anchor);
    box.appendChild(id);
    box.appendChild(imgDiv);
    box.appendChild(content);
    box_container.appendChild(box);
  }
};

renderArticles(articles);
