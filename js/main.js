'use strict';

// function to create the responsive navigation on the website
// toggles the navmenu 
function respNav(){
	$( "span#navBtn" ).click(function() {
	$( "ul#navMenu" ).slideToggle();
	});

	$(window).resize(function (){
		$("ul#navmenu").removeAttr('style');
	});
}
respNav();

// Slider on the index page code
$(function() {

    //settings for slider
    var width = $('#mainContent').outerWidth();
    var animationSpeed = 1000;
    var pause = 5000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }
	startSlider();
    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

	$("#slider").css("max-width", width);
	$(".slide").css("max-width", width);

});