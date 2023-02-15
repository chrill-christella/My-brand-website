const accessToken = localStorage.getItem("kiri");
const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn && !accessToken) {
  window.location.assign("/html/login.html");
}

fetch("https://website-api-o6er.onrender.com/api/article/")
  .then((res) => res.json())
  .then((data) => {
    result = data.data;
    console.log(result);

    if (data.status === 200) {
      let tbody = document.querySelector("tbody");
      for (let i = 0; i < result.length; i++) {
        const row = document.createElement("tr");
        const id = document.createElement("td");
        id.setAttribute("class", "hidden");
        id.textContent = result[i]._id;
        const d1 = document.createElement("td");
        d1.textContent = result[i].title;
        const d2 = document.createElement("td");
        d2.textContent = result[i].created_date;
        const d3 = document.createElement("td");
        d3.textContent = result[i].likes;
        const d4 = document.createElement("td");
        const span = document.createElement("span");
        const editicon = document.createElement("i");
        editicon.setAttribute("class", "ri-edit-line edit");
        editicon.setAttribute("id", result[i]._id);
        editicon.addEventListener("click", (e) => {
          console.log(result[i]._id);
          location.assign(`../html/addblog.html#${e.target.id}`);
          localStorage.setItem("isEditing", "edit");
        });
        let deleteicon = document.createElement("i");
        deleteicon.setAttribute("class", "ri-delete-bin-line delete");
        span.appendChild(editicon);
        span.appendChild(deleteicon);
        d4.appendChild(span);
        row.appendChild(id);
        row.appendChild(d1);
        row.appendChild(d2);
        row.appendChild(d3);
        row.appendChild(d4);
        tbody.appendChild(row);

        deleteicon.addEventListener("click", () => {
          fetch(
            `https://website-api-o6er.onrender.com/api/article/${result[i]._id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${JSON.parse(
                  localStorage.getItem("kiri")
                )}`,
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.status === 200) {
                location.reload();
              } else {
                throw new Error(data.message);
              }
            })
            .catch((error) => console.error(error));
        });
      }
    }
  });
