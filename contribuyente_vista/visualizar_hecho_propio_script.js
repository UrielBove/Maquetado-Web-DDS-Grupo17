document.addEventListener("DOMContentLoaded", function () {
  var botonSolicitar = document.getElementById("boton-solicitar-eliminacion");
  var modal = document.getElementById("modal-eliminacion");
  var fondo = document.getElementById("fondo-modal");
  var cerrar = document.getElementById("cerrar-modal");
  var areaTexto = document.getElementById("texto-razon");
  var botonEnviar = document.getElementById("enviar-solicitud");
  var selectores = document.querySelectorAll(".selector");
  var imagen = document.getElementById("imagen-principal");
  var focoAnterior = null;
  var semillas = ["fuego", "fuego2", "fuego3", "fuego4"];

  function abrirModal() {
    focoAnterior = document.activeElement;
    modal.setAttribute("aria-hidden", "false");
    fondo.setAttribute("aria-hidden", "false");
    areaTexto.focus();
    document.body.style.overflow = "hidden";
  }

  function cerrarModal() {
    modal.setAttribute("aria-hidden", "true");
    fondo.setAttribute("aria-hidden", "true");
    if (focoAnterior && focoAnterior.focus) focoAnterior.focus();
    document.body.style.overflow = "";
  }

  botonSolicitar.addEventListener("click", function () {
    abrirModal();
  });
  cerrar.addEventListener("click", function () {
    cerrarModal();
  });
  fondo.addEventListener("click", function () {
    cerrarModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false")
      cerrarModal();
  });

  botonEnviar.addEventListener("click", function () {
    var texto = areaTexto.value.trim();
    if (texto.length < 1) {
      areaTexto.setAttribute("aria-invalid", "true");
      areaTexto.focus();
      mostrarToast("La razón no puede estar vacia.");
      return;
    }
    areaTexto.removeAttribute("aria-invalid");
    cerrarModal();
    mostrarToast("Solicitud enviada. Gracias.");
    areaTexto.value = "";
  });

  function mostrarToast(msg) {
    var n = document.createElement("div");
    n.className = "toast";
    n.setAttribute("role", "status");
    n.textContent = msg;
    document.body.appendChild(n);
    setTimeout(function () {
      n.style.transition = "opacity 400ms";
      n.style.opacity = "0";
      n.addEventListener("transitionend", function () {
        n.remove();
      });
    }, 2200);
  }

  selectores.forEach(function (s, i) {
    s.addEventListener("click", function () {
      selectores.forEach(function (x) {
        x.classList.remove("activo");
        x.classList.remove("activo");
        x.classList.remove("activo");
        x.setAttribute("aria-selected", "false");
      });
      s.classList.add("activo");
      s.classList.add("activo");
      s.setAttribute("aria-selected", "true");
      imagen.src = "https://picsum.photos/seed/" + semillas[i] + "/900/520";
    });
  });
});
