
/**************************************
	 	Website : www.amitupadhyay.in
		Author : Aamit Upadhyay
	 	Email : amiit8@gmail.com
***************************************/


// This script enables the application to update the menu items on document scroll event
// Whenever the document is scrolled the below event will get triggered. The key point is to read the 
// current scrolled position of window using $('body').scrollTop() and the static position of the element in the window from top

$(document).ready(function(){
	var menu = $('#menu');
	$(document).on('scroll', function(){

		var resume = $('#resume');
		var stickymenu = $('#menu .sticky-menu');
		var menuItems = $('#navbar ul li');

		// Get the offsets and current scroll position
		var bodyScrollPosition = $('body').scrollTop();
		var summaryOffsetPosition = parseInt( $('#summary').offset().top);
		var skillsOffsetPosition = parseInt( $('#skills').offset().top);
		var educationOffsetPosition = parseInt( $('#education').offset().top);
		var projectsOffsetPosition = parseInt( $('#projects').offset().top);
		var contactOffsetPosition = parseInt( $('#contact').offset().top);

		// When the scrolled position passes the summary div
		if(	bodyScrollPosition > summaryOffsetPosition - 50 ){
			stickymenu.css("position", "fixed");
			menu.addClass('fixed');
			menu.find('.navbar-brand').fadeIn();

			// When the scrolled position is between summary section and skills section
			if(bodyScrollPosition >= summaryOffsetPosition && bodyScrollPosition < skillsOffsetPosition){
				menuItems.removeClass('active');	
				menuItems.find('a[href="#summary"]').parent().addClass('active');
			}

			// When the scrolled position is between skills section and education section
			else if(bodyScrollPosition >= skillsOffsetPosition && bodyScrollPosition < educationOffsetPosition){
				menuItems.removeClass('active');	
				menuItems.find('a[href="#skills"]').parent().addClass('active');
			}

			// When the scrolled position is between education section and projects section
			else if(bodyScrollPosition >= educationOffsetPosition && bodyScrollPosition < projectsOffsetPosition){
				menuItems.removeClass('active');	
				menuItems.find('a[href="#education"]').parent().addClass('active');
			}

			// When the scrolled position is between projects section and contact section
			else if(bodyScrollPosition >= projectsOffsetPosition && bodyScrollPosition < contactOffsetPosition){
				menuItems.removeClass('active');	
				menuItems.find('a[href="#projects"]').parent().addClass('active');
			}

			// When the scrolled position passes the projects section
			else if(bodyScrollPosition >= projectsOffsetPosition ){
				menuItems.removeClass('active');	
				menuItems.find('a[href="#contact"]').parent().addClass('active');
			}
		}

		// When the document is not scrolled enough
		// Make the menu relative with the flow of the document
		else{
			stickymenu.css("position", "relative");
			menu.removeClass('fixed');
			menuItems.removeClass('active');
			menu.find('.navbar-brand').fadeOut();
			if(bodyScrollPosition === 0){
				tick = 0;
			}
		}
	});
});