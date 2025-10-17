// script.js
const destinos = document.querySelectorAll('.destino');

destinos.forEach(dest => {
  dest.addEventListener('mouseenter', () => {
    dest.style.backgroundColor = '#007BFF'; // azul
    dest.style.color = '#ffffff'; // texto blanco
  });

  dest.addEventListener('mouseleave', () => {
    dest.style.backgroundColor = '#ffffff'; // blanco
    dest.style.color = '#000000'; // negro
  });
});
