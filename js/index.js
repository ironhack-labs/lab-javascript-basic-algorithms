// Iteration 1: Names and Input
console.log('\nIteration 1: Names and Input\n');

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "José Luis Rodríguez";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name. 
let hacker2 = "Pedro J Sola Campoy";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

console.log('\nIteration 2: Conditionals\n')

let hacker1NoSpace = hacker1.split(" ").join("")
let hacker2NoSpace = hacker2.split(" ").join("")

let hacker1Lenght = hacker1NoSpace.length;
let hacker2Lenght = hacker2NoSpace.length;


// 2.1. Depending on which name is longer, print:
if (hacker1Lenght > hacker2Lenght) {
  console.log(`The driver has the longest name, it has ${hacker1Lenght} characters.`)
} else if (hacker1Lenght < hacker2Lenght) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Lenght} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Lenght} characters!.`)
}


// Iteration 3: Loops

console.log('\nIteration 3: Loops\n');

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
hacker1Spaced = hacker1NoSpace.toUpperCase().split("").join(" ");

console.log(hacker1Spaced);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"


let hacker2Reverse = "";

for (let i = 0; i < hacker2.length; i++) {
  hacker2Reverse = hacker2[i] + hacker2Reverse
}

console.log(hacker2Reverse);


// 3.3 Depending on the lexicographic order of the strings, print:


let hachersCompared = hacker1.localeCompare(hacker2);

if (hachersCompared === 1) {
  console.log("The driver's name goes first.")
} else if (hachersCompared === -1) {
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both have the same name?")
}
