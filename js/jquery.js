$(document).ready(function () {
	
    $('.btn-menu').click(function () {
        $('.navi').slideToggle();
        
        $('.line-btn:nth-child(1)').toggle();
        
        $('.line-btn:nth-child(2)').toggleClass('rotate-first');
        $('.line-btn:nth-child(3)').toggleClass('rotate-second');
    });
    
    $('.mobile-nav li').hover(function () {
        $(this).css('border-bottom', '2px solid green');
    },
        function () {
            $(this).css('border-bottom', '2px solid transparent');
        });
    
    //Title under the image profil is appeared
    var $h1Title = $('.title h1'),
        $h2Title = $('.title h2'),
        $imgProfil = $('.img-profil');
    
    function title(x, y) {
        x.delay(y).fadeIn();
    }
    

    title($h1Title, 500);
    title($h2Title, 1000);
	
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