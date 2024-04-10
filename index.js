// Iteration 1: Names and Input
const hacker1 = "Christian";
const hacker2 = "Angelica";

console.log("The driver's name is " + hacker1);
console.log( "The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has "+ hacker1.length +" characters.")
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, "+ hacker1.length +" characters!")
} else {
    console.log("It seems that the navigator has the longest name, it has "+ hacker2.length +" characters.");
} 

let name1 = "";
for(let i = 0; i < hacker1.length; i++) {
    let char = hacker1[i];
    name1 += char.toUpperCase() + " ";
    
}
console.log(name1);

let nameReverse = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
    let char = hacker2[i];
    nameReverse += char.toLowerCase();
}
console.log(nameReverse);


if (hacker1.localeCompare(hacker2) == -1) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) == 1) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Iteration 3: Loops

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
/*
 - Generate 3 paragraphs. Store the text in a new string variable named `longText`.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
  */
 let wordCount = longText.split(' ').length;
 console.log(wordCount);

 let counter = 0;
 for(let i = 0; i < longText.length; i++) {
    if (longText[i] == "e" && longText[i+1] == "t") {
        counter++;
    }
 }
console.log(counter);
