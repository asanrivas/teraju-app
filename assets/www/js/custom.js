
/* CUSTOM JAVASCRIPT FILE */

/*********************************************************************** SWIP SLIDER STARTS */

$(document).ready(function () {

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }

    $("#swip-slider").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
		/*navigation: true,
        navigationText: [
        "<i class='icon-chevron-left icon-white'></i>",
        "<i class='icon-chevron-right icon-white'></i>"
        ],*/
        //Call beforeInit callback, elem parameter point to $("#photo-gallery")
        beforeInit: function (elem) {
            random(elem);
        }
    });
});

/*********************************************************************** SWIP SLIDER ENDS */

/*********************************************************************** BASIC CAROUSEL STARTS */

$(document).ready(function () {

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }

    $("#basic-carousel").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
        items: 4,
        itemsDesktop: [1199, 9],
        itemsDesktopSmall: [979, 8],
        itemsTablet: [768, 5],
        itemsMobile: [479, 3],
/*navigation: true,
        navigationText: [
        "<i class='icon-chevron-left icon-white'></i>",
        "<i class='icon-chevron-right icon-white'></i>"
        ],*/
        //Call beforeInit callback, elem parameter point to $("#photo-gallery")
        beforeInit: function (elem) {
            random(elem);
        }

    });

});

/*********************************************************************** BASIC CAROUSEL ENDS */

/*********************************************************************** OUR SKILLS CAROUSEL STARTS */

$(document).ready(function () {
    $("#our-skills").owlCarousel({
        autoPlay: 3000,
        slideSpeed: 200,
        items: 6,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [979, 6],
        itemsTablet: [768, 5],
        itemsMobile: [479, 3],
    });

});

/*********************************************************************** OUR SKILLS CAROUSEL ENDS */

/*********************************************************************** TESTIMONIALS CAROUSEL STARTS */

$(document).ready(function () {
    $("#testimonials").owlCarousel({
        autoPlay: 6000,
        slideSpeed: 200,
        paginationSpeed: 800,
        goToFirstSpeed: 800,
        /*navigation : true,*/
        pagination: true,
        autoHeight: true,
        singleItem: true
    });
});

/*********************************************************************** TESTIMONIALS CAROUSEL ENDS */

/*********************************************************************** PRODUCT REVIEWS CAROUSEL STARTS */

$(document).ready(function () {
    $("#product-reviews").owlCarousel({
        autoPlay: 6000,
        slideSpeed: 200,
        paginationSpeed: 800,
        goToFirstSpeed: 800,
        /*navigation : true,*/
        pagination: true,
        autoHeight: true,
        singleItem: true
    });
});

/*********************************************************************** PRODUCT REVIEWS CAROUSEL ENDS */

/*********************************************************************** PHOTO GALLERY CAROUSEL STARTS */

$(document).ready(function () {

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }

    $("#photo-gallery").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
        items: 6,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [979, 6],
        itemsTablet: [768, 5],
        itemsMobile: [479, 3],
		/*navigation: true,
        navigationText: [
        "<i class='icon-chevron-left icon-white'></i>",
        "<i class='icon-chevron-right icon-white'></i>"
        ],*/
        //Call beforeInit callback, elem parameter point to $("#photo-gallery")
        beforeInit: function (elem) {
            random(elem);
        }

    });

});

/*********************************************************************** PHOTO GALLERY CAROUSEL ENDS */

/*********************************************************************** OUR TEAM CAROUSEL STARTS */

$(document).ready(function () {

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }

    $("#our-team").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
        items: 4,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 5],
        itemsTablet: [768, 3],
        itemsMobile: [479, 2],
        autoHeight: true,
		/*navigation: true,
        navigationText: [
        "<i class='icon-chevron-left icon-white'></i>",
        "<i class='icon-chevron-right icon-white'></i>"
        ],*/
        //Call beforeInit callback, elem parameter point to $("#our-team")
        beforeInit: function (elem) {
            random(elem);
        }

    });

});

/*********************************************************************** OUR TEAM CAROUSEL ENDS */

/*********************************************************************** SERVICER ICONS CAROUSEL STARTS */


$(document).ready(function () {
    $("#services-icons").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 400,
		/*paginationSpeed : 2000,
        goToFirstSpeed : 2000,*/
        /*navigation : true,*/
        pagination: true,
        autoHeight: true,
        singleItem: true
    });
});

/*********************************************************************** SERVICER ICONS CAROUSEL ENDS */

/*********************************************************************** PRODUCT 1 CAROUSEL STARTS */

$(document).ready(function () {
    $("#products-1").owlCarousel({
        autoPlay: 4000,
        slideSpeed: 400,
		/*paginationSpeed : 2000,
        goToFirstSpeed : 2000,*/
        /*navigation : true,*/
        pagination: true,
        autoHeight: true,
        singleItem: true
    });
});

/*********************************************************************** PRODUCT 1 CAROUSEL ENDS */

/*********************************************************************** PRODUCT 2 CAROUSEL STARTS */

$(document).ready(function () {

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }

    $("#products-2").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
        items: 4,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 5],
        itemsTablet: [768, 3],
        itemsMobile: [479, 2],
        autoHeight: true,
		/*navigation: true,
        navigationText: [
        "<i class='icon-chevron-left icon-white'></i>",
        "<i class='icon-chevron-right icon-white'></i>"
        ],*/
        //Call beforeInit callback, elem parameter point to $("#our-team")
        beforeInit: function (elem) {
            random(elem);
        }

    });

});

/*********************************************************************** PRODUCT 2 CAROUSEL ENDS */

/*********************************************************************** DONUT CHART STARTS */

$("#donutchart1").donutchart({
    'size': 90,
    'fgColor': '#343434',
    'donutwidth': 6,
    'textsize': 14
});
$("#donutchart1").donutchart("animate");

$("#donutchart2").donutchart({
    'size': 90,
    'fgColor': '#343434',
    'donutwidth': 6,
    'textsize': 14
});
$("#donutchart2").donutchart("animate");

$("#donutchart3").donutchart({
    'size': 90,
    'fgColor': '#343434',
    'donutwidth': 6,
    'textsize': 14
});
$("#donutchart3").donutchart("animate");

$("#donutchart4").donutchart({
    'size': 90,
    'fgColor': '#343434',
    'donutwidth': 6,
    'textsize': 14
});
$("#donutchart4").donutchart("animate");

$("#donutchart5").donutchart({
    'size': 90,
    'fgColor': '#343434',
    'donutwidth': 6,
    'textsize': 14
});
$("#donutchart5").donutchart("animate");

$("#donutchart6").donutchart({
    'size': 90,
    'fgColor': '#343434',
    'donutwidth': 6,
    'textsize': 14
});
$("#donutchart6").donutchart("animate");


/*********************************************************************** DONUT CHART ENDS */

/*********************************************************************** TOTOP STARTS */

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({

            scrollTop: 0
        }, 600);
        return false;
    });

});

/*********************************************************************** TOTOP ENDS */