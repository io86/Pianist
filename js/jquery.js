$(document).ready(function()  {
	//Animated title
    $('.div-title h1').addClass('animated fadeInDown');
	$('.div-title h2').addClass('animated fadeInUp');
	$('.div-title h3').addClass('animated fadeIn');
	
	//Scroll Bio
	$('#bio-li').click(function()  {
		$('html, body').animate({scrollTop : 1000}, 800);
		return false;
	});
	
	//Scroll Listen
	var widthWindow = $(window).width();
	
	$('#listen-li').click(function()  {
		if (widthWindow < 450)  {
		    $('html, body').animate({scrollTop: 2100}, 800);
		       return false;
	    } else if (widthWindow < 600) {
			$('html, body').animate({scrollTop: 1900}, 800);
			return false;
	    } else {
			$('html, body').animate({scrollTop: 1700}, 800);
			return false;
		}
	});
	
	//Scroll Availlability
	$('#availlability-li').click(function()  {
	    if (widthWindow < 450)  {
			$('html, body').animate({scrollTop: 2600}, 800);
			return false;
		} else if (widthWindow < 600)  {
			$('html, body').animate({scrollTop: 2400}, 800);
			return false;
		} else {
			$('html, body').animate({scrollTop: 2200}, 800);
			return false;
		}
	});
	
	//Scroll Contact
	$('#contact-li').click(function()  {
		if (widthWindow < 450)  {
			$('html, body').animate({scrollTop: 3150}, 800);
			return false;
		} else if (widthWindow < 600)  {
			$('html, body').animate({scrollTop: 2950}, 800);
			return false;
		} else {
			$('html, body').animate({scrollTop: 2800}, 800);
			return false;
		}
	});
	
	//enquiry
	$('.enquiry').mouseenter(function()  {
		$(this).css("cursor", "pointer");
	});
	$('.enquiry').click(function()  {
		if (widthWindow < 450)  {
			$('html, body').animate({scrollTop: 3150}, 800);
			return false;
		} else if (widthWindow < 600)  {
			$('html, body').animate({scrollTop: 2950}, 800);
			return false;
		} else {
			$('html, body').animate({scrollTop: 2800}, 800);
			return false;
		}
	});
});