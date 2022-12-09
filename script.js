var bars = document.querySelector("#bars");
var content = document.querySelector(".toggle-content");

bars.addEventListener("click", ()=>{
    content.classList.toggle("active");
})
