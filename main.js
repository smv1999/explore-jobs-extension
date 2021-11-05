const jobs_url =
  "https://weworkremotely.com/categories/remote-programming-jobs.rss";
var e = document.createElement('div'); 
fetch(jobs_url)
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    document.getElementById('maintitle').innerHTML = "List of Jobs";
    items.forEach((el) => {
      html += `
        <div class="card">
            <div class="list-header">
                <h3>${el.querySelector("title").innerHTML}</h3>
            </div>
            <div class="list-content">
                ${el.querySelector("description").textContent}
            </div> 
        </div>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });
