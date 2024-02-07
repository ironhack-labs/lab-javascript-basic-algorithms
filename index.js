// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

const hacker1 = "Shannon"; //DRIVER

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Charlotte"; //NAVIGATOR

console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`${hacker2} has the longest name. It has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, they both have ${hacker1.length} characters!.
    `)
}
//Must do refactoring above 



// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?

console.log(`${hacker1.toLocaleUpperCase()}`);

function reverseString(hacker2) {
    return ( hacker2 === "" ? "" :reverseString(hacker2.substr(1)) + hacker2.charAt(0));
 
}

console.log(reverseString(hacker2));