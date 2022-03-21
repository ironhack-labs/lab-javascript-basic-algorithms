// Iteration 1: Names and Input
// 
let hacker1 = "Alexander"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Marcus"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the the longest name, it has " + hacker1.length)
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names " + hacker1.length + " characters!")
}


// Iteration 3: Loops

hacker1 = hacker1.toUpperCase();

console.log(hacker1.split("").join(" "));

let reverse = [...hacker2].reverse().join(""); // the three dots?
console.log(reverse);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2 > 0)) {
    console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
}
else {
    console.log("please put your name")
}
