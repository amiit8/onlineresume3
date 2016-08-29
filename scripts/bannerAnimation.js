$(document).ready(function(){
	var container = $('#banner-animator').get(0);
	// var context = container.get(0).getContext("2d");
	var x,y,h,w;

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

	for(var i=0 ; i < 50 ; i++){
		x = getRandom(0,999);
		y = getRandom(0,600);

		h = getRandom(30,99);
		w = h;
		
		box = document.createElement('div');
		box.style.height = h;
		box.style.width = w;
		box.style.left = x;
		box.style.top = y;
		box.style.opacity = Math.random();
		box.className = 'box';
		container.appendChild(box);

		(function autoBlur(boxComponent){
			window.setTimeout(function(){
				boxComponent.style.opacity = 0;
			}, Math.random()*3000);
		})(box);
	}
});