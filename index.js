// Iteration 1: Names and Input
const hacker1 = "Filipe";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Diogo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
	console.log(
		`The driver has the longest name, it has ${hacker1.length} characters.`
	);
} else if (hacker1.length < hacker2.length) {
	console.log(
		`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
	);
} else {
	console.log(
		`Wow, you both have equally long names, ${hacker1.length} characters!`
	);
}

// Iteration 3: Loops

let capitalsWithSpace = "";

for (let i = 0; i < hacker1.length; i++) {
	capitalsWithSpace += hacker1[i].toUpperCase() + " ";
}

console.log(capitalsWithSpace);

reverseNavigatorName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
	reverseNavigatorName += hacker2[i];
}

console.log(reverseNavigatorName);

console.log(capitalsWithSpace.localeCompare(reverseNavigatorName));

if (capitalsWithSpace.localeCompare(reverseNavigatorName) > 0) {
	console.log("Yo, the navigator goes first, definitely.");
} else if (capitalsWithSpace.localeCompare(reverseNavigatorName) < 0) {
	console.log("The driver's name goes first.");
} else {
	console.log("What?! You both have the same name?");
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec fermentum lectus, vel semper velit. Cras at tristique nunc. Aliquam erat volutpat. Aenean auctor elit et sapien dignissim porta. Pellentesque ac orci mattis, rutrum arcu ac, pharetra felis. Nullam vehicula nibh ac ullamcorper rutrum. Fusce dui purus, feugiat quis tempor ut, suscipit a nisl. Pellentesque justo metus, maximus at mollis lacinia, condimentum at risus. Aliquam id risus cursus, rutrum ligula pulvinar, efficitur est. Aliquam scelerisque congue commodo. Cras porttitor tempor enim, iaculis convallis felis tempus vitae. Donec vel mollis erat, sit amet consequat lacus. Etiam faucibus libero non purus porttitor, et sollicitudin lacus posuere.

Integer vestibulum tempor dui ac vestibulum. Ut sem massa, volutpat eget venenatis non, semper vitae libero. Proin scelerisque bibendum nisi sit amet mattis. Mauris hendrerit elementum massa ultricies fringilla. Integer vel mauris ut orci faucibus suscipit vitae sed nunc. Vestibulum erat urna, pulvinar quis nisl rutrum, pretium sollicitudin quam. Mauris bibendum magna justo, ac mattis massa hendrerit venenatis. Donec aliquam ultrices ornare. Duis condimentum finibus finibus. Sed ut risus malesuada, consequat diam id, venenatis ipsum.

Integer molestie vestibulum placerat. Quisque commodo, velit et gravida interdum, massa lacus tincidunt nibh, vel vehicula est arcu eget lectus. Aliquam interdum, massa ac pellentesque fringilla, risus eros molestie diam, vel convallis nulla purus a nunc. Donec feugiat fringilla congue. Nam molestie rutrum lectus, at maximus ante lacinia non. Morbi tristique ac est rutrum pharetra. Etiam tempor est felis, eu facilisis massa bibendum sollicitudin. Phasellus iaculis sapien ornare, molestie sem ut, malesuada quam. Nulla in augue pretium, tempus enim id, cursus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas id sem ut magna suscipit venenatis non mattis massa. Suspendisse lectus quam, maximus ac sapien sed, congue suscipit tellus. Aenean malesuada volutpat condimentum. In eget lorem dignissim, tempus orci id, sodales sem. Vestibulum fringilla aliquam purus, vel auctor enim rutrum eget. Aliquam pretium aliquet ex, non congue dui viverra sit amet.`; // 326

/* let textArray = longText.split(" ");
let countWords = 0;

for (let i = 0; i < textArray.length; i++) {
	countWords += 1;
}

console.log(countWords); */

let countWords = 1;
for (i = 0; i < longText.length; i++) {
	if (longText[i] === " ") {
		countWords += 1;
	}
}

console.log(`Bonus 1: ${countWords}`);

// Bonus 2:

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseNoSpacesReversed = "";
let phraseNoSpaces = "";

const specialCharacters = [
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"-",
	"_",
	"=",
	"+",
	"[",
	"{",
	"]",
	"}",
	";",
	":",
	",",
	"<",
	".",
	">",
	"/",
	"?",
	"|",
	" ",
];

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
	let isSpecialCharacter = false;

	for (let j = 0; j < specialCharacters.length; j++) {
		if (specialCharacters[j] === phraseToCheck[i]) {
			isSpecialCharacter = true;
			break;
		}
	}

	if (!isSpecialCharacter) {
		phraseNoSpacesReversed += phraseToCheck[i];
	}
}

console.log(phraseNoSpacesReversed);

for (let i = 0; i < phraseToCheck.length; i++) {
	let isSpecialCharacter = false;

	for (let j = 0; j < specialCharacters.length; j++) {
		if (specialCharacters[j] === phraseToCheck[i]) {
			isSpecialCharacter = true;
			break;
		}
	}

	if (!isSpecialCharacter) {
		phraseNoSpaces += phraseToCheck[i];
	}
}

console.log(phraseNoSpaces);

if (
	phraseNoSpaces.toLocaleLowerCase() ===
	phraseNoSpacesReversed.toLocaleLowerCase()
) {
	console.log("this is a palindrome!");
}
