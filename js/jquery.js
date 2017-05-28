$(document).ready(function () {
	
	function scrolledArea(el) {
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
	$('#enquir').click(function () {
		scrolledArea($('#contact'));
	});
	
	//Scrrol to top
	$('i#top').click(function () {
		scrolledArea($('body'));
	});
	
	
});