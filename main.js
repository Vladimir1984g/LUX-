$(function(){
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                }
            },
            // {
            //     breakpoint: 1000,
            //     settings: {
            //         dots: true,
            //     }
            // }
        ]
    });

    $('.reviews__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1141,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 586,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })

    $('.menu-btn').on('click', function(){
        $('.menu__list').slideToggle()
    })

});