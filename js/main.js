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

    $(function () {
        $('.tab_menu li').on('click', function (event) {
            event.preventDefault();
            var idx = $(this).index();
            $('.tab_content>div').removeClass('on');
            $('.tab_content>div').eq(idx).addClass('on');
            $('.tab_menu li').removeClass('on');
            $('.tab_menu li').eq(idx).addClass('on');
        });
    });
})