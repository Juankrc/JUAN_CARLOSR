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

  // Para enviar email con EmailJS 
  (function() {
      emailjs.init("TU_USER_ID"); //Es el ID de usuario que te proporciona EmailJS al registrarte.
  })();

  // funcion de enviar los datos del formulario

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

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