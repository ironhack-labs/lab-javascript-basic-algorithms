
// Iteration 1: Names and Inputc
const hacker1 = 'Enrique'
const hacker2 = 'Kike'
console.log({ hacker2 })
console.log(`hola ${hacker1} y ${hacker2}`)


if (hacker1.length < hacker2.length) {
    console.log(`The hacker1 has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length > hacker2.length) {
    console.log(`It seems that the hacker2 has the longest name, it has ${hacker1.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, characters!`)
}

// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
    console.log(`${hacker1.charAt(i)}`)
}
for (let i = hacker1.length - 1; i >= 0; i--) {
    console.log(`El caracter es ${hacker1.charAt(i)}`)
}