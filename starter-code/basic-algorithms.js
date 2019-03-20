// Names and Input
var hacker1 = 'Daniel';
console.log('The dricers name is ' + hacker1);

var hacker2 = window.prompt('Please, Introduce your name', '  Ej: Francisco  ');
console.log(hacker2);

//Conditionals
if (hacker2.length < hacker1.length) {
	console.log('The Driver (' + hacker1 + ') has the longest name, it has ' + hacker1.length + ' characters');
} else if (hacker2.length > hacker1.length) {
	console.log('Yo, ' + hacker2 + ', I`ve got the longest name, it has ' + hacker2.length + ' characters');
} else {
	console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!');
}

//Loops
var hacker1_1 = '';
var hacker2_2 = '';
for (i = 0; i < hacker1.length; i += 1) {
	hacker1_1 = hacker1_1 + (hacker1.charAt(i) + ' ');
}
console.log(hacker1_1.toUpperCase());

for (i = 0; i < hacker1.length; i += 1) {
	hacker2_2 = hacker2_2 + (hacker2.charAt(i) + ' ');
}
console.log(hacker2_2.toUpperCase());

console.log(hacker2.split(''));

if (hacker1.localeCompare(hacker2) < 0) {
	console.log('The driver`s name goes first');
} else if (hacker1.localeCompare(hacker2) > 0) {
	console.log('Yo, the navigator goes first definitely');
} else {
	console.log('What?! you both got the same name?');
}

// Lorem ipsum generator
