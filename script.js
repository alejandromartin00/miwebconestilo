<script>
  const destinos = document.querySelectorAll('.destino');

  destinos.forEach(dest => {
    dest.addEventListener('mouseenter', () => {
      dest.style.transform = 'scale(1.05)';
      dest.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
    });
    dest.addEventListener('mouseleave', () => {
      dest.style.transform = 'scale(1)';
      dest.style.boxShadow = 'none';
    });
  });
</script>
