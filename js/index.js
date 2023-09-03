function setElementHeight() {
    var windowHeight = window.innerHeight;
    var element = document.getElementsByClassName('page__main-block');
    element.style.height = windowHeight + 'px';
}

// Вызываем функцию при загрузке страницы и при изменении размеров окна
window.addEventListener('resize', setElementHeight);
window.addEventListener('load', setElementHeight);