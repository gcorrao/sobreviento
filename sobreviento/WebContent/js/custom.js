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

/* Fitvids init */
$(document).ready(function() {
	'use strict';
	$('.video-content').fitVids();
});