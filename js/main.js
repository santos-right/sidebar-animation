let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".search-icon");


btn.onclick = function() {
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}