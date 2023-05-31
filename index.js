// Iteration 1: Names and Input
const hacker1 = "Sam";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Dante"
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has XX characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has XX characters.");
} else {
    console.log("Wow, you both have equally long names, XX characters!")
}

// Iteration 3: Loops

for (let i = 0; hacker1.length; i++) {
    const char = hacker1[i];
    console.log(char.toUpperCase());
}
