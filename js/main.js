"use strict";

$(document).ready(function () {

    /* smooth scroll */
    $('.main-nav-link').on('click', function (e) {
        e.preventDefault();

        var target = $(this.hash);
        var offset = target.offset().top - 30;

        $('html, body').animate({
            scrollTop: offset
        }, 1000);
        
        /* hamburger menu ma się schować po kliknięciu na link */
        if (window.innerWidth <= 768) {
            $('#navbar').collapse("toggle");
        }

    });
    

    $('body').scrollspy({ target: '#main-nav' });
    
    
    /* zmiana koloru tła menu podczas scrollowania */
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