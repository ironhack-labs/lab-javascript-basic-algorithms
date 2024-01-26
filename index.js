// Iteration 1: Names and Input
// Creates a variable hackerOne with a name.

let hackerOne;
hackerOne = "Irru";
console.log(hackerOne);

let hackerTwo = "Avalutsa";
console.log(hackerTwo);

// Iteration 2: Conditionals
// assigns the length of var to another var
// variables can be a property, like length

let myname = hackerOne.length;
let hername = hackerTwo.length; //the 

if (myname === hername) {
    console.log("Doppelganger.");
} else if (myname < hername) {
    console.log("My name only has four letters. I won.");
} else {
    console.log("Avalutsa wins with the longest name ever.");
}

// Iteration 3: Loops

let i = 0;
while (i <= 10) {
  console.log(i);
  i++; // this is the same as i = i + 1
}
