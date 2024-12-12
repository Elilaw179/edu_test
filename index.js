let list = document.getElementById("list");
let x = document.getElementById("x");
let navColumn = document.getElementById("navColumn");

list.addEventListener("click", () => {
  navColumn.classList.add("active");

});

x.addEventListener("click", () => {
  navColumn.classList.remove("active");


});
