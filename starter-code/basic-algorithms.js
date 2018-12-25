// Names and Input
let hacker1 = 'Travis';
console.log('The drivers name is ' + hacker1);
let navigator = 'Javier';
console.log('The navigators name is ' + navigator);

//Conditionals
if (hacker1.length > navigator.length) {
	console.log(`The driver has the longest name, it has ` + hacker.length + 'characters!');
} else if (hacker1.length < navigator.length) {
	console.log('The Navigator has the longest name, it has ' + navigator.length + 'characters');
} else if (hacker1.length === navigator.length) {
	console.log('Wow! you both got equally long names, ' + hacker1.length + ' characters');
}

// Lorem ipsum generator

console.log(hacker1.toUpperCase().split(''));

function reverse(str) {
	return str.split('').reverse().join('');
}
console.log(reverse(navigator));

// NOT COMPLETE YET

const palindrome = (str) => {
	let arr = [];
	let str2 = str.split(', ').join('');

	// console.log(str2, " the first str2")

	for (let i = 0; i < str2.length; i++) {
		arr.unshift(str2[i]);
	}

	let wordForwards = str.split(',').join('').toLowerCase();
	let wordBackwards = arr.join('').toLowerCase();

	console.log(wordForwards, '  <--=-=-=-=--=-=-<< this is the wordForwards');
	console.log(wordBackwards, '  <--=-=-=-=--=-=-<< this is the wordBackwards');
};

palindrome('A man, a plan, a canal, Panama');
