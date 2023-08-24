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

for (let i = hacker2.length-1; i >=0; i--) {
    hacker2Reversed += hacker2[i];
    console.log (hacker2Reversed);
}

/* 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N". - .toUpperCase, space " "

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?*/

