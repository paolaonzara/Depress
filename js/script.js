document.addEventListener("DOMContentLoaded", function() {
    // Função para ajustar o padding do conteúdo baseado na altura da navbar
    const navbar = document.querySelector(".navbar");
    const container = document.querySelector(".container");
  
    function adjustPadding() {
      const navbarHeight = navbar.offsetHeight;
      container.style.paddingTop = `${navbarHeight + 20}px`; // Adiciona um espaço extra de 20px
    }
  
    // Ajustar o padding ao carregar e ao redimensionar a janela
    window.addEventListener("load", adjustPadding);
    window.addEventListener("resize", adjustPadding);
  });
  