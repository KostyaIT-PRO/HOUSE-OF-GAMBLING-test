
// Свайпер в  первой секции

const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    mousewheel: true,
});


//Меню гамбургур

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');


menuBtn.addEventListener('click', function(){
    menu.classList.toggle('menu--active');

    menuList.classList.toggle('menu__list--visited');

})
