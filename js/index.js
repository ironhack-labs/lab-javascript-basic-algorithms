// Iteration 1: Names and Input

let hacker1 = "Nacho"
console.log("The driver's name is " + hacker1);
let hacker2 = "Jacinto"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let hacker1Length = hacker1.length
let hacker2Length = hacker2.length

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
} else if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

// Iteration 3: Loops

let hacker1Array = [""]
for (let i = 0; i < hacker1Length; i++) {
    hacker1Array = hacker1Array + hacker1[i] + " "
}
console.log(hacker1Array.toUpperCase())

let hacker1Array2 = [""]
for (let i = hacker1Length - 1; i >= 0; i--) {
    hacker1Array2 = hacker1Array2 + hacker1[i]
}
console.log(hacker1Array2)