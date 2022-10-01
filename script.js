// Nav-Bar
const btnMobile = document.querySelector('#btn-mobile');
const hideElement = document.querySelector('#menu');



function toogleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
    
}
btnMobile.addEventListener('click', toogleMenu);
btnMobile.addEventListener('touchstart', toogleMenu);
hideElement.addEventListener('click', toogleMenu)

// Nav-Bar

// Function Stars
function stars() {
    let amount = 400;
    let main = document.querySelector('.main');
    let i = 0;
    while (i < amount) {
        let drop = document.createElement('i');

        let size = Math.random() * 2;
        let posX = Math.floor(Math.random() * 4000);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;

        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + duration + 's';

        main.appendChild(drop);
        i++;

    }
}
stars();
// Function Stars
