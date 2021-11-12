// Iteration 1: Names and Input
let hacker1 = "Lucas";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jessica";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops

let nomeEsp = ""

for (let i = 0; i < hacker1.length; i++) {
    nomeEsp += hacker1[i];
    nomeEsp += " ";
}

console.log (nomeEsp.toUpperCase())

let nomeAoCon = ""

for (let i = hacker1.length - 1; i >= 0; i--) {
    nomeAoCon += hacker1[i];
    nomeAoCon += " ";
}

console.log (nomeAoCon.toUpperCase())

let names = [hacker1,hacker2];

names.sort();

if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")

} else if (names[0] === hacker2) {
    console.log("Yo, the navigator goes first definitely.")

} else {
    console.log("The driver's name goes first.")
}

