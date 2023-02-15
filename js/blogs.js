const blog_cont=document.getElementById('articles-container')

const blog_list=JSON.parse(localStorage.blogs)
console.log(blog_list)
for(let i=0;i<blog_list.length;i++){
  
  blog_cont.innerHTML+=`
  <div class="one-blog">
          <img src="${blog_list[i].Cover}" alt="">
          <div class="publishing-details">
            <div class="published-date">
              ${blog_list[i].datecreated
              }
            </div>
            <div class="coment-likes">
            <div class="author">
              Admin
            </div>
            <div class="comments">${blog_list[i].comments?.length || 0}<i class="fa fa-comment" aria-hidden="true"></i></div>
            <div class="likes">
            ${blog_list[i]?.likes || 0} <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="headings">
          <a href="#" onclick="singleBlog_view('${blog_list[i].Title}')" >${blog_list[i].Title}</a>
        </div>
        <div class="blog-description">
                ${blog_list[i].Description
                }                                             
        </div>
        </div>
  
  `
}

function singleBlog_view(title){
  localStorage.setItem("BlogTitle",title)
  history.go(0)
  location="single-blog.html"
}




