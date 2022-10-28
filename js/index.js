// Iteration 1: Names and Input
let hacker1 = "Nicole";
console.log(`The driver's name is ${hacker1}.`)
let hacker2 = "Dhruv";
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log( `The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
} else {
    console.log(`input a name for hacker1 and hacker2 variables.`)
};

// Iteration 3: Loops

// Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let hacker1 = "Nicole";
let newName = hacker1.toUpperCase();
let finalDriverName = "";

for (i=0; i< newName.length; i++) {
    finalDriverName += newName[i] + " ";
};
console.log(finalDriverName.trim());

//  Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let hacker2 = "Dhruv";
let reverseName = [];

for (i=0; i < hacker2.length; i++) {
    reverseName.unshift(hacker2[i]);
};
console.log(reverseName.toString().replaceAll(',', ''));


//put the string into an array - declare the array as a variable 
// reverse the order to the array- unshift 
// put the array back into a string toString
//print the string in reverse- replaceAll


//  Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

let hacker1 = "Nicole";
let hacker2 = "Dhruv";

let hackerArr = [hacker1, hacker2];

console.log(hackerArr.sort());

if (hacker1 == hacker2) {
    console.log(`What?! You both have the same name?`)
} else if (hacker1 || hacker2 == "") {
    console.log(`Add driver and navigator names.`)
} else if (hackerArr[0]== hacker1) {
    console.log(`The driver's name goes first.`)
} else if (hackerArr[0] == hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`Add driver and navigator names.`)
};

