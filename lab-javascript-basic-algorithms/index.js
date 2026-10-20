// Iteration 1: Names and Input
const hacker1="Zahra";
console.log("The driver's name is ${hacker1}");

const hacker2="Sofia";
console.log("The navigator's name is ${hacker2}");

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops

const hacker1BigLetters = hacker1.toUpperCase();

const letterIntoList= hacker1BigLetters.split("");

const finalResult = letterIntoList.join(" ")

console.log(finalResult)

//navigator

const listOfLetters = hacker2.split("");

const hacker2Reverse = listOfLetters.reverse().join("");

console.log(hacker2Reverse);

//order of the strings

if (hacker1 < hacker2) {
  console.log(` ${hacker1} goes first.`);
} 
else if (hacker1 > hacker2) {
  console.log("Yo, ${hacker2} goes first, definitely.");
} 
else {
  console.log("What?! You both have the same name?");
}