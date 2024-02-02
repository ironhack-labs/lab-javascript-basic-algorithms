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
let spacedCapitalizedName = "";

for (let i = 0; i < hackerOneLength; i++) {
  spacedCapitalizedName += hackerOne[i].toUpperCase() + " ";
}


console.log(spacedCapitalizedName.slice(0, -1)); // Remove the last space

