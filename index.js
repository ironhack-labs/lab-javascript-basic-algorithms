//1
//1.1
let hacker1 = "Arian";
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
let hacker2 = "Alejandro";
//1.4
console.log(`The navigator's name is ${hacker2}`);

// 2
if (hacker1.length > hacker2.length) {
	console.log(
		`The driver has the longest name, it has ${hacker1.length} characters.`
	);
} else if (hacker1.length < hacker2.length) {
	console.log(
		`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
	);
} else if (hacker1.length === hacker2.length) {
	console.log(
		`Wow, you both have equally long names, ${hacker1.length} characters!`
	);
}

//3
//3.1
let name = "";
for (let i = 0; i < hacker1.length; i++) {
	name += hacker1[i].toUpperCase() + " ";
}
console.log(name);

//3.2
let name2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
	name2 += hacker2[i];
}
console.log(name2);

//3.3
names = [hacker1, hacker2];
names.sort();

if (hacker1 === hacker2) {
	console.log("What?! You both have the same name?");
} else {
	if (names[0] === hacker1) {
		console.log("The driver's name goes first.");
	} else if (names[0] === hacker2) {
		console.log("Yo, the navigator goes first, definitely.");
	}
}

//Bonus 1

let longText =
	"Sed sodales ac tellus et ornare. Etiam eu risus dictum, fringilla sapien quis, malesuada tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ac magna ac sapien ultrices tristique. Sed eu rhoncus odio. Suspendisse sagittis nibh orci, et porttitor mauris euismod eu. Suspendisse ut cursus dolor. Vivamus a enim vestibulum, tempus augue a, posuere lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ac magna ac sapien ultrices tristique. Sed eu rhoncus odio. Suspendisse sagittis nibh orci, et porttitor mauris euismod eu. Suspendisse ut cursus dolor. Vivamus a enim vestibulum, tempus augue a, posuere lacus. Praesent tristique vehicula pellentesque. Donec sollicitudin nec mauris sit amet ullamcorper. Phasellus vel luctus ligula. Cras a sem mattis, tristique nunc at, accumsan felis. Pellentesque facilisis massa id tincidunt vulputate. Aenean et convallis velit, in mattis ex. Aenean vel leo nec ipsum pellentesque placerat.";

let countWords = longText.split(" ");

let numberOfWords = countWords.length;
console.log(numberOfWords);

let textNoEt = longText.split(" et ");

//contar las frases al separar extrayendo "et" en el string"
let numberOfEt = textNoEt.length - 1;

console.log(numberOfEt);

//Bomus 2
let phraseToCheck = "Roma";
phraseToCheck.toUpperCase();
for (let i = 0; i <= length - 1; i++) {
	if (phraseToCheck) {
	}
}
