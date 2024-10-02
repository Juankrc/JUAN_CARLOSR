const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

  

  src="https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js"

// Inicializar EmailJS con el ID de usuario
(function() {
  emailjs.init("_stV40RaoZI2LMlYP"); // Asegúrate de que sea el ID correcto
})();

// Función para enviar los datos del formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

  // Mostrar mensaje de depuración
  console.log('Intentando enviar el formulario...');

  // Enviar los datos del formulario usando EmailJS
  emailjs.sendForm('service_09bvgxa', 'template_fg56m5e', this)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          document.getElementById("respuesta").innerText = "Mensaje enviado correctamente.";
      }, function(error) {
          console.log('FAILED...', error);
          document.getElementById("respuesta").innerText = "Error al enviar el mensaje.";
      });
});

