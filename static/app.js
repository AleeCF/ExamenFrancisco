// nombre_del_alumno
const modalButton = document.getElementById("modalB");
const modal = document.getElementById("intermodal");
const fondo = document.getElementById("fondo_app");
const Bvolver = document.getElementById("volver");
const nuevoButton = document.getElementById("añadir");

modalButton.addEventListener("click", function() {
  fondo.style.display = "none";
  modal.style.display = "block";
});

Bvolver.addEventListener("click", function() {
  fondo.style.display = "block";
  modal.style.display = "none";
});

nuevoButton.addEventListener("click", function() {
  alert("Añadido Correctamente");
});
