// alert("Hola este es mi JavaScript");

// const nombre = "Cristian";
// console.log(nombre);

//document.addEventListener("DOMContentLoaded", function () {
//var condicionCumplida = true; // Puedes establecer esta variable como desees
//var acercaDeMiElement = document.querySelector("#section-principal h2");

//if (condicionCumplida) {
//    acercaDeMiElement.textContent = "Mi historia";
//} else {
//   console.log("No se cumple");
//}
//});

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};
