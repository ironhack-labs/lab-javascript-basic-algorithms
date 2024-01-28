// Iteration 1: Names and Input
// Creates a variable hackerOne with a name, same for hackerTwo

let hackerOne;
hackerOne = "Irru";
console.log(hackerOne);

let hackerTwo = "Avalutsa";
console.log(hackerTwo);

// Iteration 2: Conditionals
// assigns the length of var to another var
// variables can be a property, like length

let hackerOneLength = hackerOne.length;
let hackerTwoLength = hackerTwo.length; // i-am dat variabilei un nr., chemandu-i lungimea

if (hackerOneLength === hackerTwoLength) {
    console.log(
        "Doppelganger. We both have equally long names, " + hackerOneLength + " characters."
        );
} else if (hackerOneLength < hackerTwoLength) {
    console.log(
        "My name only has, " + hackerOneLength + " letters. I won."
        );
} else {
    console.log(
        "Avalutsa wins with, " + hackerTwoLength + " letters."
    );
    }

// Iteration 3: Loops

//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// Para imprimir caracteres en mayúsculas separados por un espacio

for (let i = 0; i < hackerOne.length; i++) {
    console.log(hackerOne[i].toUpperCase() + ' '); //took position i, put in in upper case and added a space
}

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

// Para imprimir el nombre al revés

for (let i = hackerTwo.length - 1; i >= 0; i--) { //starts with last letter and goes backwards toward the first one
    console.log(hackerTwo[i]); // shows letters 
}

//3.3 Depending on the lexicographic order of the strings, print:

if (hackerOne.localeCompare(hackerTwo) < 0) {
    console.log(
        "Irru's name goes first."
        );
} else if (hackerOne.localeCompare(hackerTwo) > 0) {
    console.log(
        "Avalutsa's name goes first."
    );
} else {
    console.log("You must be joking.");
}

//Bonus 1:

const str = "Welcome to the United States of Cryptids, where mysterious monsters lurk in the dark forests, deep lakes, and sticky swamps of all fifty states. From the infamous Jersey Devil to the obscure Snallygaster, travel writer and chronicler of the strange J. W. Ocker uncovers the bizarre stories of these creatures and investigates the ways in which communities embrace and celebrate their local cryptids.";

function parLength(str) { 
    const array = str.trim().split(/\s+/); 
    return array.length; 
} 
  
console.log("Word count:" ,parLength(str));