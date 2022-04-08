console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = 'Ramón';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Nicolas';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.localeCompare(hacker2) === 1){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if (hacker1.localeCompare(hacker2) === -1 ) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow you both have equally long names, ${hacker1.length}!`);
}
// Iteration 3: Loops