// Iteration 1: Names and Input
let hacker1 = "Jessica";
let hacker2 = "Reshma";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1
let hacker1Splitted = hacker1.split('');
let hacker1WithSpace = hacker1Splitted.join(' ');
console.log(hacker1WithSpace.toUpperCase());

//3.2
let hacker2Splitted = hacker2.split('');
let hacker2Reverse = hacker2Splitted.reverse();
let hacker2AfterReverse = hacker2Reverse.join('');
console.log(hacker2AfterReverse);