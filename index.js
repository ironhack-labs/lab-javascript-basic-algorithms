// Iteration 1: Names and Input

//1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Darlington";
//1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}.`);
//1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Yena";
//1.4 Print "The navigator's name is YYYY". 
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
/* 
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

let count01 = hacker1.length;
// console.log(count01);
let count02 = hacker2.length;
// console.log(count02);

if (count01 > count02) {
    console.log(`The driver has the longest name, it has ${count01} characters.`);
} else if (count01 < count02) {
    console.log(`It seems that the navigator has the longest name, it has ${count02} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${count01} characters!.`)
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
// console.log(hacker1);
let capitalDriver = hacker1.toUpperCase();
console.log(capitalDriver);
let splitcapDriver = capitalDriver.split("").join(" ");
console.log(splitcapDriver);


// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
console.log(hacker2.split('').reverse().join(''));

/*
3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?
*/

let firstLetDri = hacker1.charAt(0);
console.log(firstLetDri);
let firstLetNav = hacker2.charAt(0);
console.log(firstLetNav);

if (firstLetDri < firstLetNav) {
    console.log(`The driver's name goes first.`);
} else if (firstLetDri > firstLetNav) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}