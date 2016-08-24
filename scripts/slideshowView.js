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



	slideshow.on('click', function(event){
		if(event.target.id === 'slideshow'){
			slideshow.hide();
		}
	});

	cards.on('click', function(event){
		var target = event.currentTarget;
		var projectIndex = target.dataset.index;
		var closeButton;

		var slideshowModel = new Backbone.Model(resume_data.projects.data[projectIndex]);

		var slideshowView = new SlideshowView({
			model : slideshowModel
		});

		slideshowView.render();

		slideshowView.$el.slideDown();

		closeButton = $('#slideshow .button.close');
		closeButton.on('click', function(){
			slideshow.slideUp();
		});
	});
});




