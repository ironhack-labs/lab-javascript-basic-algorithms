// Iteration 1: Names and Input

const hacker1 = "Pablo"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Juan"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

//P A B L O (3.1)
const driverUpp = hacker1.toUpperCase()

//VERSION PRO
console.log(driverUpp.split('').join(' '))

//VERSION MENOS PRO
console.log(`${driverUpp[0]} ${driverUpp[1]} ${driverUpp[2]} ${driverUpp[3]} ${driverUpp[4]}`)

//nauJ (3.2)
console.log(`${hacker2[3]}${hacker2[2]}${hacker2[1]}${hacker2[0]}`)

//(3.3)
if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`The driver's name goes first`)
} else if (hacker2.localeCompare(hacker1) === 1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}




