// Iteration 1: Names and Input
let hacker1 = "Shay";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Oliver";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters".`)
}

// Iteration 3: Loops
//print uppercase
let spacedHacker1 = "";

for (let i = 0; i < hacker1.length; i++) {
    spacedHacker1 += hacker1[i] + " ";
}
console.log(spacedHacker1.toUpperCase());
// print backwards
let hacker2backwards = "";
for (let i = hacker2.length - 1; i >= 0; i--){
    hacker2backwards += hacker2[i];
}
console.log(hacker2backwards)
// who's name goes first?
if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely.")
}
else {
    console.log("The driver goes first")
}