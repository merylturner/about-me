'use strict';
var name = prompt('Is my name Meryl Turner? ');
if (name.toUpperCase () === 'YES' || name.toUpperCase () === 'Y') {
	alert('Yes, my name is Meryl!');
}
else{
	alert('No, my name is Fred.');
}
console.log('1st Question: ' + name.toUpperCase());
var born = prompt('Was I born in Portland, Oregon?');
if(born.toLowerCase () === 'yes' || born.toLowerCase () === 'y') {
	alert('Yes, I was born in Portland, Oregon!');
}
else {
	alert('No, I was not born in Portland, Oregon.');
}
console.log('2nd Question: ' + born.toLowerCase());
var outdoors = prompt('Do I like the Outdoors?');
if(outdoors.toUpperCase () === 'YES' || outdoors.toUpperCase () === 'Y') {
	alert('Heck yes! We are in the Pacific Northwest');
}
else {
	alert('No I prefer to stay indoors at all times.');
}
console.log('3rd Question: ' + outdoors.toUpperCase());
var coffee = prompt('Do I drink too much coffee?');
if (coffee.toLowerCase() === 'yes' || coffee.toLowerCase () === 'y') {
	alert('NO WAY CAFFEINE IS MY FRIEND');
}
else {
	alert('Is there such a thing as too much coffee?');
}
console.log('4th Question: ' + coffee.toLowerCase());
var coding = prompt('Do I love to code?');
if (coding.toUpperCase() === 'YES' || coding.toUpperCase() === 'Y') {
	alert('Yes! Coding is the best thing ever!');
}
else {
	alert('No I want to throw my computer against the wall.');
}
console.log('5th Question: ' + coding.toUpperCase());
