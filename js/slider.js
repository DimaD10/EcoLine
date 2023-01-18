const slider = new Swiper('.feedback-slider__wrapper', {
    spaceBetween: 40,
    autoHeight: true,
    autoplay: true,
    speed: 500,
    delay: 18000,
    Zindex: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});