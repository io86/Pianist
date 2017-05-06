function laden(){
	var name = document.getElementById('name');
	var beruf = document.getElementById('beruf');
	var stand = document.getElementById('stand');
	
	name.className = 'animated fadeInDown';
	beruf.className = 'animated fadeInUp';
	stand.className = 'animated fadeIn';
		
}

//Toggle menu with click button
function toggleMenu(){
	var menu = document.getElementById('menu');
	
	menu.classList.toggle('open');
}

//Hover effect in menu
function hoverLi(id, color, curs){
	var li = document.getElementById(id);
	
	li.style.borderTop = color;
	li.style.borderBottom = color;
	li.style.cursor = curs;
}

//"Unhover" effect in menu"
function unhoverLi(id, color){
	var li = document.getElementById(id);
	
	li.style.borderBottom = color;
	li.style.borderTop = color;
}


//Sroll to the Top
var widthWind = window.innerWidth;

function topScrollTo(scrollDuration){
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}







	


	