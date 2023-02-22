const hacker1 = 'Vali';
const hacker2 = 'Senem';

console.log('The drivers name is ', hacker1);
console.log('The navigators name is ', hacker2);

// Iteration 2: Conditionals

const valiCharacters = hacker1.length;
const senemCharacters = hacker2.length;

console.log(valiCharacters, senemCharacters);

if (valiCharacters > senemCharacters) {
	console.log(
		`The driver has the longest name, it has ${valiCharacters} characters.`
	);
} else {
	console.log(
		`It seems that the navigator has the longest name, it has ${senemCharacters} characters.`
	);
}
// Iteration 3: Loops

const splittedString = hacker1.split('');
const stringWithSpaces = splittedString.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);

for (let i = hacker2.length; i >= 0; i--) {
	console.log(hacker2[i]);
}

let result = hacker1.localeCompare(hacker2);

if (result < 0) {
	console.log("The driver's name goes first.");
} else if (result > 0) {
	console.log('Yo, the navigator goes first definetely!');
} else {
	console.log('What, you both have the same name?');
}

const longText = `Morbi iaculis ligula vitae felis placerat ultrices.Nulla pellentesque justo in blandit commodo.Vivamus sit amet ornare tellus, sit amet sagittis nunc.Maecenas ex odio, volutpat eu feugiat sed, ullamcorper vel est.Ut in vehicula dui.In quis risus libero.Quisque sed felis nibh.Nunc sit amet ipsum facilisis, sollicitudin ligula eu, tempor libero.Fusce quis sollicitudin neque, semper ornare leo.Vestibulum euismod ac ex non dignissim.Aliquam quis semper lorem, nec aliquam lectus.Proin imperdiet, mi nec dapibus consectetur, libero augue tempus nulla, sed pulvinar orci nisl vitae purus.Sed luctus nulla eu lacus varius mattis.Vivamus iaculis maximus dui, eu egestas felis placerat a.Etiam gravida odio eu orci pulvinar semper.

Vivamus dignissim pulvinar turpis ac sollicitudin.Sed velit lectus, auctor ut laoreet ac, suscipit sit amet mi.Etiam vel odio eleifend, ornare massa eu, lacinia diam.Sed ut consectetur nisl.Fusce sit amet velit sed orci congue ornare.Mauris aliquet, dolor tincidunt bibendum posuere, magna ipsum interdum neque, eget mollis ligula enim sed quam.Vestibulum pretium tristique felis, quis ultrices velit congue quis.Suspendisse sapien nisi, vestibulum eu faucibus dignissim, scelerisque at diam.Duis cursus justo nisl, ut egestas elit malesuada vitae.Nam sed ante dolor.Maecenas eu placerat eros, vitae vulputate metus.Suspendisse finibus sem tristique metus feugiat egestas.Proin mollis erat at accumsan commodo.

Aenean rhoncus ante varius eros porttitor, in hendrerit orci tempor.Quisque arcu erat, tincidunt non pellentesque id, placerat quis leo.Nulla lobortis dolor fringilla arcu venenatis fermentum.Integer dapibus nulla ut risus semper, faucibus lobortis ipsum elementum.Duis augue purus, fringilla ut risus ac, condimentum aliquet nisl.Maecenas ultrices neque est, vitae vulputate leo efficitur ac.Nulla vitae consectetur tortor.Donec ut varius tellus.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Praesent tellus nunc, consectetur tincidunt fringilla et, sodales in ligula.In hac habitasse platea dictumst.Aenean ullamcorper ipsum ipsum.Nulla facilisi.Nulla ultricies porttitor enim sit amet cursus.Praesent feugiat fermentum sapien quis faucibus.Donec ullamcorper tortor at maximus porttitor. `;

let words = longText.split(' ');

console.log(`The text has ${words.length} words`);

let count = 0;

for (let i = 0; i < longText.length; i++) {
	let char1 = longText[i];
	let char2 = longText[i + 1];

	if (char1 === 'e' && char2 === 't') {
		count++;

		//we determined that the number of the words "et" is 21. We didnt want to
		//print 21 messages so we did the following conditional:

		if (count === 21) {
			console.log(`The word "et appears ${count} times."`);
		}
	}
}

let phraseToCheck = 'Amor, Roma';
let newSentence = [];
let newReverseSentence = [];

for (letter of phraseToCheck) {
	if (letter !== ',') {
		newSentence.push(letter);
		newReverseSentence.unshift(letter);
	}
}

const newerSentence = newSentence.join(' ');
console.log(newerSentence);
const newerReverseSentence = newReverseSentence.join(' ');
console.log(newerReverseSentence);

if (newerSentence.toUpperCase() == newerReverseSentence.toUpperCase()) {
	console.log(
		`${newerSentence} and ${newerReverseSentence} are the same sentence.`
	);
} else {
	console.log(
		`${newerSentence} and ${newerReverseSentence} are NOT the same sentence!`
	);
}
