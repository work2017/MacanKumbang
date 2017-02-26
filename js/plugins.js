$(document).ready(function () {
    "use strict";
	// Nice scroll
	$("html").niceScroll();
	$('.carousel').carousel({
		interval: 5000
	});

    // Caching The Scroll Top element
	var scrollButton = $("#scroll-top");
	$(window).scroll(function () {
		$(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
	});
	// Click on Button To Scroll top
	scrollButton.click(function(){
		$("html,body").animate({scrollTop:0},600);
	});
    
	// Load More Button
	/*$(function(){
    $(".portfolio-item").slice(0, 4).show(); // select the first ten
		$("#load-more").click(function(e){ // click event for load more
			e.preventDefault();
			$("div:hidden").slice(0, 3).show(); // select next 10 hidden divs and show them
			if($("div:hidden").length == 0){ // check if any hidden divs still exist
				alert("No more photos"); // alert if there are none left
			}
		});
	});*/

	$(function () {
		$(".portfolio-item").slice(0, 6).show();
		$("#load-more").on('click', function (e) {
			e.preventDefault();
			$(".portfolio-item:hidden").slice(0, 6).slideDown();
			if ($(".portfolio-item:hidden").length === 0) {
				$("#load-more").hide();
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top
			}, 1500);
		});
	});
    
    // Instantiate MixItUp:
	$('#Container').mixItUp();
    
    $(".shuffle li").click(function(){
        $(this).addClass('current').siblings().removeClass('current');
        $(".portfolio-item:hidden").show();
        $("#load-more").hide();
    });
    
    // Links Add Active Class
    $('.nav li').click(function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    // Smooth Scroll To Div
    $('.nav li a').click( function(){
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 50
        },1000);
    });
});
