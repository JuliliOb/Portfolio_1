//Burger menu

const burger = document.querySelector('.burger');
const navHeader = document.querySelector('.nav_header');

burger.addEventListener('click', function(e) {
    burger.classList.toggle('_active');
    navHeader.classList.toggle('_active');
    document.body.classList.toggle('_lock');
});

//Menu on click

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

//Modal 
const modalOpen = document.querySelectorAll('[data-modal]'),
    modalClose = document.querySelector('[data-close]'),
    modal = document.querySelector('.modal');

modalOpen.forEach(btn => {
    btn.addEventListener('click', function(e) {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.classList.toggle('_lock');
    });
});

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.classList.toggle('_lock');
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
    }
});

// Send request
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json));