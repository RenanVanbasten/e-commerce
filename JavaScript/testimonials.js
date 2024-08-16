// Seleciona todos os elementos com a classe 'carousel-control' e armazena em 'controls'
const controls = document.querySelectorAll('.carousel-control');

// Seleciona o elemento com a classe 'carousel' e armazena em 'carousel'
const carousel = document.querySelector('.carousel');

// Seleciona todos os elementos com a classe 'cartao' e armazena em 'cartoes'
const cartoes = document.querySelectorAll('.cartao');

// Armazena o número total de cartões (cartões) no carrossel
const maxCartoes = cartoes.length;

// Define o índice do cartão atual como 0 (inicialmente, o primeiro cartão é exibido)
let cartaoAtual = 0;

// Calcula a largura de cada cartão, incluindo a margem direita
const cardWidth = cartoes[0].offsetWidth + parseFloat(getComputedStyle(cartoes[0]).marginRight);

// Itera sobre todos os controles de navegação (botões de controle do carrossel)
controls.forEach(control => {
    // Adiciona um ouvinte de evento de clique a cada controle
    control.addEventListener('click', () => {
        // Verifica se o controle clicado é do lado esquerdo
        const isLeft = control.classList.contains("left");
        
        // Se for um controle do lado esquerdo, decrementa o índice do cartão atual
        if (isLeft) {
            cartaoAtual -= 1;
        } else {
            // Se for um controle do lado direito, incrementa o índice do cartão atual
            cartaoAtual += 1;
        }

        // Se o índice do cartão atual for maior ou igual ao número total de cartões, volta ao início
        if (cartaoAtual >= maxCartoes) {
            cartaoAtual = 0;
        }

        // Se o índice do cartão atual for menor que 0, vai para o último cartão
        if (cartaoAtual < 0) {
            cartaoAtual = maxCartoes - 1;
        }

        // Define a posição horizontal de rolagem do carrossel para exibir o cartão atual
        carousel.scrollLeft = cartaoAtual * cardWidth;
    });
});
