// console.log(JSON.parse(localStorage.getItem("queries")));

// const data = JSON.parse(localStorage.getItem("queries"));
// console.log(data);

// let tbody = document.querySelector("tbody");
// for (let i = 0; i < data.length; i++) {
//   let d1 = document.createElement("td");
//   let d2 = document.createElement("td");
//   let d3 = document.createElement("td");
//   d1.innerText = data[i].name;
//   d2.innerText = data[i].email;
//   d3.innerText = data[i].message;

//   let row = document.createElement("tr");
//   row.appendChild(d1);
//   row.appendChild(d2);
//   row.appendChild(d3);
//   tbody.appendChild(row);
// }

const accessToken = localStorage.getItem("kiri");
const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn && !accessToken) {
  window.location.assign("/html/login.html");
}

fetch("http://localhost:3001/api/userMessages/", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("kiri"))}`,
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    result = data.payload;
    console.log(result);
    if (data.status === 200) {
      let tbody = document.querySelector("tbody");
      for (let i = 0; i < result.length; i++) {
        let d1 = document.createElement("td");
        let d2 = document.createElement("td");
        let d3 = document.createElement("td");
        d1.innerText = result[i].name;
        d2.innerText = result[i].email;
        d3.innerText = result[i].message;

        let row = document.createElement("tr");
        row.appendChild(d1);
        row.appendChild(d2);
        row.appendChild(d3);
        tbody.appendChild(row);
      }
    }
  })
  .catch((error) => console.log(error));
