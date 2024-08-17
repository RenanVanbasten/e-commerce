document.addEventListener('DOMContentLoaded', () => {
    // Adiciona um ouvinte de evento para executar o código quando o DOM estiver totalmente carregado
  
    const carousel = document.querySelector('.carousel');
    // Seleciona o elemento com a classe 'carousel' e o armazena na variável 'carousel'
  
    const controls = document.querySelectorAll('.carousel-control');
    // Seleciona todos os elementos com a classe 'carousel-control' (setas de navegação) e os armazena na variável 'controls'
  
    const cards = Array.from(carousel.querySelectorAll('.cartao'));
    // Seleciona todos os elementos com a classe 'cartao' dentro do 'carousel' e os converte para um array, armazenando na variável 'cards'
  
    const cardWidth = cards[0].offsetWidth + 50;
    // Obtém a largura do primeiro cartão e adiciona 50 pixels para considerar a margem ou espaçamento adicional
  
    const numCards = cards.length;
    // Obtém o número total de cartões e armazena na variável 'numCards' (não utilizado posteriormente, mas pode ser útil)
  
    let scrollAmount = 0;
    // Inicializa a variável 'scrollAmount' que rastreará a posição de rolagem do carrossel
  
    // Duplicar o conteúdo para criar efeito contínuo
    carousel.innerHTML += carousel.innerHTML;
    // Duplica o conteúdo HTML dentro do carrossel para permitir um efeito de rotação contínua
  
    function updateScrollPosition() {
      // Função para atualizar a posição de rolagem do carrossel
      carousel.scrollLeft = scrollAmount;
      // Define a posição horizontal da rolagem do carrossel para o valor de 'scrollAmount'
    }
  
    controls.forEach(control => {
      // Itera sobre todos os controles (setas de navegação)
      control.addEventListener('click', () => {
        // Adiciona um ouvinte de evento para o clique em cada controle
        const isLeft = control.classList.contains('left');
        // Verifica se o controle tem a classe 'left', indicando que é a seta para a esquerda
  
        if (isLeft) {
          // Se o controle for para a esquerda
          scrollAmount -= cardWidth;
          // Decrementa o valor de 'scrollAmount' pela largura do cartão
          if (scrollAmount < 0) {
            // Se o valor de 'scrollAmount' for menor que 0 (significa que ultrapassou o início)
            scrollAmount = carousel.scrollWidth / 2 - cardWidth;
            // Ajusta 'scrollAmount' para a posição final da primeira metade do conteúdo duplicado
          }
        } else {
          // Se o controle for para a direita
          scrollAmount += cardWidth;
          // Incrementa o valor de 'scrollAmount' pela largura do cartão
          if (scrollAmount >= carousel.scrollWidth / 2) {
            // Se o valor de 'scrollAmount' for maior ou igual à metade da largura total do carrossel
            scrollAmount = 0;
            // Ajusta 'scrollAmount' para 0 (reinicia a rolagem para o início da primeira metade do conteúdo duplicado)
          }
        }
  
        updateScrollPosition();
        // Chama a função para atualizar a posição de rolagem com o novo valor de 'scrollAmount'
      });
    });
  });
  