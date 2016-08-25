
// Update the height of the background image so cover the window vertically only upto the height of the window

$(document).ready( function(){
	var banner = $('#banner-container');
	banner.css('height',window.innerHeight);

	// var sections = $('section.section');

	// var loader = $('#loader');
	// loader.fadeOut();
});

// Show the loader till everything gets loaded
window.onload = function(){
	var loader = $('#loader');
	loader.fadeOut();
};

$(window).on('resize', function(){
	var banner = $('#banner-container');
	banner.css('height',window.innerHeight);
});

