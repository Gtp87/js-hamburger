// seleziono le variabili
const hamburger = document.querySelector('.hamburger-menu');
const openHamburger = document.querySelector('.header-right a i');


// apro menu hamburger
openHamburger.addEventListener('click', function(){
    hamburger.classList.add('active');
});

