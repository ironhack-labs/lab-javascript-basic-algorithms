// Iteration 1: Names and Input

const hacker1 = "Giulia";

const hacker2 = "Davide";
 
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.lenght1) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1

let newName = "";

for (let i=0; i < hacker1.length; i++) {
    let letterUpper = (hacker1[i]).toUpperCase();
    newName += letterUpper + " "
}

console.log(newName);

//3.2

let nameReversed = "";

for (let i=hacker2.length - 1; i >= 0; i--) {
    nameReversed += (hacker2[i]);
}

console.log(nameReversed);

//3.3

if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
} else if (hacker2 > hacker1) {
    console.log("The driver's name goes first.");
} else {
    console.log("Yo, the navigator goes first definitely.");
}

/* Other solution using array

const names = [hacker1, hacker2];

const sortedNames = names.sort()

sortedNames[0] === sortedNames[1]) {
    console.log("What?! You both have the same name?");
} else if (hacker1 === sortedNames[0]) {
    console.log("The driver's name goes first.");
} else if (hacker2 === sortedNames[0]) {
    console.log("Yo, the navigator goes first definitely.");
} */


