
/* Information to be displayed in console
 * Thoughts taken from http://www.oneliners-and-proverbs.com/engels/computer.html
 */
var characters = ['#','$','*', '_', '-','/'];

// Thoughts array
var thoughts = [
	'A bug in the code is worth two in the documentation',
	'According to my calculations the problem doesn\'t exist.',
	'A computer\'s attention span is as long as its power cord.',
	'A computer scientist is someone who fixes things that aren\'t broken',
	'Adding manpower to a late software project makes it later'
	];

// Random number between 0 and limit
var getRandomNumber = function(limit){
	var temp = parseInt(Math.random()*10);
	return temp < limit ? temp : temp - limit;
};

var char = characters[getRandomNumber(6)];
var thought = thoughts[getRandomNumber(5)];
var charLine = char;

for(var i=0; i <= 73 ; i++){
	charLine = charLine + char;
}

console.log(charLine);
console.log(thought);
console.log(charLine);

console.log('/////////////////////////-------------------------/////////////////////////');
console.log('/////////////////////////|                       |/////////////////////////');
console.log('/////////////////////////|       Welcome to      |/////////////////////////');
console.log('/////////////////////////|    Amit Upadhyay\'s    |/////////////////////////');
console.log('/////////////////////////|    Online Portfolio   |/////////////////////////');
console.log('/////////////////////////|    Copyright @ 2016   |/////////////////////////');
console.log('/////////////////////////|                       |/////////////////////////');
console.log('/////////////////////////-------------------------/////////////////////////');



console.log(charLine);
console.log('Feel free to browse the source. Most of the code is pretty much commented');
console.log(charLine);
