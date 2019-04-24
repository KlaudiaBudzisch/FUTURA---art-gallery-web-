const openBtn = document.querySelector('#open');

const openSite = function () {
    document.querySelector('div#fluid').classList.add('intro')
    openBtn.style.opacity = '0';
}

openBtn.addEventListener('click', function () {
    openSite();
    setInterval(function () {
        document.querySelector('div#fluid').style.opacity = '0';
        document.querySelector('div.title').style.opacity = '0';
    }, 1200);

    setInterval(function () {
        document.querySelector('section.load-page').classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 2900);

    setInterval(function () {
        document.querySelector('main').style.opacity = '1';
    }, 3000);

})

// const bgc = document.querySelector('.bgc');
// const windowWidth = window.innerWidth / 2;
// const windowHeight = window.innerHeight / 2;

// bgc.addEventListener('mousemove', (e) => {
//     const mouseX = e.clientX / windowWidth;
//     const mouseY = e.clientY / windowHeight;
//     bgc.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
// })