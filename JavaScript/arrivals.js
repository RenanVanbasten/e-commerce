document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.expandable-section');

  sections.forEach(section => {
      const viewAllButton = section.querySelector('.view-all');
      let expandido = false;

      // Função para alternar entre mostrar e ocultar os cards
      function toggleCards() {
          // Seleciona todos os cards ocultos e visíveis na seção atual
          const hiddenCards = section.querySelectorAll('.card-hidden');
          const visibleCards = section.querySelectorAll('.card-visible');

          // Verifica se a seção está atualmente expandida
          if (expandido) {
              // Se estiver expandida, oculta os cards visíveis
              visibleCards.forEach(card => {
                  card.classList.remove('card-visible');
                  card.classList.add('card-hidden');
              });
              // Muda o texto do botão para "View More" (Ver mais)
              viewAllButton.textContent = 'View More';
              // Atualiza o estado para não expandido
              expandido = false;
          } else {
              // Se não estiver expandida, mostra uma quantidade específica de cards ocultos
              const cardsToShow = window.innerWidth <= 768 
                  ? Array.from(hiddenCards).slice(0, 2)  // Em telas pequenas, exibe 2 cards
                  : Array.from(hiddenCards).slice(0, 4); // Em telas grandes, exibe 4 cards

              // Mostra os cards selecionados
              cardsToShow.forEach(card => {
                  card.classList.remove('card-hidden');
                  card.classList.add('card-visible');
              });

              // Muda o texto do botão para "View Less" (Ver menos)
              viewAllButton.textContent = 'View Less';
              // Atualiza o estado para expandido
              expandido = true;
          }
      }

      // Adiciona um evento de clique ao botão 'view-all' que chama a função toggleCards
      viewAllButton.addEventListener('click', toggleCards);
  });
});
