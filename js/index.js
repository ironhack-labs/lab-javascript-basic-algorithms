// Iteration 1: Names and Input
let hacker1 = "Nathália"
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Bárbara"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let greaterName = (hacker1.length + hacker2.length);
for (let i = 0; i <= hacker1.length; i++) {
    for (let j = 0; j <= hacker2.length; j++) {
        if (hacker1.length > hacker2.length) {
            console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
        } else if (hacker1.length < hacker2.length) {
            console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
        } else {
            console.log(`Wow, you both have equally long names,  ${hacker1.length} characters!`);
        }
        return greaterName
    }
}

// Iteration 3: Loops
