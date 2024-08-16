// Obtendo os elementos
const modal = document.getElementById('modal-menu');
const menuToggle = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close');

// Abrir o modal ao clicar no menu-toggle
menuToggle.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Fechar o modal ao clicar no 'X'
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
