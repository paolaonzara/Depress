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




// Ícone
document.querySelector('.scroll-down').addEventListener('click', function() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });



  function changeMainVideo(event) {
    const videoSrc = event.target.parentElement.getAttribute('data-video-src');
    const videoTitle = event.target.parentElement.getAttribute('data-video-title');
  
    const mainVideo = document.getElementById('main-video');
    const mainVideoSource = document.getElementById('main-video-src');
    const mainVideoTitle = document.getElementById('main-video-title');
  
    mainVideoSource.src = videoSrc;
    mainVideo.load();
    mainVideoTitle.innerText = videoTitle;
  }
