function setElementHeight() {
    var windowHeight = window.innerHeight;
    var element = document.querySelector('.page__main-block');
    element.style.minHeight = windowHeight + 'px';
}

// Вызываем функцию при загрузке страницы и при изменении размеров окна
window.addEventListener('resize', setElementHeight);
window.addEventListener('load', setElementHeight);