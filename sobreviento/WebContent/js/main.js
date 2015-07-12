/* Smooth Navigation */
$(document).ready(
		function() {
			'use strict';
			$('.nav').onePageNav({
				currentClass : 'current',
				scrollSpeed : 1000,
				easing : 'easeInOutQuint'
			});
			$(window).bind(
					'scroll',
					function(e) {
						var scrollPos = $(window).scrollTop();
						scrollPos > 220 ? $('.sticky-section').addClass(
								'nav-bg') : $('.sticky-section').removeClass(
								'nav-bg');
					});
		});

/* NiceScroll */
$(document).ready(function() {
	'use strict';
	$("html").niceScroll({
		cursorcolor : '#E74C3C',
		cursoropacitymin : '1',
		cursorborder : '0px',
		cursorborderradius : '0px',
		cursorwidth : '5px',
		cursorminheight : 60,
		horizrailenabled : false,
		zindex : 1090
	});
});

/* Backgroung slider */
$(window).ready(function() {
	'use strict';
	$.vegas('slideshow', {
		backgrounds : [ {
			src : 'images/playing_cho.jpg',
			fade : 1000
		}, {
			src : 'images/playing_flor.jpg',
			fade : 1000
		}, {
			src : 'images/playing_seba.jpg',
			fade : 1000
		}, {
			src : 'images/playing_pablo.jpg',
			fade : 1000
		} ]
	})();
});

/* Scroll into viewPort Animation */
$(document).ready(
		function() {
			'use strict';
			$('.animated').appear(
					function() {
						var element = $(this), animation = element
								.data('animation'), animationDelay = element
								.data('animation-delay');
						if (animationDelay) {

							setTimeout(function() {
								element.addClass(animation + " visible");
							}, animationDelay);

						} else {
							element.addClass(animation + " visible");
						}
					});
		});

/* Fitvids init */
$(document).ready(function() {
	'use strict';
	$('.video-content').fitVids();
});

/* BXslider */
$(document).ready(function() {
	'use strict';
	$('.bxslider').bxSlider({
		video : true,
		useCSS : false
	});
});

/* LiteAccordion */
$(document).ready(function() {
	'use strict';
	$('.liteAccordion').liteAccordion({
		containerWidth : 960,
		containerHeight : 490,
		headerWidth : 48,

		theme : 'dark',
		rounded : true,
		enumerateSlides : true,
		firstSlide : 2,
		linkable : true,
		easing : 'easeInOutQuart',

		activateOn : 'click',
		firstSlide : 1,
		slideSpeed : 500,
		onTriggerSlide : function() {
		},
		onSlideAnimComplete : function() {
		},

		autoPlay : false,
		pauseOnHover : false,
		cycleSpeed : 6000,
		easing : 'swing'
	});
});