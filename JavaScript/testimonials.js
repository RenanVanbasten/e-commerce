document.addEventListener('DOMContentLoaded', () => {
  
    const carousel = document.querySelector('.carousel');
    const controls = document.querySelectorAll('.carousel-control');
    const cards = Array.from(carousel.querySelectorAll('.cartao'));
    const cardWidth = cards[0].offsetWidth + 20;
    let scrollAmount = 0;
    carousel.innerHTML += carousel.innerHTML;

    function updateScrollPosition() {
      carousel.scrollLeft = scrollAmount;
    }
  
    controls.forEach(control => {
      control.addEventListener('click', () => {
        const isLeft = control.classList.contains('left');
  
        if (isLeft) {
          scrollAmount -= cardWidth;
          if (scrollAmount < 0) {
            scrollAmount = carousel.scrollWidth / 2 ;
          }
        } else {
          scrollAmount += cardWidth;
          if (scrollAmount > carousel.scrollWidth / 2) {
            scrollAmount = 0;
          }
        }
  
        updateScrollPosition();

      });
    });
  });
  