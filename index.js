
// Iteration 1: Names and Input
const hacker1 = "Victor"
console.log("The driver's name is " + hacker1); 

const hacker2 = "Sergi"
console.log("The navigator's name is " + hacker2)


const length1 = hacker1.length;
const length2 = hacker2.length;

// Iteration 2: Conditionals

if (length1 > length2){
   console.log (`The driver has the longest name, it has  ${length1} characters.`)
}
else if (length1 < length2){
   console.log (`It seems that the navigator has the longest name, it has ${length2} characters.`)
}
else {
   console.log (`Wow, you both have equally long names, ${length1} characters!`)
}

// Iteration 3: Loops

let driverName = hacker1.toUpperCase().split('').join(' ');
console.log(driverName)

let driverNameInReverse = hacker2.split('').reverse().join('');
console.log(driverNameInReverse)

if (hacker1 < hacker2){
    console.log("The driver's name goes first.")
 }
 else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely.")
 }
 else {
    console.log("What?! You both have the same name?")
 }
