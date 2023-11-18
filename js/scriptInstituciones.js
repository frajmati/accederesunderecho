import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

new Swiper(".swiper", {
    direction: "horizontal",
    speed: 800,
    loop: true,
    
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // autoplay: {
    //     delay: 2000
    // }

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: "true",
    }
});