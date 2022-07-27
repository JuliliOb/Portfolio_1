// Меню бургер

const burger = document.querySelector('.burger');
const navHeader = document.querySelector('.nav_header');

burger.addEventListener('click', function(e) {
    burger.classList.toggle('_active');
    navHeader.classList.toggle('_active');
    document.body.classList.toggle('_lock');
});

//Прокрутка при клике

const navigationLink = document.querySelectorAll('.navigation_link[data-goto]');
navigationLink.forEach(navigationLink => {
    navigationLink.addEventListener('click', onMenuLinkClick);
});

function onMenuLinkClick(e) {
    const navigationLink = e.target;
    const gotoBlock = document.querySelector(navigationLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

    if (burger.classList.contains('_active')) {
        burger.classList.remove('_active');
        navHeader.classList.remove('_active');
        document.body.classList.remove('_lock');
    }

    window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
    });
    e.preventDefault();
}