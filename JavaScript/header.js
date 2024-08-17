// Obtendo os elementos
const modal = document.getElementById('modal-menu');
const menuToggle = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close'); 


menuToggle.addEventListener('click', () => {
  modal.style.display = 'block';
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
