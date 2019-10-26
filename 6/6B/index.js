let edit = document.querySelectorAll(".edit");
let deleted = document.querySelectorAll(".deleted");
let body = document.getElementById("body")
let container = document.getElementById("container");

function show() {
    body.style.opacity = "0.5";
    container.classList.add("jreng")
}
function show2() {
    body.style.opacity = "0.5";
}

for(let i = 0; i < edit.length; i++) {
    edit[i].addEventListener("click",show);
    deleted[i].addEventListener("click",show2)
};
