// Iteration 1: Names and Input
let hacker1 = "Nico";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Natasha"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops
let hacker1Mayusculas = hacker1.toUpperCase()
let haker1Vacia = " ";

for( let i = 0; i < hacker1Mayusculas.length; i++) {
    if (i < hacker1Mayusculas.length) {
        console.log (hacker1Mayusculas[i].length)
    }
}

//3.2

let str = "Nico"
let newStr = str.split('')
console.log(newStr.reverse().join(''))
