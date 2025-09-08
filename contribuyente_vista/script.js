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
