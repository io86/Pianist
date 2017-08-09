$(document).ready(function () {

    //Array with src of photoes
	var srcArray = ['../img/gallery_1.jpg', '../img/gallery_2.jpg', '../img/gallery_3.jpg', '../img/gallery_4.jpg', '../img/gallery_5.jpg', '../img/gallery_6.jpg', '../img/gallery_7.jpg', '../img/gallery_8.jpg', '../img/gallery_9.jpg'];
    
    //Display image that is clicked
    $('.inside-main img').click(function () {

        var src = $(this).attr('src');
        
        $('.modal-box').css('display', 'block');
        
        $('.modal-box img').attr('src', src);
        
    });
    
    //Change image when is clicked
    $('.modal-box img').click(function () {
        var srcActive = $('.modal-box img').attr('src'),
            indexOfSrc = srcArray.indexOf(srcActive);
        
        if (indexOfSrc === 8) {
            indexOfSrc = -1;
        }
        
        $('.modal-box img').attr('src', srcArray[indexOfSrc + 1]);

    });
    
    //Hover effect on image
    $('.frame-img img').hover(function () {
        $(this).css('box-shadow', '2px 2px 10px #000000');
    },
        function () {
            $(this).css('box-shadow', 'none');
        });
    
    //Close modal-box
    $('.close').click(function () {
        $('.modal-box').css('display', 'none');
    });
    
});