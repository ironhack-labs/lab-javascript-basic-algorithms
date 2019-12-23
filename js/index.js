// Iteration 1: Names and Input
const hacker1 = "Pablo";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Marta";
console.log(`The navigator's name is ${hacker2}`);

const hacker1Chars = hacker1.length;
const hacker2Chars = hacker2.length;

// Iteration 2: Conditionals
if (hacker1Chars > hacker2Chars) {
  console.log(`The driver has the longest name, it has ${hacker1Chars} characters.`);
} else if (hacker1Chars < hacker2Chars) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Chars} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Chars} characters!`);
}

// Iteration 3: Loops
// 3.1
const hacker1Upper = hacker1.toUpperCase();

let finalString1 = "";
for (let i = 0; i < hacker1Upper.length; i++) {
  finalString1 += hacker1Upper[i] + " ";
}

console.log(finalString1);

// 3.2
let finalString2 = "";

for (let i = (hacker2.length - 1); i >= 0; i--) {
  finalString2 += hacker2[i];
}

console.log(finalString2);

// 3.3
if (hacker1.localeCompare(hacker2) == 1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) == 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus1
const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet est non dui fermentum rutrum et sed urna. Nunc ac nisl ac turpis ultricies tempor nec eget nisl. Pellentesque id est nibh. Aenean nulla diam, interdum eu risus in, vestibulum venenatis diam. Proin quis auctor lorem. Nam interdum ultrices eleifend. Sed a vestibulum arcu, sed sodales metus. Donec id elit id justo egestas molestie ac ac nisi. Donec id sollicitudin est. Morbi laoreet eleifend purus eu porttitor. Nunc metus orci, ornare vitae velit eu, pretium aliquet elit. Aenean semper elit ut mi porttitor sollicitudin. Mauris a tortor orci. Duis justo nunc, ultricies eget magna non, viverra varius lectus.";
//al añadir mas de un parrafo, Visual Studio no me capta el string

const numberOfWords = LoremIpsum.split(' ');
console.log(numberOfWords.length);

// Make your program count the number of times the Latin word et appears.
const numberOfEt = LoremIpsum.match(/et/g);
console.log(numberOfEt.length);

//Bonus2
const phraseToCheck = "Happiness is only real when shared";

