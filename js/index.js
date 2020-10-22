// Iteration 1: Names and Input

let hacker1 = 'Natalia'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Carlos'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//Creamos un array para luego con un join unir las letras en un string

let letters = []

for (i = 0; i < hacker1.length; i++) {
    letters.push(hacker1[i])
}
console.log(letters.join(' '))

let lettersN = []

for (i = hacker2.length - 1; i >= 0; i--) {
    lettersN.push(hacker2[i])
}
console.log(lettersN.join(''))



if (hacker2.localeCompare(hacker1) === -1) {

    console.log(`Yo, the navigator goes first definitely.`)

} else if (hacker2.localeCompare(hacker1) === 1) {
    console.log(`The driver's name goes first.`)

} else {
    console.log(`What?! You both have the same name?`)
}
