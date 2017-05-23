"use strict";

$(document).ready(function () {


    $('.main-nav-link').on('click', function (e) {
        e.preventDefault();

        var target = $(this.hash);
        var offset = target.offset().top - 30;

        $('html, body').animate({
            scrollTop: offset
        }, 1000);
        
    
        if (window.innerWidth <= 768) {
            $('#navbar').collapse("toggle");
        }

    });
    

    $('body').scrollspy({ target: '#main-nav' });
    

    function changeMenuColorAndOpacity() {
        if (window.scrollY >= 100) {
            $("#main-nav").css({ "background": "#fff"});
            $("#main-nav .navbar-nav>li>a").css({color: "#777"});
            $("#main-nav .navbar-nav>li>a:hover").css({color: "#0ed8d6;"});

        } else if (window.scrollY < 100 && window.innerWidth <= 768) {
            
            $("#main-nav").css({ "background": "#fff"});
            $("#main-nav .navbar-nav>li>a").css({color: "#777"});
            $("#main-nav .navbar-nav>li>a:hover").css({color: "#0ed8d6;"});

        } else {
            $("#main-nav").css({ "background": "none"});
            $("#main-nav .navbar-nav>li>a").css({color: "#fff"});

        }
    };
    
    changeMenuColorAndOpacity();
    
    $(window).scroll(function() {
        changeMenuColorAndOpacity();
    });
    
    $(window).resize(function() {
        changeMenuColorAndOpacity();
    });
    
});

$(document).on('click', 'a[href^="#"]', function(event){
		event.preventDefault();
		
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') //dla tego atrybutu pobierz wartość href //
			).offset().top - 91}, 500);
		})
	});
	