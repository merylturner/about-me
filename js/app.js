'use strict';
// Declare variable for total answers correct for user at the end of the game.
var totalAnswers = 0;

// Five questions to prompt user to answer Y or N
var name = prompt('Is my name Meryl Turner? ');
if (name.toUpperCase () === 'YES' || name.toUpperCase () === 'Y') {
			alert('Yes, my name is Meryl!');
			totalAnswers += 1;
		}
else {
			alert('No, my name is Fred.');
		}
console.log('1st Question: ' + name.toUpperCase());


var born = prompt('Was I born in Portland, Oregon?');
if(born.toLowerCase () === 'yes' || born.toLowerCase () === 'y') {
		alert('Yes, I was born in Portland, Oregon!');
		totalAnswers += 1;
	}
else {
		alert('No, I was not born in Portland, Oregon.');
	}
console.log('2nd Question: ' + born.toLowerCase());

var outdoors = prompt('Do I like the Outdoors?');
if(outdoors.toUpperCase () === 'YES' || outdoors.toUpperCase () === 'Y') {
		alert('Heck yes! We are in the Pacific Northwest');
		totalAnswers += 1;
	}
else {
		alert('No I prefer to stay indoors at all times.');
	}
console.log('3rd Question: ' + outdoors.toUpperCase());

var coffee = prompt('Do I drink too much coffee?');
if (coffee.toLowerCase() === 'yes' || coffee.toLowerCase () === 'y') {
		alert('NO WAY CAFFEINE IS MY FRIEND');
		totalAnswers += 1;
	}
else {
		alert('Is there such a thing as too much coffee?');
	}
console.log('4th Question: ' + coffee.toLowerCase());

var coding = prompt('Do I love to code?');
if (coding.toUpperCase() === 'YES' || coding.toUpperCase() === 'Y') {
		alert('Yes! Coding is the best thing ever!');
		totalAnswers += 1;
	}
else {
		alert('No I want to throw my computer against the wall.');
	}
console.log('5th Question: ' + coding.toUpperCase());


// User is prompted to answer the question 'what is my favorite number' with four guesses
for (var i = 0; i < 4; i++) {
	var guess = parseInt(prompt('What is my favorite number?'));
	if (guess === 8) {
		alert('You are correct!');
		break;
		totalAnswers += 1;
	}
	else if (guess > 8) {
		alert('Too high. Guess again!');
		console.log(guess);
	}
	else {
		alert('Too low. Try again.');
		console.log(guess);
	}
}

var cities = ['portland', 'bend', 'redlands']; //cities.length 3

// TODO check if citiesGuesses matches one of the elements in the cities array
for (var i = 0; i < 6; i++) {
	var citiesGuess = prompt('What cities have I lived in? There are multiple correct answers. You have six guesses. Good luck!');
	console.log('LOOP 1: We are on guess #: ', i + 1);

	var correctAnswer = false;

	for (var j = 0; j < cities.length; j++){
		console.log('LOOP 2: We are looking the ', j, 'of cities. its data: ', cities[j]);
		console.log('Their guess is: ', citiesGuess, '| current array element ', cities[j]);
	
		if (citiesGuess.toLowerCase() === cities[j]) {
			alert('You guessed right!');
			correctAnswer = true;
			totalAnswers += 1;
			break;
		}
	}
	if (correctAnswer === true) {
			alert('You guessed right! Here are the answers: ' + cities[0] + cities[1] + cities[2]);
			break;
		}
	if (i === 6){
			alert('Here are the answers:' + cities[0] + ' ' + cities[1]+ ' ' + cities[2]);
		}
}


var answerMessage = alert('You got '+ totalAnswers + ' out of 7 questions right!')
	
