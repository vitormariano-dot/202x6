document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for CTAs
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Simple interaction: pulse the CTA
  const ctas = document.querySelectorAll('.cta-button');
  ctas.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.animation = 'pulse 0.5s';
    });
  });
});