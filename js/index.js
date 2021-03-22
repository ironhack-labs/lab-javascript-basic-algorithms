// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Thomas";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
	console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
console.log(
	hacker1
		.toUpperCase()
		.split("")
		.map((c) => (c += " "))
		.join("")
		.slice(0, this.length - 1)
);

console.log(hacker2.split("").reverse().join(""));

if (hacker1.localeCompare(hacker2) < 0) {
	console.log(`The driver's name goes first`);
} else if (hacker1.localeCompare(hacker2) > 0) {
	console.log(`Yo, the navigator goes first definitely.`);
} else {
	console.log(`What?! You both have the same name?`);
}

//Bonus 1:
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum nisl non orci ultricies laoreet. 
Aenean gravida sapien vitae mi dignissim convallis. Praesent non consequat lorem. Cras eu imperdiet dolor. 
Phasellus semper suscipit odio sit amet facilisis. Morbi vel fringilla lectus. Aliquam mollis nunc id 
nisl tristique, a cursus dui tincidunt. Donec venenatis sed risus vitae ornare. Curabitur ac ante eu nulla 
iaculis ultricies id vitae metus. Sed eget posuere massa. Fusce gravida cursus ex, nec rhoncus mauris lobortis 
elementum. Nunc interdum feugiat rutrum.

Fusce tristique, augue sit amet blandit blandit, justo odio vestibulum felis, vehicula placerat velit magna eget felis. 
Nunc interdum metus ac risus mollis, nec posuere massa malesuada. Vestibulum sit amet faucibus nulla. Nunc congue libero 
et facilisis consequat. Proin vulputate quis ante eu efficitur. Donec interdum metus enim, quis finibus nisi pellentesque
at. Praesent iaculis augue sit amet dictum auctor. Vestibulum auctor urna ac pretium ornare. Ut cursus consequat sagittis. 
Cras magna nibh, vehicula ut mauris at, volutpat dignissim enim.

Donec aliquet tempus lorem id dictum. Cras sollicitudin, orci non facilisis pellentesque, enim sem tincidunt velit, 
quis dictum urna odio quis dolor. Vestibulum tempus ligula ex, non malesuada eros fringilla non. Vivamus eu pellentesque est. 
Aenean eu ex at massa rutrum hendrerit. Fusce in ante aliquet, ultrices lorem quis, posuere nibh. Curabitur semper volutpat 
libero vel finibus. Donec auctor nisl nisl, eu laoreet risus commodo eu. Quisque quis dictum arcu. Nulla in tristique ipsum, 
eu tempus neque. Donec eget efficitur erat. Vestibulum sed risus sed nibh viverra tempor vitae in arcu.`;

console.log(lorem.split(" ").length);
console.log(countOcurrences("et", lorem));

function countOcurrences(ocurrence, sentence) {
	return sentence.split(" ").filter((word) => word.includes(ocurrence)).length;
}

//Bonus 2:
let phraseToCheck = "Was it a car or a cat I saw?";
let regex = new RegExp("[A-Za-z]+", "g");
//Turning sentence to same with only letters and lowercasered.
let phraseToCheckOnlyLetters = phraseToCheck.match(regex).join("").toLowerCase();
let firstHalf, secondHalf;

//Converts a sentence into two halfs, the second one reversed.
let divideSentence = (sentence) => {
	if (sentence.length % 2 === 0) {
		firstHalf = sentence.substring(0, sentence.length / 2);
		secondHalf = sentence
			.substring(sentence.length / 2)
			.split("")
			.reverse()
			.join("");
	} else {
		firstHalf = sentence.slice(0, sentence.length / 2 + 1);
		secondHalf = sentence
			.slice(sentence.length / 2)
			.split("")
			.reverse()
			.join("");
	}
};

//Check if two words are equals and prints the result
let isPalindrome = (first, second) => {
	first === second
		? console.log(`${phraseToCheck} is a palindrome`)
		: console.log(`${phraseToCheck} isn't a palindrome`);
};

divideSentence(phraseToCheckOnlyLetters);
isPalindrome(firstHalf, secondHalf);
