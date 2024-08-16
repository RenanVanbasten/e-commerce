document.addEventListener('DOMContentLoaded', function () {
    const closePromo = document.getElementById('close-promo');
    const promoSection = document.querySelector('.promo');
  
    closePromo.addEventListener('click', function () {
      promoSection.style.display = 'none';
    });
  });
  