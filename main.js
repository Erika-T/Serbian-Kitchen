'use strict';

{
    $(function () {

        //Fixed nav ---------------------------------------------------------
        var _window = $(window),
        _header = $('.site_header'),
        heroBottom;

        _window.on('scroll', function() {
            heroBottom = $('.hero').height();
            if(_window.scrollTop() > heroBottom){
                _header.addClass('fixed');
            } else {
                _header.removeClass('fixed');
            }
        });

        _window.trigger('scroll');

        //to page top ---------------------------------------------------------
        $(document).ready(function() {
            var pagetop = $('.pagetop');
              $(window).scroll(function () {
                 if ($(this).scrollTop() > 100) {
                      pagetop.fadeIn();
                 } else {
                      pagetop.fadeOut();
                      }
                 });
                 pagetop.click(function () {
                     $('body, html').animate({ scrollTop: 0 }, 500);
                        return false;
            });

            // Hamburger nav ---------------------------------------------------------
            var navFlg = false;
            $('.hamburger').on('click',function(){
                $('.hamburger_line').toggleClass('active');
                if(!navFlg){
                    $('.hmenu').each(function(){
                        $(this).animate({
                            'opacity' : 1,
                            'height' : 'auto'
                        });
                    });
                    navFlg = true;
                } else {
                    $('.hmenu').css({
                        'opacity' : 0
                    });
                    navFlg = false;
                }
            });
        });

        // Smooth Scroll ---------------------------------------------------------
        $('a[href^="#"]').click(function() {
            let speed = 500;
            let href = $(this).attr("href");
            let target = $(href == "#" || href == "" ? 'html' : href);
            let position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });

        // Scroll Effect ---------------------------------------------------------
        $(window).on('scroll', function() {
            $('.effect-fade').each(function() {
                let elemPos = $(this).offset().top;
                let scroll = $(window).scrollTop();
                let windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight) {
                    $(this).addClass('effect-scroll');
                }
            });
        });
    });
}