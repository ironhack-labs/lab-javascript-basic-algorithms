// Iteration 1: Names and Input
const hacker1 = "Bruno Pais";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Someone Else";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.lenght} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
for(let i = 0; i < hacker1.lenght; i++) {
    console.log(hacker1.substr(i, 1) + " " );
}