document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.expandable-section');

  sections.forEach(section => {
      const viewAllButton = section.querySelector('.view-all');
      let isExpanded = false;

      function toggleCards() {
          const hiddenCards = section.querySelectorAll('.card-hidden');
          const visibleCards = section.querySelectorAll('.card-visible');

          if (isExpanded) {
              visibleCards.forEach(card => {
                  card.classList.remove('card-visible');
                  card.classList.add('card-hidden');
              });
              viewAllButton.textContent = 'View More';
              isExpanded = false;
          } else {
              const cardsToShow = window.innerWidth <= 768 
                  ? Array.from(hiddenCards).slice(0, 2)  // Exibe 2 cards em telas pequenas
                  : Array.from(hiddenCards).slice(0, 4); // Exibe 4 cards em telas grandes

              cardsToShow.forEach(card => {
                  card.classList.remove('card-hidden');
                  card.classList.add('card-visible');
              });

              viewAllButton.textContent = 'View Less';
              isExpanded = true;
          }
      }

      viewAllButton.addEventListener('click', toggleCards);
  });
});
