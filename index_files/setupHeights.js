
// Update the height of the background image so cover the window vertically only upto the height of the window

$(document).ready( function(){
	var banner = $('#banner-container');
	banner.css('height',window.innerHeight);

	// var sections = $('section.section');

	// var loader = $('#loader');
	// loader.fadeOut();
});

window.onload = function(){
	var loader = $('#loader');
	loader.fadeOut();
	console.log('hiding');
};