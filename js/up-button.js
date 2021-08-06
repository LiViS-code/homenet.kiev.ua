// плавная прокрутка содержимого страницы вверх
const numLinesScroll = -50;
const timeOut = 15;
const linesScrolled = 100;

const smoothJumpUp = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0,numLinesScroll);
        setTimeout(smoothJumpUp, timeOut);
    }
}

window.onscroll = function() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > linesScrolled) {
    document.getElementById('linkup').style.display = 'block';
    } else {
    document.getElementById('linkup').style.display = 'none';
    }
}
