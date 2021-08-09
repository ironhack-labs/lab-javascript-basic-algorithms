//------------------------------------------------------------
// Iteration 1: Names and Input
let hacker1 = 'Aitor';
console.log("The driver's name is " + hacker1);

let hacker2 = 'Menta';
console.log("The navigator's name is " + hacker2);

//------------------------------------------------------------
// Iteration 2: Conditionals
//2.1
if (hacker1.length > hacker2.length) {
	console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.');
} else if (hacker1.length < hacker2.length) {
	console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.');
} else {
	console.log('Wow, you both have equally long names, ' + hacker1.length + ' characters!');
}
//------------------------------------------------------------
// Iteration 3: Loops
//3.1
var splitString = '';
for (var i = 0; i < hacker1.length; i++) {
	splitString += hacker1.charAt(i).toUpperCase() + ' ';
}

console.log(splitString);
//3.2
var reverseString = '';
for (var i = hacker1.length - 1; i >= 0; i--) {
	reverseString += hacker1[i];
}

console.log(reverseString);

//3.3
//With a method
if (hacker1.localeCompare(hacker2) === -1) {
	console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
	console.log('Yo, the navigator goes first definitely.');
} else {
	console.log('What?! You both have the same name?');
}
//with a loop - TODO
for (let i = 0; i < hacker1.length; i++) {
	for (let j = 0; j < hacker2.length; j++) {
		if (hacker1[i] === hacker2[j]) {
			console.log(hacker1[i]);
		}
	}
}
//------------------------------------------------------------
//Bonus 1
//Generate 3 paragraphs. Store the text in a variable type of string.
const parrafo =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id volutpat nibh. Praesent convallis dictum felis, a egestas risus consectetur vitae. Vivamus ac magna id lacus auctor accumsan eget vitae orci. Donec arcu lacus, congue vel congue non, malesuada ut dolor. Nam at lorem ac nisi efficitur bibendum. Quisque vulputate fermentum tortor eget rhoncus. Proin vestibulum, nulla vel eleifend condimentum, quam arcu tempor augue, ac maximus neque velit eu turpis. Mauris vel porta ante, nec mattis neque. Sed suscipit consequat semper. Maecenas convallis lobortis risus sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada pretium dui, ut tempor lectus lacinia ut. Curabitur ipsum ipsum, molestie eu tellus sed, tempor semper libero. Nunc varius id quam in pulvinar. Curabitur consectetur congue lorem, maximus mollis augue rutrum vel. Fusce efficitur urna diam, non pellentesque augue pellentesque vel. Mauris elementum ante odio, sit amet luctus quam euismod nec. Donec non justo nisi. Nunc condimentum ante ex, eget imperdiet felis malesuada venenatis. Morbi a quam nec tortor aliquam ultricies. Duis eu velit convallis, tincidunt dui sed, gravida eros. Quisque venenatis vel neque at tincidunt. Nunc bibendum sagittis est, a consectetur erat dictum quis. Duis sodales nisl risus, at accumsan dolor pharetra sed. Nam odio arcu, cursus vel mauris ac, sodales bibendum eros. Vestibulum vitae viverra velit. Nullam malesuada, erat rhoncus feugiat feugiat, magna ante aliquet velit, eu venenatis eros ligula id magna. Maecenas dapibus rutrum dolor, sit amet molestie mauris venenatis sed. Aliquam erat volutpat. Vestibulum non dignissim quam.';

//Make your program count the number of words in the string.
let wordsCounter = 0;
let etWordCounter = 0;

wordsCounter = parrafo.split(' ');
//console.log(parrafo.length); // total letras 1687
console.log(wordsCounter.length); // total palabras 248

//Make your program count the number of times the Latin word et appears.
