
// Iteration 1: Names and Input
let hacker1 = "Alice";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bob";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
	console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print driver's name in capital letters, separated by space
let driverNameCaps = "";
for (let i = 0; i < hacker1.length; i++) {
	driverNameCaps += hacker1[i].toUpperCase();
	if (i < hacker1.length - 1) driverNameCaps += " ";
}
console.log(driverNameCaps);

// 3.2 Print navigator's name in reverse order
let navigatorNameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
	navigatorNameReverse += hacker2[i];
}
console.log(navigatorNameReverse);


// 3.3 Lexicographic order
if (hacker1.localeCompare(hacker2) < 0) {
	console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
	console.log("Yo, the navigator goes first, definitely.");
} else {
	console.log("What?! You both have the same name?");
}

// Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et urna et enim cursus dictum. Etiam euismod, enim et dictum cursus, urna enim cursus enim, et dictum urna enim. Etiam cursus enim et urna dictum, et enim cursus urna. Etiam et cursus enim, dictum urna et enim cursus. Etiam cursus enim et urna dictum, et enim cursus urna.`;

// Count words
let wordCount = 0;
let inWord = false;
for (let i = 0; i < longText.length; i++) {
	if (longText[i] !== ' ' && longText[i] !== '\n') {
		if (!inWord) {
			wordCount++;
			inWord = true;
		}
	} else {
		inWord = false;
	}
}
console.log(`Word count: ${wordCount}`);

// Count 'et' (as a word)
let etCount = 0;
for (let i = 0; i < longText.length - 1; i++) {
	// Check for 'et' surrounded by non-letters or at string boundaries
	if (
		longText[i] === 'e' && longText[i + 1] === 't' &&
		(i === 0 || !(/[a-zA-Z]/.test(longText[i - 1]))) &&
		(i + 2 === longText.length || !(/[a-zA-Z]/.test(longText[i + 2])))
	) {
		etCount++;
	}
}
console.log(`'et' count: ${etCount}`);

// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleaned = "";
for (let i = 0; i < phraseToCheck.length; i++) {
	let c = phraseToCheck[i].toLowerCase();
	if (c >= 'a' && c <= 'z' || c >= '0' && c <= '9') {
		cleaned += c;
	}
}
let isPalindrome = true;
for (let i = 0, j = cleaned.length - 1; i < j; i++, j--) {
	if (cleaned[i] !== cleaned[j]) {
		isPalindrome = false;
		break;
	}
}
console.log(`Is the phrase a palindrome? ${isPalindrome}`);
