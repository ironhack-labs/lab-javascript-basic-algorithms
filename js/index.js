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

// Iteration 3: Loops

