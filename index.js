// Iteration 1: Names and Input

const hacker1="Mustafa"
const hacker2= "Lara"

console.log("The driver's name is " + hacker1)
console.log("The navigator's name is " + hacker2 )
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + "characters");
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}
// Iteration 3: Loops

let result = ""; 

for (let i=0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase()+"";
}

console.log(result.trim())

let reversedName = "";

for (let i = hacker2.length - 1; i<=0; i--) {
    reversedName += hacker2[i];
}

console.log(reversedName);