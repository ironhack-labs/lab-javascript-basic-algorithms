// Iteration 1: Names and Input
const hacker1 = "Yves";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Victor";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
let hacker1Result = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i !== hacker1.length - 1) {
        hacker1Result += `${hacker1[i].toUpperCase()} `
    } else {
        hacker1Result += `${hacker1[i].toUpperCase()}`
    }
}

console.log(hacker1Result);

// 3.2
let hacker2Result = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Result += hacker2[i];
}
console.log(hacker2Result);

// 3.3
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.")
} else if (hacker2.localeCompare(hacker1) < 0) {
    console.log("Yo the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}