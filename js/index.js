// Iteration 1: Names and Input
const hacker1 = "Tal";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Patricia";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name. It has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let hackerUpperCase = ""
for (i = 0; i < hacker1.length; i++) {
    hackerUpperCase += hacker1[i].toUpperCase() + " "
}
console.log(hackerUpperCase)

let hackerReverse = ""
for (i = hacker2.length - 1; i >= 0; i--) {
    hackerReverse += hacker2[i]

}
console.log(hackerReverse);

switch (hacker1.localeCompare(hacker2)) {
    case -1:
        console.log(`The driver's name goes first.`)
        break

    case 1:
        console.log(`Yo, the navigator goes first definitely.`)
        break
    case 0:
        console.log(`What?! You both have the same name?`)
        break
}