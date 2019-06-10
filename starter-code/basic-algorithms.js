// Names and Input
const hacker1 = 'Eduardo';
const hacker2 = 'Candido';
let bonus = 'a man, a plan a canal panama';
let lorem =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec aliquam erat. Ut porta nibh ornare metus dignissim lobortis ac sed nunc. Morbi eget est euismod, accumsan urna id, eleifend nunc. Mauris quis elit sit amet odio interdum luctus quis sit amet diam. Quisque ultricies ligula non justo imperdiet laoreet. Nunc lobortis tincidunt pellentesque. Vestibulum rutrum urna vitae nisl mattis facilisis et eu urna. Nam finibus ut urna eget vehicula. Vestibulum et ex lacus. Donec interdum augue augue, at convallis arcu pellentesque vitae. Morbi posuere ornare erat id venenatis. Curabitur mollis nunc dolor, vitae lacinia dolor tristique vitae. Aenean ac purus hendrerit, porta quam ut, ornare ligula. Aliquam erat volutpat. In malesuada sapien molestie turpis faucibus, eget interdum mi scelerisque. Fusce quis luctus mauris. Nam dapibus vel felis vel finibus. Vestibulum venenatis mollis nisi, nec ornare neque. In quis orci sem. Nunc molestie in eros vitae blandit. Sed tempor sollicitudin faucibus. Praesent dui dolor, molestie eget ante ut, efficitur varius ex. Proin vitae tristique odio. Praesent efficitur scelerisque viverra. In hac habitasse platea dictumst. In ultricies blandit augue, nec aliquet felis fringilla quis. Aliquam blandit massa ac massa rutrum varius. Sed nec odio ac urna tincidunt consectetur ut dignissim felis. Donec et pulvinar sapien. Vestibulum ac aliquam nisi. Sed eu placerat risus, non ullamcorper enim. Fusce blandit egestas mauris, ut porttitor turpis. Cras bibendum arcu tempor, pulvinar enim non, malesuada eros. Curabitur eget odio in dolor dignissim pellentesque.';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
if (hacker1.length > hacker2.length) {
	console.log(
		`The Driver has the longest name, it has ${hacker1.length} characters`,
	);
} else if (hacker2.length > hacker1.length) {
	console.log(
		`Yo, navigator got the longest name, it has ${hacker2.length} characters`,
	);
} else {
	console.log(
		`wow, you both got equally long names, ${hacker1.length} characters!!`,
	);
}

let capName = '';

for (let i = 0; i < hacker1.length; i++) {
	capName += hacker1[i].toUpperCase() + ' ';
}
console.log(capName);

let reverseName = '';

for (let i = hacker1.length - 1; i >= 0; i--) {
	reverseName += hacker2[i];
}
console.log(reverseName);

if (hacker1 < hacker2) {
	console.log(`The driver's name goes first`);
} else if (hacker2 < hacker1) {
	console.log(`Yo, the navigator goes first definitely`);
} else {
	console.log(`What?! Yoy both got the same name?`);
}

//Bonus
let palindromeCheck = false;
let regex = /[^a-z]/;
bonus = bonus.split(' ').join('');
let sanitizedBonus = '';

for (let i = 0; i < bonus.length; i++) {
	if (bonus[i].search(regex) === 0) {
		continue;
	}
	sanitizedBonus += bonus[i];
}

console.log(sanitizedBonus);
for (let i = 0; i < sanitizedBonus.length; i++) {
	if (
		sanitizedBonus[i].toLowerCase() ===
		sanitizedBonus[sanitizedBonus.length - 1 - i].toLowerCase()
	) {
		palindromeCheck = true;
	} else {
		palindromeCheck = false;
		break;
	}
}

console.log(`Palindrome check:`, palindromeCheck);

// Lorem ipsum generator

console.log(`The parragraphs have ${lorem.split(' ').length} words`);
console.log(
	`The parragraphs have ${lorem.split(' et ').length - 1} 'et' words`,
);
