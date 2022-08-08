// Iteration 1: Names and Input
const hacker1 = 'Miriam'
console.log("The driver's name is" + " " + hacker1)

const hacker2 = 'Camila'
console.log("The navigator's name is" + " " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}


// Iteration 3: Loops
// capital letters
let bigLetters1 = hacker1.toUpperCase()

let driversName = ""
for (let i = 0; i < hacker1.length; i++) { 
    driversName = driversName + " " + bigLetters1[i];
}

console.log(driversName.trim())

// reverse order
function reverseString(hacker2) {

let reversedName = "";
    for (let i = hacker2.length - 1; i >= 0; i--) {
        reversedName += hacker2[i];
    }
    console.log(reversedName);
}
reverseString(hacker2);

//lexicographic order
if (hacker1[0] < hacker2[0]) {
    console.log(`${hacker1} goes first`)
} else if (hacker1[0] > hacker2[0]) {
    console.log(`Yo ${hacker2} goes first definitely.`)
} else if (hacker1[0] === hacker2[0]) {
    console.log(`What?! You both have the same name?.`)
}