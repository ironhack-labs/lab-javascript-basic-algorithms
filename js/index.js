console.log(`I'm ready!`);
console.log('\n');

// Iteration 1: Names and Input
console.log("Iteration 1: Names and Input");
// 1.1 Create a variable `hacker1` with the driver's name.
 let hacker1 = prompt(`Enter driver's name: `);
// let hacker1 = "Roberto";
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);
// 1.3 Create a variable `hacker2` with the navigator's name.
 let hacker2 = prompt(`Enter the navigator's name: `);
// let hacker2 = "Diana";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);
console.log('\n');


// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
console.log("Iteration 2: Conditionals");
let driverLength = hacker1.length;
let navigatorLength = hacker2.length;
if (driverLength > navigatorLength) {
  console.log(`The driver has the longest name, it has ${driverLength} characters.`);
} else if (navigatorLength > driverLength){
  console.log(`It seems the navigator has the longest name, it has ${navigatorLength} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driverLength} characters.`);
};
console.log('\n');

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
console.log("Iteration 3: Loops");
let printDriver = "";
let upperHacker1 = hacker1.toUpperCase();
for (let i = 0; i<upperHacker1.length; i++) {
  printDriver += upperHacker1[i] + ' ';
}
console.log(printDriver);


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let printNavigator = "";
for (let x=hacker2.length - 1; x>=0; x--){
  printNavigator += hacker2[x];
}
console.log(printNavigator);


// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (hacker1 < hacker2){
  console.log(`The driver's name goes first.`);
} else if ( hacker2 < hacker1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
console.log('\n');

// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
console.log("Bonus 1");
console.log('\n');
let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra vestibulum enim ac hendrerit. Curabitur maximus ipsum at risus pharetra, at laoreet libero sodales. Donec in lacinia urna. Maecenas nec efficitur lacus. In ac vestibulum quam, non malesuada enim. Maecenas vel malesuada magna. Aenean vehicula mi ac venenatis lobortis. Sed id arcu sit amet metus tincidunt sollicitudin.
Nullam tincidunt ante libero, quis commodo leo efficitur porttitor. Duis auctor consectetur sem, sed tincidunt tellus molestie in. Sed id enim pharetra risus tempor ultrices. Sed sagittis purus in dui dignissim finibus et in lorem. Aenean accumsan risus nisl, pulvinar convallis arcu elementum vitae. Donec finibus libero quis arcu suscipit, at semper odio ultrices. Aenean sit amet magna vitae est semper mollis nec quis purus. Sed vehicula risus est, at hendrerit lectus viverra et. Praesent suscipit sagittis ullamcorper. Nunc facilisis tempor enim, ac elementum nisi iaculis consequat. Vivamus faucibus luctus commodo. Etiam rhoncus enim at urna molestie, euismod imperdiet magna luctus. Integer id purus quis lectus aliquet fringilla eu quis diam. Ut ullamcorper leo risus, at rutrum erat congue vitae.
Curabitur sollicitudin ornare diam, sed elementum odio condimentum id. Nunc vel neque et dui ultricies aliquam. Phasellus consequat scelerisque magna. Proin lacinia est dolor, at elementum neque fermentum at. Donec tincidunt tempor dolor, et ultrices augue laoreet porttitor. Curabitur magna dolor, mattis at risus tristique, congue commodo augue. Aliquam at augue aliquet, sollicitudin libero ut, porttitor dolor. Nam eget dolor lorem. Maecenas porttitor mauris nec urna maximus egestas.`
console.log(paragraph);
// Make your program count the number of words in the string.
// Este fue mi primer approach, sin embargo, me doy cuenta de un problema. Cuando pasa de un párrafo al otro, relamente no existe un " " (espacio) que contar y por lo tanto me da dos palabras menos que lo que realmente es. No se como contar estas divisiones, pero buscando en google encontré la función de split (se que dice el ejercicio que trataramos de no hacerlo).
console.log("\n");
let wCount = 1; // el counter comienza en 1 por que la ultima palabra no la contaría con la siguiente lógica.
for (iii=0; iii<paragraph.length; iii++){
  if (paragraph[iii] === " ") {
    wCount ++;
  }
}
console.log(`The Lorem Ipsum paragraph above contains ${wCount} words`);
console.log('\n');
// Approach utilizando split
console.log(`Word count second approach to correct for unidentified line breaks`);
let paragraph2 = paragraph.split("\n").join(" ").split(" ");
console.log(`The Lorem Ipsum parargraph above contains ${paragraph2.length} words`);
console.log('\n');
// Make your program count the number of times the Latin word et appears.

// Made the excercise case insensitive to find all words regarless of whether they are capitalized at the begining of a sentence or not.
let wCount2 = 0;
let searchWordInput = prompt(`Input search word: `);
let searchWord = searchWordInput.toLowerCase();
let paragraph3 = paragraph.toLowerCase();
for (iiii=0; iiii<paragraph3.length; iiii++){
    if (paragraph3.slice(iiii, iiii + searchWord.length) === searchWord && paragraph3[iiii-1] === " " && (paragraph3[iiii + searchWord.length] === " " || paragraph3[iiii + searchWord.length] === "," || paragraph3[iiii + searchWord.length] === "." ))
    wCount2 ++;
  }
console.log(`The word "${searchWordInput}"" (case sensitivity ignored) is present ${wCount2} in the Lorem Ipsum paragraph above.`);

console.log('\n');
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. // Write a code that will check if the value we assigned to this variable is a // Palindrome. Here are some examples of palindromes:
console.log("Bonus 2");
let phraseToCheck = prompt(`Enter the phrase to check if it is a Palindrome: `);
//let phraseToCheck = "Was it a car or a cat I saw?";
let cleanPhrase = phraseToCheck.replace(/\W/g, '').toLowerCase();
let reverseCleanPhrase = ""
for (let iiiii=cleanPhrase.length - 1; iiiii>=0; iiiii--){
  reverseCleanPhrase += cleanPhrase[iiiii];
}
if (cleanPhrase === reverseCleanPhrase){
  console.log(`The phrase "${phraseToCheck}" is a Palindrome`);
} else 
  console.log(`The phrase "${phraseToCheck}" is not a Palindrome`);

