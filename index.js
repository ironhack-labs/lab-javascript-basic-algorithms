// Iteration 1: Names and Input

let hacker1 = "Adrian"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Josep"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names,${hacker1.length} characters!`)
}

let newName = "";

for (let i = 0; i < hacker1.length; i++) {
    let hackerLetter = hacker1[i];
    let withUpperCase = hackerLetter.toUpperCase();
    let withSpace = withUpperCase + " ";
    newName = newName + withSpace;
}

console.log(newName) 
// Iteration 3: Loops
