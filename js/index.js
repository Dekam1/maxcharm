document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('resize', function () {
        var screenHeight = window.innerHeight;
        var elements = document.getElementsByClassName('page__main-block');

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.height = screenHeight + 'px';
        }
    });
});