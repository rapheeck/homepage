console.log("cześć!");

let pushbutton = document.querySelector(".pushbutton");
let passes = document.querySelector(".passes");
let themeName = document.querySelector(".themeName");
pushbutton.addEventListener("click", () => {
    passes.classList.toggle("blind");

    themeName.innerText = passes.classList.contains("blind") ? "Dodaj" : "Usuń";

});