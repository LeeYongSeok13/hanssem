$(function () {
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

    $('.tab_menu li').on('click', function (event) {
        event.preventDefault();
        var idx = $(this).index();
        $('.tab_inner>div').removeClass('on');
        $('.tab_inner>div').eq(idx).addClass('on');
        $('.tab_menu li').removeClass('on');
        $('.tab_menu li').eq(idx).addClass('on');
    })
})