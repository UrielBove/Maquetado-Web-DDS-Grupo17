document.addEventListener('DOMContentLoaded', () => {
  // Mostrar el popup
  document.querySelectorAll('.accept').forEach(button => {
    button.addEventListener('click', () => {
      const overlay2 = document.getElementById('overlay2');
      if (overlay2) overlay2.style.display = 'flex';
    });
  });

  // Cerrar con botón "Aceptar"
  const popupAccept = document.querySelector('.popup-accept');
  if (popupAccept) {
    popupAccept.addEventListener('click', () => {
      const textarea = document.querySelector('.popup-form textarea');
      const sugerencia = textarea ? textarea.value : '';
      console.log("Sugerencia:", sugerencia);

      const overlay2 = document.getElementById('overlay2');
      if (overlay2) overlay2.style.display = 'none';
    });
  }

  // Cerrar con la "X"
  const closePopup = document.getElementById('closePopup');
  if (closePopup) {
    closePopup.addEventListener('click', () => {
      const overlay2 = document.getElementById('overlay2');
      if (overlay2) overlay2.style.display = 'none';
    });
  }
});