'use strict';
// Declare variable for total answers correct for user at the end of the game.
var totalAnswers = 0;

// Five questions to prompt user to answer Y or N

function nameFunc() {
    var name = prompt('Is my name Meryl Turner? ');
    if (name.toUpperCase () === 'YES' || name.toUpperCase () === 'Y') {
        alert('Yes, my name is Meryl!');
        totalAnswers++;
    }
    else {
        alert('You don\'t even know me.');
    }
    console.log('1st Question: ' + name.toUpperCase());
}

nameFunc();

function bornFunc() {
    var born = prompt('Was I born in Portland, Oregon?');
    if(born.toLowerCase () === 'yes' || born.toLowerCase () === 'y') {
        alert('Yes, I was born in Portland, Oregon!');
        totalAnswers++;
    }
    else {
        alert('You don\'t know me at all!');
    }
    console.log('2nd Question: ' + born.toLowerCase());
}

bornFunc();

function outdoorsFunc() {
    var outdoors = prompt('Do I like the Outdoors?');
    if(outdoors.toUpperCase () === 'YES' || outdoors.toUpperCase () === 'Y') {
        alert('Heck yes! We are in the Pacific Northwest');
        totalAnswers++;
    }
    else {
        alert('Of course I love the outdoors we live in the PNW!');
    }
    console.log('3rd Question: ' + outdoors.toUpperCase());
}

outdoorsFunc();

function coffeeFunc() {
    var coffee = prompt('Do I drink too much coffee?');
    if (coffee.toLowerCase() === 'yes' || coffee.toLowerCase () === 'y') {
        alert('NO WAY CAFFEINE IS MY FRIEND');
        totalAnswers++;
    }
    else {
        alert('Is there such a thing as too much coffee?');
    }
    console.log('4th Question: ' + coffee.toLowerCase());
}

coffeeFunc();

function codingFunc() {
    var coding = prompt('Do I love to code?');
    if (coding.toUpperCase() === 'YES' || coding.toUpperCase() === 'Y') {
        alert('Yes! Coding is the best thing ever!');
        totalAnswers++;
    }
    else {
        alert('No I want to throw my computer against the wall.');
    }
    console.log('5th Question: ' + coding.toUpperCase());
}

codingFunc();


// User is prompted to answer the question 'what is my favorite number' with four guesses

function faveNum() {
    for (var i = 0; i < 4; i++) {
        var guess = parseInt(prompt('What is my favorite number?'));
        if (guess === 8) {
            alert('You are correct!');
            break;
            totalAnswers++;
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
}

faveNum();


function citiesFunc () {
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
                alert('You got it dude!');
                correctAnswer = true;
                totalAnswers++;
                break;
            }
            else {
                alert('Nope, try again!');
                break;
            }
        }
        if (correctAnswer === true) {
            alert('Well done, you are so awesome. I have lived in ' + cities[0] + ' ' + cities[1] + ' and ' + cities[2]);
            break;
        }
        if (correctAnswer === true && i === 6) {
            alert('Well done, you are so awesome. I have ved in ' + cities[0] + ' ' + cities[1] + ' and ' + cities[2]);
            break;
        }
        if (i === 6){
            alert('Aww sorry you are out of guesses. The cities I have lived in are : ' + cities[0] + ' ' + cities[1]+ ' and ' + cities[2]);
        }
    }
}

citiesFunc();

var userName = prompt('Hey, we\'ve gotten to know each other pretty well - what\'s your name?');
var answerMessage = alert('This was fun, you got '+ totalAnswers + ' out of 7 questions right! Well done ' + userName + '!');
	
