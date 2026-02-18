// Iteration 1: Names and Input

let hacker1 = "cesar";
console.log(hacker1);
let hacker2 = "franco";
console.log(hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
	console.log(
		`The driver has the longest name, it has ${hacker1.length} characters.`,
	);
} else if (hacker2.length > hacker1.length) {
	console.log(
		`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
	);
} else if (hacker1.length === hacker2.length) {
	console.log(
		`Wow, you both have equally long names, ${hacker1.length} characters!`,
	);
}

// Iteration 3: Loops

let letras = "";

for (let i = 0; i < hacker1.length; i++) {
	let capLetra = hacker1[i].toUpperCase();
	letras += capLetra + " ";
}

console.log(letras);

let nombreAlreves = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
	let char = hacker2[i];
	nombreAlreves += char;
}

console.log(nombreAlreves);

let driversLexi = hacker1[0];
let navegatorsLexi = hacker2[0];

if (driversLexi > navegatorsLexi) {
	console.log("The driver's name goes first.");
} else if (driversLexi < navegatorsLexi) {
	console.log("Yo, the navigator goes first, definitely.");
} else if (driversLexi === navegatorsLexi) {
	console.log("What?! You both have the same name?");
}

//Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue lacus, interdum sit amet sapien nec, rutrum volutpat ligula. Fusce ut rutrum ante. Aenean interdum sem urna, vel maximus ipsum suscipit id. Mauris ornare dui ac felis semper fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur elementum eu leo id blandit. Ut eu eros feugiat ante consectetur ultrices. Maecenas commodo, metus et tincidunt dapibus, lacus purus gravida erat, sit amet dictum tellus metus id libero. Maecenas luctus cursus magna vel consequat. Sed risus mi, venenatis et felis sit amet, pulvinar scelerisque orci.

Nulla lacinia mauris risus, sit amet sodales ante lacinia at. Mauris eget eros et quam pellentesque lacinia. Integer at molestie eros. Sed rhoncus, metus ac rhoncus varius, urna purus dapibus risus, eu egestas lectus urna ac eros. Sed laoreet, mauris sed auctor vulputate, nulla augue malesuada metus, nec tincidunt dui odio a risus. Sed quis nulla vel purus malesuada fringilla id vel nunc. Curabitur quis efficitur felis. Pellentesque ornare lacinia neque in vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque fringilla sodales ultrices. In lacinia sit amet metus sit amet dictum. Morbi in metus id nisi malesuada commodo a vel purus. Sed a elementum felis, non mattis magna. Quisque ornare laoreet eros, eu egestas massa elementum ut. Cras enim nisi, efficitur nec mattis sed, sodales eu erat. Aliquam dignissim mauris a quam porttitor sagittis sit amet at ante.

Aliquam sed porttitor nulla. Nulla et arcu nulla. Mauris blandit hendrerit efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus mi nisi, venenatis id dui at, fringilla auctor felis. Nam posuere orci id sem viverra faucibus sed non justo. Nam nec velit vitae leo feugiat tempor quis in nulla.`;

let result;

for (let i = 0; i < longText.length; i++) {
	let spaces = longText.split(" ");
	result = spaces.length;
}

console.log(result);

//Bonus 2

let phraseToCheck = "taco cat";

let resultDerecho = "";
let resultReves = "";

for (let i = 0; i < phraseToCheck.length; i++) {
	let derecho = "";
	derecho += phraseToCheck[i];
	let derechoSinEspacios = derecho.replaceAll(" ", "");
	resultDerecho += derechoSinEspacios.toLowerCase();
}
console.log(resultDerecho);

for (i = phraseToCheck.length - 1; i >= 0; i--) {
	let reves = "";
	reves += phraseToCheck[i];
	let revesSinEspacios = reves.replaceAll(" ", "");
	resultReves += revesSinEspacios.toLowerCase();
}

console.log(resultReves);

if (resultDerecho === resultReves) {
	console.log("Esta frase es palindromo");
} else {
	console.log("No es palindromo");
}
