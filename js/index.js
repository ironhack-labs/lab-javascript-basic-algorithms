console.log("I'm ready!")

// Iteration 1: Names and Input
let hacker1 = "Sergio"
console.log("The driver's name is " + hacker1)
let hacker2 = "Laura"
console.log("The navigator's name is " + hacker2)
    
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + "characters")
}
if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
}
else if(hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters")
}

// Iteration 3: Loops
let driverNameSpaced = "";
let driverToUppercase = hacker1.toUpperCase();
for (let i = 0; i < hacker1.length; i++) {
    driverNameSpaced += driverToUppercase[i] + ' ';
}   
    driverNameSpaced = driverNameSpaced.trim();

let reversedNavigationName = "";
for (let i = hacker2.length -1; i >= 0; i--) {
    reversedNavigationName += hacker2[i]
}
console.log(driverNameSpaced)
console.log(reversedNavigationName)
