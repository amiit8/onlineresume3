
// The script adds functionality to the cards to open modal slides

$(document).ready(function(){

	// Slideshow View
	var SlideshowView = BaseView.extend({
		el: '#slideshow',
		template : _.template( $('#slideshowTemplate').html() ),
		ui : {

		}
	});

	var cards = $('#projects .card');

	var slideshow = $('#slideshow');


	// Hide the slide when user clicks on outside slide area
	slideshow.on('click', function(event){
		// if the target is the slideshow div
		if(event.target.id === 'slideshow'){
			slideshow.fadeOut();

			// if scrolling the background while slide is open is required
			// $('body').removeClass('modal-open');
		}
	});

	// open slide when any card is clicked
	cards.on('click', function(event){
		var target = event.currentTarget;

		// get the data-index from the target event
		var projectIndex = target.dataset.index;
		var closeButton;

		// prepare model using the data-index from the target
		var slideshowModel = new Backbone.Model(resume_data.projects.data[projectIndex]);

		// create new slide view with data from the model
		var slideshowView = new SlideshowView({
			model : slideshowModel
		});

		slideshowView.render();

		// use jquery effect to show the slide
		slideshowView.$el.fadeIn();

		// $('body').addClass('modal-open');

		// hide the slide on click of close button
		closeButton = $('#slideshow .button.close');
		closeButton.on('click', function(){

			// if scrolling the background while slide is open is required
			// $('body').removeClass('modal-open');
			slideshow.fadeOut();

		});
	});
});




