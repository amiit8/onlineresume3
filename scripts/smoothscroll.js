
/**************************************
	 	Website : www.amitupadhyay.in
		Author : Aamit Upadhyay
	 	Email : amiit8@gmail.com
***************************************/
/* copyright@2016 www.amitupadhyay.in
 * 
 */

$(document).ready(function(){

	var brandLink = $('.navbar-brand');
	// Get the hash of the link and scroll to the 
	var menuItems = $('#navbar ul li');

	var bottomButton = $('#footer .glyphicon-chevron-up');

	// Always scroll to top
	brandLink.on('click', function(event){
		event.preventDefault();
		event.stopPropagation();
		menuItems.removeClass('active');
		$('#navbar').removeClass('in');
		$('html, body').animate({scrollTop : 0}, 500);
	});

	menuItems.on('click', function(event){

	 event.preventDefault();
	 event.stopPropagation();

	 var target = event.currentTarget;
	 // $(target).addClass('active');
	 // menuItems.removeClass('active');
	 var links = $(this).find('a');

	 // Get the first link
	 var link = links[0].hash;

	 // Collapse the menu
	 $('#navbar').removeClass('in');

	 // Scroll to the element with id=[link] with jquery animate
	 $('html, body').animate({scrollTop : $(link).offset().top}, 800);

	});

	bottomButton.on('click', function(){
		$('html, body').animate({scrollTop : 0}, 500);
	});
});