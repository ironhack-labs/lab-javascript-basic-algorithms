// Iteration 1: Names and Input
let hacker1 = "Nathália"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bárbara"
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
for (let value of hacker1){
    console.log(value.toUpperCase());
}

let hacker2Name = hacker2.split("").reverse().join("");
console.log(hacker2Name);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}