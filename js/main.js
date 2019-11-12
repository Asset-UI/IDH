jQuery(function () {

	$('.card-header').click(function(){
		$(this).find('.fa-chevron-up').toggleClass('rotated');
	});

	$('.search-container').hide();
	$('#search').click(function(){
		$('.search-container').slideToggle('slow');
	});
	$('.srch-close').click(function(){
		$('.search-container').slideUp('slow');
	});

	$(document).bind("load", function() {
		$(".page").show();
		$(".loader-container").hide();
		$(window).resize();
	});


	$(document).ready(function () {
		$(window).on('beforeunload', function () {
			$(window).scrollTop(0);
		});


		/* Page Loader */
		setTimeout(function () {
			$(".page").show();
			$(".loader-container").hide();
			$(window).resize();
		}, 0);

		// Togg leHeader Menu in Responsive
		$(".header-responsive-open").on("click",function(){
			$('.header-responsive-menu-container').toggleClass("active");
			$("body").toggleClass("menu-active");

			$(this).children(".icon-burger").toggleClass('open');
		});

		// add Class focused to inputs to animate form label
		$('input, select').focus(function(){
			$(this).parents('.form-input').addClass('focused');
			$(this).prev(".form-label").addClass("show");
		});
		$("select").on("change",function(){
			if( $(this).val() === "" ){
				$(this).prev(".form-label").removeClass("show");
				$(this).parent(".form-input").removeClass("focused");
				$(this).blur();
			}
		});
		$('input, select').blur(function(){
			var inputValue = $(this).val();
			if ( inputValue === "" ) {
				$(this).removeClass('filled');
				$(this).parents('.form-input').removeClass('focused');
				$(this).prev(".form-label").removeClass("show");

			} else {
				$(this).addClass('filled');
			}			
		});
		$("input, select").each(function(){
			if($(this).val()){
				$(this).parents('.form-input').addClass('focused');
				$(this).prev(".form-label").addClass("show");
			} 
		});
		
		

		// Wow Init
		new WOW({
			offset: 100
		}).init();

		// set banner height equal to screen height
		$(".banner").ready(function(){
			$(".banner").css("height" , ($(window).height() - $("header").outerHeight()) + "px");
		});
		

		// Window Scroll
		var st, lastScrollTop = 0,  headerHeight, pageHeaderHeight;
		$(".header-container").ready(function(){
			headerHeight = $(".header-container").outerHeight();
			pageHeaderHeight = $(".page-header-container").outerHeight();
		});

		$(document).on("scroll", function(event){
			
			st = $(this).scrollTop();
			$(".dropdown-menu").hide();
			
			if(st > lastScrollTop){
				// Down

				if(st > headerHeight){

					if(!$(".page-content").hasClass("reservation-visit")){
						$(".page").css("margin-top", headerHeight + "px");
						$(".header-top").hide();
						$('.header-container').addClass("sticky");
					}
					else if(st > headerHeight + pageHeaderHeight){
						$(".page").css("margin-top", headerHeight + "px");
						$(".header-top").hide();
						$('.header-container').addClass("sticky");
						$(".reservation-visit .page-header-container").addClass("sticky");
					}
				}

				// if(st > $(".reservation-visit .page-header-container").outerHeight()){
					
				// }
				
			}
			else if(st < lastScrollTop){
				// UP

				if(st < headerHeight){
					$(".page").css("margin-top",  "0px");
					$(".header-top").show();
					$('.header-container').removeClass("sticky");
					$(".reservation-visit .page-header-container").removeClass("sticky");
				}

				
			}
			lastScrollTop = st;
		});


		/* Scroll Top Page in footer */
		$('.scroll-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
		});


		//Fix OBject-Fit Issue in IE
		if (document.documentMode || /Edge/.test(navigator.userAgent)) {
			$('.object-fit').each(function(){
				var imgHieght = $(this).outerHeight();
				var t = $(this),
				s = 'url(' + t.attr('src') + ')',
				p = t.parent(),
				d = $('<div></div>');
				t.hide();
				p.append(d);
					d.css({        // Note: You can change it for your needs
						height: imgHieght,
						'background-size'       : 'cover',
						'background-repeat'     : 'no-repeat',
						'background-position'   : 'center',
						'background-image'      : s
					});
				});
		}
		

		// Home Services
		$('.home-services-slider.slick').slick({
			rtl: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			dots: true,
			prevArrow: null,
			nextArrow: null,
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll:2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});

		// Home packages
		$('.home-packages-slider.slick').slick({
			rtl: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			prevArrow: null,
			nextArrow: null,
			autoplay: true,
			autoplaySpeed: 5000
		});

		// Home banner
		$('.banner-slider.slick').slick({
			rtl: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,
			autoplaySpeed: 5000
		});

		$('.packages-details-slider.slick').slick({
			rtl: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			prevArrow: null,
			nextArrow: null,
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});

		$('.services-presenters-list-slider.slick').slick({
			rtl: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			prevArrow: null,
			nextArrow: null,
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});

		$('.services-devices-slider.slick').slick({
			rtl: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			prevArrow: null,
			nextArrow: null
		});

		$(window).resize(function(){
			$('.header-responsive').removeClass("active");
			$("body").removeClass("menu-active");

			headerHeight = $(".header-container").outerHeight();
		});

	});
});

