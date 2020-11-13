$(document).ready(function () {
    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.dropdown-mob').toggleClass('is-active');
    });

    $('.menubtn').click(function () {
        $(this).toggleClass('is-active');
        $('.dropdowndesc').fadeToggle();
    });



    var contSlider = new Swiper('.adress-slider', {
        slidesPerView: 7,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            499: {
                slidesPerView: 1.4,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1279: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1599: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1799: {
                slidesPerView: 6,
                spaceBetween: 20,
            }
        }
    });

});
