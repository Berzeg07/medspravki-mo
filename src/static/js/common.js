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

    var contSlider2 = new Swiper('.fillial-slider', {
        slidesPerView: 4,
        spaceBetween: 60,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            374: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            599: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
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
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }
    });

    var myAdvSlider = undefined;
    function initSwiper() {
        var screenWidth = $(window).width();
        if (screenWidth > 991 && myAdvSlider == undefined) {

            var myAdvSlider = new Swiper('.advgallery', {
                slidesPerView: 5,
                spaceBetween: 60,
                loop: true,
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: '.swiper-button-next-adv',
                    prevEl: '.swiper-button-prev-adv',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    1279: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1599: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }
            });
        } else if (screenWidth < 992 && myAdvSlider != undefined) {
            myAdvSlider.destroy();
            myAdvSlider = undefined;
        }
    }

    initSwiper();

    $('.selectform select').selectric();

    var lislider = new Swiper('.ourlisence-slider', {
        slidesPerView: 6,
        spaceBetween: 60,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-n',
            prevEl: '.swiper-button-prev-p',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            599: {
                slidesPerView: 1.4,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
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
                spaceBetween: 50,
            },
        }
    });

});
