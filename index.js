

// --------------- Iteration 1: Names and input ---------------

let hacker1 = "Angel";
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Doug";
console.log(`The navigator's name is ${hacker2}.`)

// --------------- Iteration 2: Conditionals ---------------

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length > hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// --------------- Iteration 3: Loops ---------------

//touppercase + space between letter + same line
let nameSeparate = "";

for (let i = 0; i < hacker1.length; i++){
  nameSeparate += hacker1[i].toUpperCase() + " ";
}

console.log(nameSeparate);

//backwards

let backwards = "";

for (let i = hacker1.length - 1; i >= 0; i--){
  backwards += hacker1[i];
}
console.log(backwards);

//lexicographic order

if (hacker1.localeCompare(hacker2) < 0){
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) == 0){
  console.log('What?! You both have the same name?')
} else {
  console.log("Yo, the navigator goes first definitely.")
}

// --------------- Bonus 1 ---------------

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let manyWords = longText.split(' ').length; 

console.log(`The text has a total of ${manyWords} words`)

let etSubString = "et";

let count = longText.split(etSubString).length -1;

console.log(`The word "et" appears a total amount of ${count} times inside the text.`);

