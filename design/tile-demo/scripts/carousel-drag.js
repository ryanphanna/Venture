(function(){
  // Small helper to make the carousel drag with mouse or finger.
  function enableCarouselDrag(carouselSelector = '.carousel') {
    const carousels = document.querySelectorAll(carouselSelector);
    carousels.forEach(carousel => {
      let isDown = false;
      let startX;
      let scrollLeft;

      carousel.style.cursor = 'grab';

      carousel.addEventListener('pointerdown', (e) => {
        isDown = true;
        carousel.setPointerCapture(e.pointerId);
        startX = e.clientX;
        scrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
      });

      carousel.addEventListener('pointermove', (e) => {
        if (!isDown) return;
        const x = e.clientX;
        const walk = startX - x;
        carousel.scrollLeft = scrollLeft + walk;
      });

      function stop() {
        isDown = false;
        carousel.style.cursor = 'grab';
      }
      carousel.addEventListener('pointerup', stop);
      carousel.addEventListener('pointercancel', stop);
      carousel.addEventListener('pointerleave', stop);

      carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') carousel.scrollBy({ left: 300, behavior: 'smooth' });
        if (e.key === 'ArrowLeft') carousel.scrollBy({ left: -300, behavior: 'smooth' });
      });

      carousel.querySelectorAll('.tile').forEach(t => t.setAttribute('tabindex', '0'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => enableCarouselDrag());
  } else {
    enableCarouselDrag();
  }

  // expose for debugging
  window.enableCarouselDrag = enableCarouselDrag;
})();
