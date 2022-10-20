// Iteration 1: Names and Input

let hacker1 = "Christian"
console.log("The driver's name is Alex")
let hacker2 = "Alex"
console.log("The navigator's name is Christian")

// Iteration 2: Conditionals
let hacker1NameLength = hacker1.length;
let hacker2NameLength = hacker2.length;

if (hacker1NameLength > hacker2NameLength) {
    console.log(`The driver has the longer name, it has ${hacker1NameLength} characters `)
} else if (hacker2NameLength > hacker1NameLength) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2NameLength} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1NameLength} characters`)
}

// Iteration 3: Loops
let hacker1NameCharList = hacker1.split("");
let hacker1SpacedName = "";
for (let i = 0; i < hacker1NameCharList.length; i++) {
    hacker1SpacedName += hacker1NameCharList[i] + " ";
}
console.log(hacker1SpacedName.toUpperCase())

let hacker2NameCharList = hacker2.split("");
let nameReversed = "";

for (let i = hacker2NameCharList.length - 1; i >= 0; i--) {
    nameReversed += hacker2NameCharList[i];
}
console.log(nameReversed)

for (let i = 0; i < hacker1NameLength; i++) {
    if ((hacker1NameCharList[i].localeCompare(hacker2NameCharList[i])) > 0) {
        console.log("Yo, the navigator goes first definetly");
        break;
    } else if ((hacker1NameCharList[i].localeCompare(hacker2NameCharList[i])) < 0) {
        console.log("The driver's name goes first");
        break;
    } else {
        continue;
        console.log("What?! You both have the same name?")
    }
}