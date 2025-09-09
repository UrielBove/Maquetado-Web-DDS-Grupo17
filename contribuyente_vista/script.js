const profileBtn = document.getElementById("profileBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

profileBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});


const modal = document.getElementById("modalHecho");
const abrirBtn = document.querySelector(".btn-nuevo-hecho");
const cerrarBtn = document.getElementById("cerrarModal");
const pagina = document.querySelector(".pagina");

abrirBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  pagina.classList.add("blur");
});

cerrarBtn.addEventListener("click", () => {
  modal.style.display = "none";
  pagina.classList.remove("blur");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    pagina.classList.remove("blur");
  }
});