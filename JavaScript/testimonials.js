const controls = document.querySelectorAll('.carousel-control');
const carousel = document.querySelector('.carousel');
const cartoes = document.querySelectorAll('.cartao');
const maxCartoes = cartoes.length;
let cartaoAtual = 0;
const cardWidth = cartoes[0].offsetWidth + parseFloat(getComputedStyle(cartoes[0]).marginRight); // Inclui a margem direita

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("left");
        
        if (isLeft) {
            cartaoAtual -= 1;
        } else {
            cartaoAtual += 1;
        }

        if (cartaoAtual >= maxCartoes) {
            cartaoAtual = 0;
        }

        if (cartaoAtual < 0) {
            cartaoAtual = maxCartoes - 1;
        }

        carousel.scrollLeft = cartaoAtual * cardWidth;
    });
});
