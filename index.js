// Iteration 1: Names and Input
const hacker1 = "John"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Daniel"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loopsx

let hacker1Name = "";

for (let i = 0; i < hacker1.length; i++) {
    hacker1Name += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1) {
        hacker1Name += " ";
    }
}
console.log(hacker1Name)

let hacker2Name = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Name += hacker2[i];

}

console.log(hacker2Name)

console.log(hacker1Name < hacker2Name)

if (hacker1Name < hacker2Name) {
    console.log("The driver's name goes first.")
} else if (hacker1Name > hacker2Name) {
    console.log("Yo, the navigator goes first, definitely.")
}
else {
    console.log("What?! You both have the same name?")
}