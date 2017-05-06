$(document).ready(function()  {
	
	var headerH = $('#wraper .header').height();
	var bioH = $('main .bio').height();
	var listenH = $('main .listen').height();
	
	//Scroll Bio
	$('.nav-menu #bio-li').click(function()  {
		$('html, body').animate({scrollTop : (headerH + 10)}, 800);
	});
	
	//Scroll Listen
	$('.nav-menu #listen-li').click(function()  {
		$('html, body').animate({scrollTop: (headerH + bioH + 90)}, 800);
	});
	
	//Scroll Contact
	$('.nav-menu #cont-li').click(function()  {
		$('html, body').animate({scrollTop: (headerH + bioH + listenH + 170)}, 800);
	});
	
	//enquiry
	$('.enquiry').click(function()  {
		$('html, body').animate({scrollTop: (headerH + bioH + listenH + 170)}, 800);
	});
});