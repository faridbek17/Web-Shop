const menuOpenBtn = document.querySelector('.header__btn-menu');
const menuCloseBtn = document.querySelector('.header__mobile-closeBTN');
const menu = document.querySelector('.header__menu-mobile');

function openMenu(){
    menu.classList.add('active');
}
function closeMenu(){
    menu.classList.remove('active');
}

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);