// Iteration 1: Names and Input
const hacker1 = "Ian";
console.log("The driver's name is", hacker1);

const hacker2 = "Nikoletta";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals (.length)

/*2.1. Depending on which name is longer, print:
The driver has the longest name, it has XX characters. or
It seems that the navigator has the longest name, it has XX characters. or
Wow, you both have equally long names, XX characters!. */

    if (hacker1.length > hacker2.length) {
        console.log (`The driver has the longest name, it has ${hacker1.length} characters`);
    }
    
    else if (hacker1.length < hacker2.length) {
        console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
    }

    else {
        console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops

let hacker1Caps = "";
for (let i=0; i<hacker1.length; i++){
    hacker1Caps += hacker1.charAt(i) + " ";
}
console.log (hacker1Caps.toUpperCase());


let hacker2Reversed = "";
let hacker2LastIndex = hacker2.length -1;
    for (let i = hacker2LastIndex; i >=0; i--) {
    const char = hacker2[i];
    hacker2Reversed += (char);
}
console.log (hacker2Reversed);

let theChosenOne = ""
let compare = hacker1 [0].localeCompare(hacker2[0])

    if (compare === 1) {
        console.log (`${hacker1} goes first.`); 
    }
    else if (compare === -1) {
        console.log (`Yo, ${hacker2} goes first, definitely.`);
    }
    else console.log ("What?! You both have the same name?");