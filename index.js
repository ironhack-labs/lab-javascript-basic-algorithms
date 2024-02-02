// Iteration 1: Names and Input
let hackerOne = 'Justyna';
console.log("The driver's name is " + hackerOne);

let hackerTwo = 'Lisa';
console.log("The driver's name is " + hackerTwo);


// Iteration 2: Conditionals
console.log(`${hackerOne} ${hackerOne.length}`);
console.log(`${hackerTwo} ${hackerTwo.length}`);


const hackerOneLength = hackerOne.length
const hackerTwoLength = hackerTwo.length
let res = `Wow, you both have equally long names, ${hackerOneLength} characters!`

if (hackerOneLength < hackerTwoLength) {
    res = `It seems that the navigator has the longest name, it has ${hackerTwoLength} characters.`
} else if (hackerOneLength > hackerTwoLength) {
    res = `The driver has the longest name, it has ${hackerOneLength} characters.`//
}
// driver is hackerOne and navigator is hackerTwo

console.log(res)


// Iteration 3: Loops
let spacedCapitalizedName = ""; //set an empty string to store

for (let i = 0; i < hackerOneLength; i++) {
  spacedCapitalizedName += hackerOne[i].toUpperCase() + " "; //adds space and change to all caps
}

console.log(spacedCapitalizedName.slice(0, -1)); // Remove the last space


//reversed order
let reversedName = ""; //set an empty string to store

for (let i = hackerOneLength - 1; i >= 0; i--) {
  reversedName += hackerOne[i];
}

console.log(reversedName);

//lexicographic order

let msg = 'What?! You both have the same name?'

if (hackerOne < hackerTwo) {
    msg = "The driver's name goes first."
} else if (hackerOne > hackerTwo) {
    msg = 'Yo, the navigator goes first, definitely.'
}

console.log(msg)