lightbox.option({
    'disableScrolling': true,
})

const buttons = document.querySelectorAll('.button-g');
const galleryBoxes = document.querySelectorAll('div.pic-box');
let click = 0;

buttons.forEach((btn, index) => btn.addEventListener("click",
    () => {
        (galleryBoxes[index]).classList.toggle('open');

    }))