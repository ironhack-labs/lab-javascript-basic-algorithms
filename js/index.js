// Iteration 1: Names and Input
// Create a variable `hacker1` with the driver's name.
const hacker1 = "Jaime";

// Print `"The driver's name is XXXX"`.
console.log(`The driver\'s name is ${hacker1}`);

// Create a variable `hacker2` with the navigator's name.
const hacker2 = "Eduardo";

// Print `"The navigator's name is YYYY"`.
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals
// Depending on which name is longer, print:
const driverNameLength = hacker1.length;
const navigatorNameLength = hacker2.length;

if (driverNameLength > navigatorNameLength) {
 console.log(`The driver has the longest name, it has ${driverNameLength} characters.`);
} else if (navigatorNameLength > driverNameLength) {
 console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`);
} else {
 console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`);
}

// Iteration 3: Loops
// Print all the characters of the driver's name, separated by a space and in capitals
let driverUpperCase = hacker1.toUpperCase();
let result = "";

for (let index = 0; index <= driverUpperCase.length - 1; index++) {
  let x = driverUpperCase[index] + " ";
  result += x;
}

console.log(result);

// Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigatorReversed = '';
for (let index = 6; index >= 0; index--) {
  const letter = hacker2[index]; 
  navigatorReversed += letter;
}
console.log(navigatorReversed);

// Depending on the lexicographic order of the strings, print:
let driverLexOrder = hacker1.localeCompare(hacker2);

if (driverLexOrder === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (driverLexOrder === -1) {
  console.log("The driver's name goes first.");  
} else {
  console.log("What?! You both have the same name?");
}

// Bonus1
// Generate 3 paragraphs. Store the text in a variable type of string.
let loremParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien ipsum, luctus et erat quis, eleifend aliquam elit. Sed laoreet lacus auctor ligula sollicitudin ullamcorper. Integer in sollicitudin augue. Sed ligula ex, hendrerit a velit ut, ultrices vulputate magna. Duis sagittis nisi in massa varius, in maximus risus tempor. Morbi at quam nec ligula pretium feugiat quis vel tortor. Vivamus feugiat pharetra risus. Duis vel euismod leo, sed blandit sem. Aenean sit amet massa vel turpis egestas viverra nec sodales enim. Quisque ultricies elementum orci, a ullamcorper metus efficitur gravida. Morbi auctor, nulla non volutpat porta, neque nisi sodales lacus, fermentum eleifend odio dolor quis erat. Nullam nec felis vehicula, ullamcorper arcu non, porttitor eros. Quisque bibendum semper eleifend. Quisque rhoncus diam vel nisi feugiat, in mollis turpis vulputate. Donec feugiat nisi in eros finibus, in consectetur est tempor. Sed a urna eu neque sollicitudin posuere et et orci. Maecenas interdum vestibulum cursus. Proin nec pulvinar leo. Nulla lobortis rhoncus scelerisque. Pellentesque venenatis vehicula risus, non mattis lorem egestas nec. Fusce vel tellus a felis auctor pretium sit amet et quam. Donec et egestas diam. Nam vitae risus quis neque posuere porta. Aliquam varius leo et viverra viverra.Integer id lobortis nisi. Duis ornare mauris id quam aliquam feugiat. Sed auctor id metus ut placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ultricies elit ut neque sollicitudin sodales. Phasellus et facilisis arcu, ut porta elit. Fusce et lobortis nibh, eget pharetra ante. Sed non facilisis augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium imperdiet massa ac interdum. Nullam eu efficitur tellus. Sed at semper odio. Vivamus dolor dolor, venenatis et ex id, aliquam molestie ante. Mauris sem est, varius quis gravida vel, dignissim ac leo. Vivamus quis ligula eu eros egestas hendrerit id et justo."

// Make your program count the number of words in the string.
console.log(loremParagraph.length);

// Make your program count the number of times the Latin word et appears.
console.log(loremParagraph.indexOf("et"));

// Bonus2
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.
let phraseToCheck = "madam";
let reversedPhrase = '';

for (let index = phraseToCheck.length - 1 ; index >= 0; index--) {
  const phraseLetter = phraseToCheck[index]; 
  reversedPhrase += phraseLetter;
}

if (phraseToCheck === reversedPhrase) {
  console.log(`Word ${phraseToCheck} is a Palindrome`);
} else {
  console.log(`Word ${phraseToCheck} is not a Palindrome`);
}
