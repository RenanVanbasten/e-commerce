document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('.subscribe button').addEventListener('click', function() {
        let emailInput = document.querySelector('.subscribe input[type="text"]');
        let email = emailInput.value.trim();
        let validation = document.querySelector('.validation');
    
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailPattern.test(email)) {
            validation.innerHTML = 'Por favor, insira um e-mail válido.';
            validation.classList.remove('ok')
        } else {
           
            validation.innerHTML= 'E-mail válido! Obrigado por se inscrever.';
            validation.classList.add('ok');
        }
    
        emailInput.value = '';
    });
})
