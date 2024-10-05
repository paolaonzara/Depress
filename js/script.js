document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Pega o destino da âncora
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Verifica se o elemento existe
      if (targetElement) {
        // Calcula a posição com o offset do navbar
        const offsetPosition = targetElement.offsetTop - 70; // Substitua 70 pela altura do seu navbar

        // Scroll suave para o destino
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    footer.style.opacity = 0;
    footer.style.transition = 'opacity 1s ease';

    setTimeout(function() {
        footer.style.opacity = 1;
    }, 500); // Delay de 500ms para o efeito fade-in
});


document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  fadeElements.forEach((element) => {
      // Adiciona um pequeno atraso na animação para que ela ocorra gradualmente
      setTimeout(() => {
          element.classList.add('show');
      }, 200);
  });
});



