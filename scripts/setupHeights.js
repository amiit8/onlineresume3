
/**************************************
	 	Website : www.amitupadhyay.in
		Author : Aamit Upadhyay
	 	Email : amiit8@gmail.com
***************************************/

// Update the height of the background image so cover the window vertically only upto the height of the window
var tick = 0;
$(document).ready( function(){
	var banner = $('#banner-container');
	banner.css('height',window.innerHeight);

	var nameScroller = $('#name-scroller');
	var nameText = nameScroller.html();
	var position = 0;
	var nameChanged = '';
	var nameArr = nameText.split('');
	tick=0;
	nameScroller.html('');
	var scrollTimer = window.setInterval(function changeName(){
		if(tick === 0){
			nameScroller.html('');
			nameChanged = '';
			position = 0;
		}
		tick++;
		if(tick > 3){
			if(position < nameArr.length){
				nameChanged = nameChanged + nameArr[position];
				nameScroller.html(nameChanged);
				position++;
			}
			else{
				//window.clearInterval(scrollTimer);
			}
		}
	},300);
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

