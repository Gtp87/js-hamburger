// seleziono le variabili
const hamburger = document.querySelector('.hamburger-menu');
const openHamburger = document.querySelector('.header-right a i');
const closeHamburger = document.querySelector('.close');



// apro menu hamburger
openHamburger.addEventListener('click', function(){
    hamburger.classList.add('active');
});

// chiudo menu hamburger
closeHamburger.addEventListener('click', function(){
    hamburger.classList.remove('active');
});
