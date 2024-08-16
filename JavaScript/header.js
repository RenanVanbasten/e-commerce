// Obtendo os elementos
const modal = document.getElementById('modal-menu'); // Seleciona o elemento com o ID 'modal-menu' e armazena na variável 'modal'
const menuToggle = document.querySelector('.menu-toggle'); // Seleciona o primeiro elemento com a classe 'menu-toggle' e armazena na variável 'menuToggle'
const closeBtn = document.querySelector('.close'); // Seleciona o primeiro elemento com a classe 'close' e armazena na variável 'closeBtn'

// Abrir o modal ao clicar no menu-toggle
menuToggle.addEventListener('click', () => {
  modal.style.display = 'block'; // Define a propriedade CSS 'display' do modal para 'block', tornando-o visível
});

// Fechar o modal ao clicar no 'X'
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Define a propriedade CSS 'display' do modal para 'none', ocultando-o
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (event) => {
  // Verifica se o alvo do clique é o próprio modal (não um elemento filho dentro do modal)
  if (event.target === modal) {
    modal.style.display = 'none'; // Define a propriedade CSS 'display' do modal para 'none', ocultando-o
  }
});
