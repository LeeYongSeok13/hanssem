$(function () {

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.gnb>ul>li>ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
        $('.gnb>ul>li>ul').removeAttr('style')
    });

    $('.main_slider').slick({
        arrows: false,
        dots: true,
    });

    $('.angle i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev');
    });
    $('.angle i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext');
    });

    $('.package_slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.package_arrow i:nth-child(1)').on('click', function () {
        $('.package_slider').slick('slickPrev');
    });

    $('.package_arrow i:nth-child(2)').on('click', function () {
        $('.package_slider').slick('slickNext');
    });

    $('.tab_menu li').on('click', function (event) {
        event.preventDefault();
        var idx = $(this).index();
        $('.tab_content>div').removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on');
        $('.tab_menu li').removeClass('on');
        $('.tab_menu li').eq(idx).addClass('on');
    });

    var figureSlider01 = $('.tab_content .no1');
    var figureSlider02 = $('.tab_content .no2');
    var figureSlider03 = $('.tab_content .no3');
    var slickOptions = {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    $(window).on('load resize', function () {
        if ($(window).width() > 768) {
            figureSlider01.slick('unslick');
            figureSlider02.slick('unslick');
            figureSlider03.slick('unslick');
        } else {
            figureSlider01.not('.slick-initialized').slick(slickOptions);
            figureSlider02.not('.slick-initialized').slick(slickOptions);
            figureSlider03.not('.slick-initialized').slick(slickOptions);
        }
    });

    $('.event_slider').slick({
        arrows: false,
        dots: true,
        fade: true,
    });

    $('.event_angle i:nth-child(1)').on('click', function () {
        $('.event_slider').slick('slickPrev')
    });
    $('.event_angle i:nth-child(2)').on('click', function () {
        $('.event_slider').slick('slickNext')
    });
});
