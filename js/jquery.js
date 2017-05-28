$(document).ready(function()  {
	
	//var headerH = $('#wraper #header').outerHeight();
	//var bioH = $('main .bio').outerHeight();
	//var listenH = $('main .listen').outerHeight();
	//var menuH = $('nav#menu').outerHeight();
	 
	alert($('#bio').offset().top);
	alert($('#listen').offset().top);
	alert($('#contact').offset().top);
	
	//Scroll Bio
	$('#menu #bio-li').click(function()  {
		var bioOffset = $("#bio").offset(),
		bioOffsetTop = bioOffset.top;
		
		$('html, body').animate({scrollTop : bioOffsetTop}, 800);
	});
	
	//Scroll Listen
	$('#menu #listen-li').click(function()  {
        var listenOffset = $('#listen').offset();
		var listenOffsetTop = listenOffset.top;
	
		$('html, body').animate({scrollTop: listenOffsetTop}, 800);
	});
	
	//Scroll Contact
	$('#menu #cont-li').click(function()  {
		var contactOffset = $('#contact').offset();
		var contactOffsetTop = contactOffset.top;
		
		$('html, body').animate({scrollTop: contactOffsetTop}, 800);
	});
	
	//enquiry
	$('p .enquiry').click(function()  {
		var contactOffset = $('#contact').offset();
		var contactOffsetTop = contactOffset.top;
		
		$('html, body').animate({scrollTop: contactOffsetTop}, 800);
	});
	
	//enquiry
	$('i#top').click(function()  {
		$('html, body').animate({scrollTop: 0}, 800);
	});
});