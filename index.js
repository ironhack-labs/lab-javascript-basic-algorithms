// Iteration 1: Names and Input
const hacker1 = "Sergio"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Carlos"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters`);
}

// Iteration 3: Loops
let name = "";
for (let i = 0; i < hacker1.length; i++) {
    const char = hacker1[i];
    name += char.toUpperCase() + " ";
}
console.log(name);

let navigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    const char = hacker2[i];
    navigator += char;
}
console.log(navigator);


const names = [hacker1, hacker2];
names.sort();
if (names[0] === "Sergio") {
    console.log(`The driver's name goes first`);
} else if (names[0] === "Carlos") {
    console.log(`Yo, the navigator goes first, definetely`);
} else {
    console.log(`What?! You both have the same name?`);
}
