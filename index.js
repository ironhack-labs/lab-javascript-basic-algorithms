// Iteration 1: Names and Input
const hacker1 = "Carlota"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Marina'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

let line = ""

const hackerUpper = hacker1.toUpperCase()
for (let i = 0; i < hackerUpper.length; i++) {
    line += hackerUpper[i] + " "
    console.log(line)
}

let hackerReverse = ""

for (let j = hacker2.length - 1; j >= 0; j--) {
    hackerReverse += hacker2[j]
    if (hackerReverse[j] = hacker2.length) {
        console.log(hackerReverse)
    }
}


if (hacker1 > hacker2) {
    console.log('The driver´s name goes first')
} else if (hacker2 > hacker1) {
    console.log('yo, the navigator goes first, definitely')
} else {
    console.log('what?! You both have the same name?')
}

// Iteration 3: Loops
