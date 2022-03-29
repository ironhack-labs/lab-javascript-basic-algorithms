// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = "Christian";

//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

//1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = "Brunna";

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:

if (hacker1.length > hacker2.length) {
//- The driver has the longest name, it has XX characters. or
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length ) {
//- It seems that the navigator has the longest name, it has XX characters. or
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}   else {
//- Wow, you both have equally long names, XX characters!.
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)}


// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let spaceCapitals = " "

for (let i = 0; i < hacker1.length; i++) {
   spaceCapitals += hacker1[i].toUpperCase() + " "; }

  console.log(spaceCapitals);


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reverseOrder = " ";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseOrder += hacker2[i]
};

console.log(reverseOrder);


//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
}

//- Yo, the navigator goes first definitely.

else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
}

//- What?! You both have the same name?

else {
  console.log("What?! You both have the same name?")
}
