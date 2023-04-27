
  // Função para atualizar a visibilidade dos logotipos
  function updateLogoVisibility() {
    const nav = document.getElementById("navigation");
    const defaultLogo = document.querySelector(".navbar-brand .default-logo");
    const scrolledLogo = document.querySelector(".navbar-brand .scrolled-logo");

    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
      defaultLogo.style.display = "none";
      scrolledLogo.style.display = "block";
    } else {
      nav.classList.remove("scrolled");
      defaultLogo.style.display = "block";
      scrolledLogo.style.display = "none";
    }
  }

  // Adiciona um ouvinte de eventos de scroll à janela
  window.addEventListener("scroll", updateLogoVisibility);

  // Atualiza a visibilidade dos logotipos ao carregar a página
  document.addEventListener("DOMContentLoaded", updateLogoVisibility);

