const menuBtn = document.querySelector('#menuIcon');
const menu = document.querySelector('#sideNav');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
})

window.addEventListener('mouseup', e => {
    if (e.target != menu && e.target.parentNode != menu &&
        e.target != menuBtn && e.target.parentNode != menuBtn) {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
    }
})