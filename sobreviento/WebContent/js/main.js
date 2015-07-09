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

/* Countdown */
$(document)
		.ready(
				function() {
					'use strict';
					var labels = [ 'weeks', 'days', 'hours', 'minutes',
							'seconds' ], nextYear = (new Date().getFullYear() + 1)
							+ '/01/01', currDate = '00:00:00:00:00', nextDate = '00:00:00:00:00', parser = /([0-9]{2})/gi, $example = $('#countdown');
					// Parse countdown string to an object
					function strfobj(str) {
						var parsed = str.match(parser), obj = {};
						labels.forEach(function(label, i) {
							obj[label] = parsed[i]
						});
						return obj;
					}
					// Return the time components that diffs
					function diff(obj1, obj2) {
						var diff = [];
						labels.forEach(function(key) {
							if (obj1[key] !== obj2[key]) {
								diff.push(key);
							}
						});
						return diff;
					}
					// Starts the countdown
					$example.countdown(nextYear, function(event) {
						var newDate = event.strftime('%w:%d:%H:%M:%S'), data;
						if (newDate !== nextDate) {
							currDate = nextDate;
							nextDate = newDate;
							// Setup the data
							data = {
								'curr' : strfobj(currDate),
								'next' : strfobj(nextDate)
							};
							// Apply the new values to each node that changed
							diff(data.curr, data.next).forEach(
									function(label) {
										var selector = '.%s'.replace(/%s/,
												label), $node = $example
												.find(selector);
										// Update the node
										$node.removeClass('flip');
										$node.find('.curr').text(
												data.curr[label]);
										$node.find('.next').text(
												data.next[label]);
										// Wait for a repaint to then flip
										_.delay(function($node) {
											$node.addClass('flip');
										}, 50, $node);
									});
						}
					});
				});