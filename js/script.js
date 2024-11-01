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
// modal

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})



