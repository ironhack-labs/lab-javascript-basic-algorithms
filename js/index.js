// Iteration 1: Names and Input

let hacker1 = "Manuel";
console.log("The driver's name is " + hacker1);

let hacker2 = "Yanxia";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
	console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
	console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// 3.1

let spelledName = [];

for (let i = 0; i < hacker1.length; i++) {
	spelledName = spelledName + hacker1.charAt(i) + " ";
}

console.log(spelledName.toUpperCase());

// 3.2

let spelledBackwards = [];

for (let i = hacker2.length; i >= 0; i--) {
	spelledBackwards = spelledBackwards + hacker2.charAt(i);
}

console.log(spelledBackwards);

// 3.3

let hacker1Initial = hacker1.slice(0, 1);
let hacker2Initial = hacker2.slice(0, 1);

if (hacker1Initial < hacker2Initial) {
	console.log(`The driver's name goes first.`);
} else if (hacker1Initial > hacker2Initial) {
	console.log(`Yo, the navigator goes first definitely.`);
} else {
	console.log(`What?! You both have the same name?`);
}

// BONUS 1

// B.1.2

let lorem =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget orci sollicitudin, commodo neque eu, congue justo. Proin semper ex a dapibus posuere. Suspendisse fermentum leo id orci semper pellentesque. Nulla hendrerit odio ac nisi aliquet sodales in vitae magna. Pellentesque sed urna iaculis, eleifend ligula sit amet, luctus urna. Nam mattis lorem elementum, finibus leo a, ullamcorper orci. Donec non eleifend nisl. Quisque venenatis ligula id enim gravida blandit eu eu odio. Vivamus fermentum vel sapien sed bibendum. Mauris a augue pretium dui sagittis euismod vitae laoreet leo. Maecenas egestas blandit suscipit. Sed posuere mollis ipsum a vehicula. Nam id consectetur risus, a rhoncus nulla. Proin in rhoncus massa. Nulla sed blandit nulla, a imperdiet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vulputate arcu sed dui dignissim ultrices id eu nunc. Fusce pulvinar pulvinar sem, et tempor metus consequat vitae. Donec in accumsan orci. Aenean in turpis ut magna condimentum mattis a sed est. Donec blandit egestas augue, sagittis malesuada ante aliquet quis. Etiam ipsum quam, convallis a ullamcorper nec, iaculis in mi. Etiam convallis nec risus quis dictum. Proin varius tellus nec lectus egestas tincidunt. Cras fringilla vitae ante vitae convallis. Nulla nec dignissim augue, sit amet mattis mauris. Suspendisse lacinia laoreet erat vel vestibulum. Cras a consectetur urna, vitae mollis enim. Cras nec leo mauris. Aenean nec convallis ante.";

const words = lorem.split(" ");
console.log(`The variable Lorem contains ${words.length} words.`);

// B.1.2

let etWords = "et";
const etCount = lorem.match(etWords);

console.log(`The number of et in the lorem text is ${etCount["index"]}.`);

// BONUS 2

// No nos dio tiempo ;(

/* let phraseToCheck = "Tacocat";
let phraseToCheckBackwards = [];

for (let i = phraseToCheck.length; i >= 0; i--) {
	phraseToCheckBackwards = phraseToCheckBackwards + phraseToCheck.charAt(i);
}

for (let i = 0; i < phraseToCheck.length; i++) {
	if (phraseToCheck.slice(i, 1) === phraseToCheckBackwards.charAt(i)) {
		console.log("It is a palindrome.");
	} else {
		console.log("It is not a palindrome.");
	}
} */
