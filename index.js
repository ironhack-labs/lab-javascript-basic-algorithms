// Iteration 1: Names and Input
const hacker1 = 'Pandau';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Malek';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
	console.log(
		`Wow, you both have equally long names, ${hacker1.length} characters!`
	);
} else if (hacker1.length > hacker2.length) {
	console.log(
		`The driver has the longest name, it has ${hacker1.length} characters.`
	);
} else if (hacker1.length < hacker2.length) {
	console.log(
		`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
	);
}

// Iteration 3: Loops
// const driverNameCapitalizedAndSpaced = [...hacker1]
// 	.map((char, i, arr) => {
// 		const isLastCharacter = i === arr.length - 1;
// 		return char.toUpperCase() + (isLastCharacter ? '' : ' ');
// 	})
// 	.join('');

let driverNameCapitalizedAndSpaced = '';

for (let i = 0; i < hacker1.length; i++) {
	driverNameCapitalizedAndSpaced += hacker1[i].toUpperCase();

	if (i !== hacker1.length - 1) {
		driverNameCapitalizedAndSpaced += ' ';
	}
}

console.log(
	'🚀 ~ driverNameCapitalizedAndSpaced:',
	driverNameCapitalizedAndSpaced
);

// const navigatorNameReverse = [...hacker2].reverse().join('');

let navigatorNameReverse = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
	navigatorNameReverse += hacker2[i];
}

console.log('🚀 ~ navigatorNameReverse:', navigatorNameReverse);

const hacker1LowerCase = hacker1.toLowerCase();
const hacker2LowerCase = hacker2.toLowerCase();

if (hacker1LowerCase < hacker2LowerCase) {
	console.log("The driver's name goes first.");
} else if (hacker1LowerCase > hacker2LowerCase) {
	console.log('Yo, the navigator goes first, definitely.');
} else if (hacker1LowerCase === hacker2LowerCase) {
	console.log('What?! You both have the same name?');
}

// BONUS 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt in orci ut faucibus. Praesent sodales nisi in porta tincidunt. Nullam venenatis metus nec dolor iaculis, vitae tincidunt nibh finibus. Donec non est eget nibh tincidunt blandit nec quis est. Integer bibendum nibh sagittis, semper ex eu, convallis arcu. Phasellus arcu libero, faucibus quis aliquet at, volutpat eu magna. Ut ex tellus, accumsan nec maximus ullamcorper, egestas in justo. Nulla facilisi. Vivamus vestibulum pulvinar vulputate. Nam vestibulum quam nec purus hendrerit, ut mollis felis fringilla. Sed a turpis tristique, tempus enim consequat, dapibus erat. Fusce mi eros, condimentum ut quam faucibus, volutpat porta nisl. Vivamus quis ultricies metus. Proin ut tincidunt sem.
Fusce et quam at dui volutpat suscipit a sed mauris. Ut viverra malesuada nulla, a pellentesque purus elementum id. Praesent non dapibus metus. Nam consectetur efficitur ante id finibus. Nulla suscipit mattis tortor dapibus lobortis. Sed sollicitudin pretium velit sed vestibulum. Phasellus eget feugiat enim, id suscipit tortor. Curabitur sit amet turpis non ipsum finibus lacinia eget a dolor. Integer finibus enim eu fermentum euismod. Nunc sed mauris sagittis, fermentum est at, porta ex.
Fusce eget luctus ex. Duis tincidunt nibh sed massa molestie blandit. Nulla mauris felis, rutrum sed aliquet nec, ornare vitae orci. Quisque a accumsan ante. Ut quis dui lorem. Praesent ornare convallis massa, nec pulvinar lorem pretium quis. Donec suscipit luctus lectus, non sagittis metus condimentum sit amet. Sed consequat non tellus at vulputate. Sed quis risus sit amet ipsum euismod rutrum. Pellentesque id eros at nisi malesuada malesuada id vitae quam. Phasellus ut pellentesque felis, eu accumsan neque. Duis lorem nibh, finibus eu consequat ut, vehicula nec eros. In viverra eros id accumsan condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`;

// const longText = 'et word et. et word met.';

// const wordCount = longText.split(' ').length;

let wordCount = 0;

for (let i = 0; i < longText.length; i++) {
	const char = longText[i];
	if (char === ' ') wordCount++;
}

console.log('🚀 ~ wordCount:', wordCount);

let etCount = 0;
// const longTextWords = longText.split(' ');
// longTextWords.forEach(word => {
// 	if (word.match(/^(et)\W*$/gi)) etCount++;
// });

// longText.length - 2 so I can access longText[i + 2] in the loops
for (let i = 0; i < longText.length - 2; i++) {
	let longTextLower = longText.toLowerCase();
	let etFound = false;

	// check for 'et' in the first iteration
	if (i === 0) {
		etFound =
			longTextLower[i] + longTextLower[i + 1] === 'et' &&
			longTextLower[i + 2].match(/\W/g);
	}

	if (i >= 1 && i < longTextLower.length - 3) {
		etFound =
			longTextLower[i - 1].match(/\s/g) &&
			longTextLower[i] + longTextLower[i + 1] === 'et' &&
			longTextLower[i + 2].match(/\W/g);
	}

	// check for 'et' in the last iteration
	if (i === longTextLower.length - 3) {
		etFound =
			// for case 'et.'
			(longTextLower[i - 1].match(/\s/g) &&
				longTextLower[i] + longTextLower[i + 1] === 'et') ||
			// for case 'et
			(longTextLower[i].match(/\s/g) &&
				longTextLower[i + 1] + longTextLower[i + 2] === 'et');
	}

	if (etFound) etCount++;
}

console.log('🚀 ~ etCount:', etCount);

// BONUS 2
const phraseToCheck = 'Was it a car or a cat I saw?';

// function isPalindrome(phrase) {
// 	const sanitizedPhrase = phrase.replaceAll(/\W/g, '').toLowerCase();
// 	return sanitizedPhrase === [...sanitizedPhrase].reverse().join('');
// }

function isPalindrome(phrase) {
	const charToDelete = ' .,?!\'"(){}';
	let sanitizedPhrase = '';

	for (let i = 0; i < phrase.length; i++) {
		if (charToDelete.includes(phrase[i])) continue;
		sanitizedPhrase += phrase[i];
	}

	sanitizedPhrase = sanitizedPhrase.toLowerCase();

	let reversedPhrase = '';

	for (let i = sanitizedPhrase.length - 1; i >= 0; i--) {
		reversedPhrase += sanitizedPhrase[i];
	}

	return sanitizedPhrase === reversedPhrase;
}

console.log('isPalindrome? ', isPalindrome('negative example'));
console.log('isPalindrome? ', isPalindrome(phraseToCheck));
console.log('isPalindrome? ', isPalindrome('taco cat'));
console.log('isPalindrome? ', isPalindrome('A man, a plan, a canal, Panama!'));
