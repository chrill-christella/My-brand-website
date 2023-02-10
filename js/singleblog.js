// let url = location.href;
// let id = url.split("=")[1];
// //single blog view
// let title = document.querySelector(".content h3");
// let content = document.querySelector(".content p");
// let image = document.querySelector(".image img");

// window.addEventListener("DOMContentLoaded", () => {
//   let article = JSON.parse(localStorage.getItem("articles"));
//   let n = article.find((a) => {
//     return a.id == id;
//   });
//   title.textContent = n.title;
//   content.textContent = n.description;
//   image.setAttribute("src", n.picture);
// });

// // Comment

// const article = JSON.parse(localStorage.getItem("articles"));

// const submitBtn = document.querySelector(".c-btn");
// const username = document.querySelector("#user");
// const comment = document.querySelector("#comment");
// let count = document.querySelector(".count");
// let likeIcon = document.querySelector("#like-btn");
// let commentIcon = document.querySelector("#comment-btn");
// const commentsCont = document.querySelector(".comments-container");

// likeIcon.addEventListener("click", likeBlog);
// submitBtn.addEventListener("click", submitFeedback);

// if (JSON.parse(localStorage.getItem("comments")) === null) {
//   localStorage.setItem("comments", JSON.stringify([]));
// }

// let positiveFeedback = false;
// let likesCount = 0;

// function submitFeedback(e) {
//   let a = location.href.split("=")[1];
//   let b = article.indexOf(
//     article.find((i) => {
//       return i.id == a;
//     })
//   );

//   let newFeedback = {
//     username: user,
//     userComment: feedback,
//   };

//   let c = article[b].comments.push(newFeedback);
//   localStorage.setItem("articles", JSON.stringify(c));
//   const user = username.value;
//   const feedback = comment.value;
//   if (user && feedback) {
//     let newFeedback = {
//       id: Math.floor(Math.random() * 1000 + 1),
//       username: user,
//       userComment: feedback,
//     };

//     const existingComments = JSON.parse(localStorage.getItem("comments"));
//     existingComments.push(newFeedback);
//     localStorage.setItem("comments", JSON.stringify(existingComments));

//     addFeedback(newFeedback);
//   }
//   e.preventDefault;
// }

// function likeBlog() {
//   likeIcon.classList.toggle("liked");
//   if (likeIcon.classList.contains("liked")) {
//     likeIcon.innerHTML = ` <i class="fas fa-heart"></i>`;
//     addLikes();
//     positiveFeedback = true;
//   } else {
//     likeIcon.innerHTML = ` <i class="far fa-heart"></i>`;
//     positiveFeedback = false;
//   }
// }
// function addLikes() {
//   likesCount++;
//   count.textContent = likesCount;
// }

// function addFeedback(item) {
//   const letter = item.username.charAt(0);
//   const div = document.createElement("div");
//   div.setAttribute("class", "comment-card");
//   div.id = item.id;

//   div.innerHTML = `
//             <div class="pic center_display">
//                 ${letter}
//             </div>
//             <div class="comment-info">
//                 <small class="user"> ${item.username} </small>
//                 <p class="msg"> ${item.userComment}</p>
//             </div>
//             <div class="comment-footer">
//                 <div class="heart-icon-comment">${
//                   item.typeOfFeedback
//                     ? `
//                 <i class="fas fa-heart positive"></i>`
//                     : `<i class="far fa-heart"></i>`
//                 }</div>
//                 <button>Reply</button>
//             </div>
//     `;
//   commentsCont.insertAdjacentElement("beforeend", div);
//   // alert("comment added")
// }

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, "0");
// var yyyy = today.getFullYear();

// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const month = monthNames[today.getMonth()];

// today = month + " " + dd + ", " + yyyy;

let url = location.href;
let id = url.split("=")[1];

const apiUrl = `https://mybrand-api-uwera.herokuapp.com/api/articles/${id}`;

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

fetch(apiUrl, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 200) {
      renderArticle(data.payload);
    } else {
      throw new Error(data.message);
    }
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

//like
const likeButton = document.querySelector("#like-btn");
likeButton.addEventListener("click", () => {
  fetch(`https://mybrand-api-uwera.herokuapp.com/api/like/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.message === "liked") {
        location.reload();
      } else {
        throw new Error(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});
