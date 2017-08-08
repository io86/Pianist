$(document).ready(function () {
	
    $('.btn-menu').click(function () {
        $('.navi').slideToggle();
        
        $('.line-btn:nth-child(1)').toggle();
        
        $('.line-btn:nth-child(2)').toggleClass('rotate-first');
        $('.line-btn:nth-child(3)').toggleClass('rotate-second');
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
    
    
    //Calendar
    var monthsArr = ["January", "February", "March", "April", "May", "Juny", "July", "August", "September", "Oktober", "November", "December"],
        i = 8;
    
    $('.left').click(function () {
        $('.list-months li').text(monthsArr[i-1]);
        
        i -= 1;
        
        if(i === 0) {
            i = 12;
        }
    });
    
    $('.right').click(function () {
        $('.list-months li').text(monthsArr[i+1]);
        
        i += 1;
        
        if(i === 11) {
            i = -1;
        }
    });
    
    //Content of the table
    for(var i=4;i<31;i++) {
        for(var j=0;j<31;j++){
            $('td:nth-child(i)').text(j);
        }
    }
   
    
    /*function scrolledArea(el) {
		var elOffset = el.offset(),
		    elOffsetTop = elOffset.top;
			
		$('html, body').animate({scrollTop: elOffsetTop}, 800);
	}
	
	//Scroll Bio
	$('#bio-li').click(function () {
	    scrolledArea($('#bio'));
	});
	
	//Scroll Listen
	$('#listen-li').click(function () {
	    scrolledArea($('#listen'));
	});
	
	//Scroll Contact
	$('#cont-li').click(function () {
	    scrolledArea($('#contact'));
	});
	
	//enquiry
	$('.enquiry').click(function () {
		scrolledArea($('#contact'));
	});
	
	//Scroll to top
	$('i#top').click(function () {
		scrolledArea($('body'));
	});*/
	
	
});