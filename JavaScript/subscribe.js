// Adiciona um evento de clique ao botão de inscrição
document.querySelector('.subscribe button').addEventListener('click', function() {
    // Obtém o valor do input de e-mail
    let emailInput = document.querySelector('.subscribe input[type="text"]');
    let email = emailInput.value.trim();

    // Expressão regular para validar o formato do e-mail
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o e-mail corresponde ao padrão
    if (!emailPattern.test(email)) {
        // Mostra um alerta se o e-mail não for válido
        alert('Por favor, insira um e-mail válido.');
    } else {
        // Mostra uma mensagem de sucesso (ou outra ação) se o e-mail for válido
        alert('E-mail válido! Obrigado por se inscrever.');
    }

    // Limpa o valor do input
    emailInput.value = '';
});
