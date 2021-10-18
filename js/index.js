console.log("I'm ready")

// Iteration 1: Names and Input
let hacker1 = 'Greg'
console.log (`The driver's name is ${hacker1}`)
let hacker2 = 'Carlos'
console.log (`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let driver = hacker1.length;
let navigator = hacker2.length;

if (driver > navigator){
    console.log (`The driver has the longest name, it has ${driver} characters.`)
} else if (navigator > driver){
  console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`)
} else {
  console.log(` Wow, you both have equally long names, ${driver} characters!`)
}

// Iteration 3: Loops
for (i = 0; i < hacker1.length; i++){
    console.log(hacker1[i]);
}
