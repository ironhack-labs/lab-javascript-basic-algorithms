// Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver's name.
//1.2 Print "The driver's name is XXXX".
//1.3 Create a variable hacker2 with the navigator's name.
//1.4 Print "The navigator's name is YYYY". 

//1st attempt - took it too literal, I need to place names and use the drivers name as the string
//const hacker1 = "The driver's name";
//const hacker2 = "The navigator's name";

const hacker1 = 'John';
const hacker2 = 'Claus';

console.log("The driver's Name is " + hacker1);
console.log("The navigator's Name is " + hacker2);


// Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
//The driver has the longest name, it has XX characters. or
//It seems that the navigator has the longest name, it has XX characters. or
//Wow, you both have equally long names, XX characters!.
//***************
//on my own I managed to figure this out, however the characters I did not. the xx i left in there for me
//to think about the logic that is missing


if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops
//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
//3.3 Depending on the lexicographic order of the strings, print:
//The driver's name goes first.
//Yo, the navigator goes first, definitely.
//What?! You both have the same name?

let charChange = "";
let backWards = "";

for (let i = 0; i < hacker1.length; i++) {
const sepSpace = hacker1[i].toUpperCase();
console.log(sepSpace);
charChange += sepSpace + " ";
}

for (let i = hacker1.length -1; i > -1; i--) {
const sepSpace = hacker1[i].toUpperCase();
backWards += sepSpace + " ";
}

console.log(charChange);
console.log(backWards);

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
   console.log("What?! You both have the same name?");
}

