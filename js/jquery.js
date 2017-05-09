$(document).ready(function()  {
	
	var headerH = $('#wraper #header').outerHeight();
	var bioH = $('main .bio').outerHeight();
	var listenH = $('main .listen').outerHeight();
	var menuH = $('nav#menu').outerHeight();
	
	//Scroll Bio
	$('#menu #bio-li').click(function()  {
		$('html, body').animate({scrollTop : headerH}, 800);
	});
	
	//Scroll Listen
	$('#menu #listen-li').click(function()  {
		$('html, body').animate({scrollTop: (headerH + bioH )}, 800);
	});
	
	//Scroll Contact
	$('#menu #cont-li').click(function()  {
		$('html, body').animate({scrollTop: (headerH + bioH + listenH - menuH )}, 800);
	});
	
	//enquiry
	$('p .enquiry').click(function()  {
		$('html, body').animate({scrollTop: (headerH + bioH + listenH)}, 800);
	});
	
	//enquiry
	$('i#top').click(function()  {
		$('html, body').animate({scrollTop: 0}, 800);
	});
});