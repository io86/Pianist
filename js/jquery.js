$(document).ready(function () {
    var $h1Title = $('.title h1'),
        $h2Title = $('.title h2'),
        $imgProfil = $('.img-profil');
        
    
    
    $('.btn-menu').click(function () {
        $('.navi').slideToggle();
        
        $('.line-btn:eq(0)').toggle();
        
        $('.line-btn:eq(1)').toggleClass('rotate-first');
        $('.line-btn:eq(2)').toggleClass('rotate-second');
    });
    
    $('.mobile-nav li').hover(function () {
        $(this).css('border-bottom', '2px solid green');
    },
        function () {
            $(this).css('border-bottom', '2px solid transparent');
        });
    
    //Title under the image profil is appeared    
    function title(d1, d2) {
        $h1Title.delay(d1).fadeIn();
        $h2Title.delay(d2).fadeIn();
    }
    
    title(500, 1000);
     
	
    //Scroll until the appropriate area
    function scrolledArea(el) {
        var elOffset = el.offset().top;
        $('html, body').animate({scrollTop: elOffset}, 800);
    }
    
    $('.about-mobile, .about-black').click(function () {
        scrolledArea($('.about'));
    });
    
    $('.concerts-mobile, .concerts-black').click(function () {
        scrolledArea($('.concerts'));
    });
    
    $('.calendar-mobile, .calendar-black').click(function () {
        scrolledArea($('.availability'));
    });
    
    $('.contact-mobile, .contact-black').click(function () {
        scrolledArea($('.contact'));
    });
    
    $('.green').click(function () {
        scrolledArea($('.contact'));
    });
    
    $('.back-top').click(function () {
        scrolledArea($('header'));
    });
	
});