// Iteration 1: Names and Input

const hacker1 = "raphaelle";
const hacker2 = "vincent";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let drLgth = hacker1.length;
// console.log(drLgth);
let nvLgth = hacker2.length;
// console.log(nvLgth);

if (drLgth > nvLgth) {
    console.log("The driver has the longest name, it has " + drLgth + " characters.")
}
if (drLgth < nvLgth) {
    console.log("It seems that the navigator has the longest name, it has " + nvLgth + " characters.")
}
if (drLgth === nvLgth) {
    console.log("Wow, you both have equally long names, " + drLgth + " characters!")
}

// Iteration 3-1: Loops

let result = "";

for (let i = 0; i < drLgth; i++) {
    result = result + " " + hacker1[i];
}

console.log(result.toUpperCase());

// Iteration 3-2: Loops

result = "";

var i = nvLgth - 1;
while (i >= 0) {
    result = result + hacker2[i];
    i--
}

console.log(result)

// for (let i = drLgth - 1; i > 0; i--) {
//     result = result + " " + hacker1[i];
// }

// console.log(result.toUpperCase());

// Iteration 3-3: Loops

if (hacker1[0] > hacker2[0]) {
    console.log("The driver's name goes first.")
}
if (hacker1[0] < hacker2[0]) {
    console.log("Yo, the navigator goes first definitely")
}
if (hacker1[0] === hacker2[0]) {
    console.log("What?! You both have the same name?")
}