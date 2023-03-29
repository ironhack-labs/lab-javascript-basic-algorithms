// Iteration 1: Names and Input
const hacker1 = "Bobbie";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Bobbo";
console.log("The navigator's name is " + hacker2);

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
		`Wow, you both have equally long names, ${hacker1.length} characters.`
	);
}

// Iteration 3: Loops
let newName1 = "";
for (let i = 0; i < hacker1.length; i++) newName1 += `${hacker1[i]} `;

newName1 = newName1.slice(0, -1);
newName1 = newName1.toUpperCase();
console.log(newName1);

let newName2 = "";
for (let i = hacker2.length; i > 0; i--) newName2 += hacker2[i - 1];
console.log(newName2);

const alphabet = "abcdefghijklmnopqrstuvwhyz";
const lowHaker1 = hacker1.toLowerCase();
const lowHaker2 = hacker2.toLowerCase();
let equalCount = 0;

for (let i = 0; i < Math.max(hacker1.length, hacker2.length); i++) {
	//iterate for longest-length times in the two names regardlessly
	if (hacker1[i] && hacker2[i]) {
		//so far we go on testing before one of the names ends before the other one
		if (hacker1[i] === hacker2[i]) {
			equalCount++;
			//each time those two characters equal to each other we count one
			if (equalCount === Math.max(hacker1.length, hacker2.length)) {
				console.log("What?! You both have the same name?");
			}
			//if it can go to the last character of the longer name, that means they have the same length and same characters in             every digit and we can draw the conclusion that these 2 names are the same.
		} else {
			//before we reach one of the end of the 2 names, we now find a pair of digits with different characters
			if (alphabet.indexOf(lowHaker1[i]) < alphabet.indexOf(lowHaker2[i])) {
				console.log(hacker1 + " goes first.");
			} else {
				console.log(`Yo, ${hacker2} goes first, definitely.`);
			}
			break;
			//and we compare the alphabetical indiex of these 2 characters and draw conclusion
		}
	} else {
		//if we now reach one of the end of the 2 names, that means all the previous pairs of characters are the same
		if (!hacker1[i]) console.log(hacker1 + " goes first.");
		if (!hacker2[i]) console.log(`Yo, ${hacker2} goes first, definitely.`);
		// and since the 2 names have different lengths, so the shorter one will automatically go first
	}
}

//Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat dui sem, in luctus dui scelerisque a. Pellentesque quis laoreet odio. Fusce sit amet magna nisi. Morbi lobortis, massa at feugiat condimentum, sem velit lobortis quam, at eleifend metus lorem sit amet magna. Mauris vitae porta ex, id tempus odio. Aenean consequat ultrices libero, in rutrum magna malesuada id. Sed pulvinar hendrerit felis at convallis. Cras nec sapien at nisl finibus hendrerit. Donec id orci nec urna feugiat facilisis gravida vel risus.

Nullam in dapibus turpis, eget dignissim leo. Phasellus semper augue vestibulum neque feugiat dapibus. Proin nibh dui, sodales eget neque sed, lacinia commodo orci. Praesent pulvinar, arcu eget mollis aliquet, justo nulla bibendum mauris, non venenatis risus enim efficitur metus. Etiam libero elit, laoreet quis ligula pretium, interdum tincidunt mi. Nullam orci purus, rutrum a blandit quis, commodo in risus. Nunc eu enim a dui imperdiet imperdiet sit amet nec arcu. Duis ut hendrerit sapien. Proin faucibus justo at lacinia vulputate. Integer gravida est tellus, nec dapibus odio ultricies et. Sed euismod ultricies diam, non imperdiet nunc luctus a. Quisque faucibus semper dui ut aliquam. Aliquam erat volutpat. Curabitur congue ipsum at erat placerat, sed posuere ligula ornare. Nam porta mauris accumsan odio porta, sit amet tristique tellus tristique. Nam malesuada malesuada mi molestie ornare.

Suspendisse commodo interdum arcu eget lacinia. Aliquam quis odio mollis, tempor ligula id, malesuada ipsum. Curabitur interdum eros non sapien aliquet auctor. Mauris finibus enim sed nisi dignissim sodales. Nullam eu tempus felis, et molestie turpis. Quisque sollicitudin dolor velit, semper efficitur risus vulputate id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dignissim id lectus sit amet dictum. Aliquam augue leo, auctor eu nulla sit amet, tempus maximus nunc. Vivamus dolor elit, ullamcorper id leo et, efficitur molestie neque. Pellentesque massa lectus, ultrices non nisl eget, gravida elementum sem. Suspendisse ultrices scelerisque enim sed viverra. Sed luctus ligula tortor. Duis rhoncus, dolor vitae ultricies varius, nibh magna ultrices ipsum, in iaculis arcu nisl vitae enim. Vestibulum mollis sem urna, in lobortis nulla sollicitudin vel. Aliquam convallis commodo augue vitae lacinia.`;

//count the number of words in the string
const wordsNum = longText.split(" ").length;
console.log(`LongText has ${wordsNum} words`);

let wordRepeat = 0;
let nextStart = 0;
let index;
do {
	index = longText.indexOf("et", nextStart);
	wordRepeat++;
	nextStart = index + 2;
} while (index >= 0);

console.log(`LongText has ${wordRepeat} "et"`);

// Bonus 3
phraseToCheck = "Amor,Roma";
lowPhraseToCheck = phraseToCheck.toLowerCase();

let reverse = "";
for (let i = lowPhraseToCheck.length; i > 0; i--) {
	reverse += lowPhraseToCheck[i - 1];
}
if (reverse === lowPhraseToCheck)
	console.log(phraseToCheck + "is a Palindrome.");
