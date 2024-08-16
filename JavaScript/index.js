document.addEventListener('DOMContentLoaded', function() {
    const newArrivalsButton = document.getElementById('view-all-new-arrivals');
    const topSellingButton = document.getElementById('view-all-top-selling');
  
    function toggleCards(button, cards) {
      const isVisible = button.getAttribute('data-visible') === 'true';
  
      if (isVisible) {
        cards.forEach(card => card.classList.add('card-hidden'));
        button.textContent = 'View All';
        button.setAttribute('data-visible', 'false');
      } else {
        cards.forEach(card => card.classList.remove('card-hidden'));
        button.textContent = 'View Less';
        button.setAttribute('data-visible', 'true');
      }
    }
  
    const newArrivalsCards = document.querySelectorAll('.new-arrivals .card-hidden');
    newArrivalsButton.addEventListener('click', function() {
      toggleCards(newArrivalsButton, newArrivalsCards);
    });
  
    const topSellingCards = document.querySelectorAll('.top-selling .card-hidden');
    topSellingButton.addEventListener('click', function() {
      toggleCards(topSellingButton, topSellingCards);
    });
  });
  