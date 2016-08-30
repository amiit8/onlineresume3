$(document).ready(function(){
	var container = $('#banner-animator').get(0);
	// var context = container.get(0).getContext("2d");
	

	var getRandom = function(start,end){
		var temp;
		var rnd;
		var length;
		var multiplier;

		length = end.toString().split('').length;
		multiplier = Math.pow(10,length);
		rnd = Math.random();
		temp  = parseInt(rnd*multiplier);

		if(temp < start){
			temp = temp + start;
		}
		else if(temp > end){
			temp = temp - end;
		}

		return temp;
	};

	var box;



	// context.fillStyle = '#2d80ac';
	// context.globalCompositeOperation='destination-over';
	var boxGeneratorTimer = window.setInterval(generateRandomBox, 1000);

	function generateRandomBox(){
		var x,y,h,w,opacity;
		x = getRandom(0,999);
		y = getRandom(0,600);
		h = getRandom(30,99);
		w = h;
		opacity = Math.random();
		
		box = document.createElement('div');
		box.style.height = h;
		box.style.width = w;
		box.style.left = x;
		box.style.top = y;
		box.style.opacity = opacity;
		box.className = 'box';
		container.appendChild(box);
		

		(function autoBlur(boxComponent){
			window.setTimeout(function(){
				// boxComponent.parentNode.removeChild(boxComponent);
				(function fadeBox(boxToFade){
					boxToFade.style.opacity = 0;
					(function removeBox(boxToRemove){
						window.setTimeout(function(){
							$(boxToRemove).remove();
						},2000);
					})(boxToFade);
				})(boxComponent);
			}, 2000);
		})(box);
	}
});