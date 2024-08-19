document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.expandable-section');

  sections.forEach(section => {
      const viewAllButton = section.querySelector('.view-all');
      let expandido = false;

      function toggleCards() {
          const hiddenCards = section.querySelectorAll('.card-hidden');
          const visibleCards = section.querySelectorAll('.card-visible');

          if (expandido) {
              visibleCards.forEach(card => {
                  card.classList.remove('card-visible');
                  card.classList.add('card-hidden');
              });
              viewAllButton.textContent = 'View More';
              expandido = false;
          } else {
              const cardsToShow = window.innerWidth <= 768 
                  ? Array.from(hiddenCards).slice(0, 2)  
                  : Array.from(hiddenCards).slice(0, 4); 

              cardsToShow.forEach(card => {
                  card.classList.remove('card-hidden');
                  card.classList.add('card-visible');
              });

              viewAllButton.textContent = 'View Less';
              expandido = true;
          }
      }

      viewAllButton.addEventListener('click', toggleCards);
  });
});