function activateHamburger() {
    const burgerItem = document.querySelector('.hamburger');
    // console.log(burgerItem);
    const menu = document.querySelector('.nav_header');
    const menuCloseItem = document.querySelector('.nav_header_close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav_header_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav_header_active');
    });
};