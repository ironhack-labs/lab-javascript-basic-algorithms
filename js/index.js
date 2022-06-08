// Iteration 1: Names and Input

let hacker1 = 'Nicolas'
console.log ("The driver's name is Nicolas")

let hacker2 = 'Jason'
console.log ("The navigator's name is Jason")

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) { 
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1
let driversName = "";
for(let i=0; i < hacker1.length; i++) {
  driversName += hacker1[i].toUpperCase() + " ";
}
console.log(driversName)

//3.2
let navName = "";
for(let i = hacker2.length-1; i >= 0; i--) {
  navName += hacker2[i];
}
console.log(navName)

//3.3
let compare = (hacker1.localeCompare(hacker2));
if (compare < 0) {
    console.log ("The driver's name goes first.")
} else if (compare > 0) {
    console.log ("Yo, the navigator goes first definitely.")
} else {
    console.log ("What?! You both have the same name?")
}