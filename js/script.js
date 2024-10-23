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
  
document.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            footer.style.backgroundColor = getComputedStyle(section).backgroundColor;
        }
    });
});

document.addEventListener('scroll', () => {
  const navbar = document.querySelector('.nav-bar-color');
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      // Verifica se a seção está completamente visível
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          navbar.style.backgroundColor = getComputedStyle(section).backgroundColor;
      }
  });
});
