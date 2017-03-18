//Show-hide menu
function toggleMenu()  {
	var menu = document.getElementById('ulNav');
	if (menu.style.display == "block") {
	    menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}

//Hover effect on li and cursor pointer, on submit button too
function hoverLi(id, colorHover, cur)  {
	hoverLink = document.getElementById(id);
	hoverLink.style.borderBottom = colorHover;
	hoverLink.style.cursor = cur;
}

//The navigation bar is displayed with a black background when the srolled area is more than 100px
function scrollSeite()  {
	var scrollDistance = window.pageYOffset;
	var navig = document.getElementById('navigation');
	var scrnWidth = window.innerWidth;
	
	if ((scrollDistance > 100) && (scrnWidth > 801)) {
		navig.style.background = "#000000";
	} else {
		navig.style.background = "transparent";
	}
}

//Calendar
var slideIndex = 1;
showSlides(slideIndex);
var slideMonth = 1;
showMonth(slideMonth);

function plusSlides(n) {
  showSlides(slideIndex += n);
  showMonth(slideMonth += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  showMonth(slideMonth = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}

function showMonth(n)  {
	var i;
	var month = document.getElementsByClassName("month");
	if (n > month.length) {slideMonth = 1}
	if (n < 1) {slideMonth = month.length}
	for (i = 0; i < month.length; i++) {
		month[i].style.display = "none";
	}
	month[slideMonth-1].style.display = "block";
}

//Validation of form
function validateForm()  {
	var name = document.myForm.name.value;
	var email = document.myForm.email.value;
	var message = document.myForm.message.value;
	var lengthText = message.length;
	
	//Validate if all fields are filled
    if ((name==null || name=="") || (email==null || email=="") || (message==null || message=="")) {
	   alert("Please fill all the fields");
	   return false;
	}
	
	//Validate if the Name field contain only letters
	if (!/[a-zA-Z\s]+/.test(document.myForm.name.value)) {
        alert("Please fill correctly your Name");
        return false;
    }
	
	//Validate the email address
	var atposition = email.indexOf("@");
	var dotposition = email.lastIndexOf(".");
	
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) {
		alert("Please enter a valid  Email address");
		return false;
	}
}

//Scroll to the Top
function TopScrollTo() {
	var scrollVertical = window.pageYOffset;
    if (scrollVertical != 0)  {
       setTimeout(function() {
          window.scrollTo(0,window.scrollY-200);
          TopScrollTo();
       }, 10);
    }
}