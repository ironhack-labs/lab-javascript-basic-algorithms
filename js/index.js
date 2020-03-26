// Iteration 1: Names and Input
let hacker1 = "Alvaro"
let hacker2 = "Dayan"
let hacker3 = "Virginia"
console.log(`El nombre del codificador es: ${hacker1}`)
console.log(`El nombre del codificador es: ${hacker2}`)
console.log(`El nombre del codificador es: ${hacker3}`)

// Iteration 2: Conditionals
if (hacker3.length > hacker2.length) {
    console.log(`El codificador tiene el nombre mas largo con ${hacker3.length} caracteres`)
} else if (hacker3.length < hacker2.length) {
    console.log(`El codificador tiene el nombre mas largo con ${hacker2.length} caracteres`)
} else {
    console.log("Ambos nombres son iguales")
}


// Iteration 3: Loops
let capitalizedLetters = ""
for (i = 0; i < hacker1.length; i++) {
    capitalizedLetters += (hacker1[i].toUpperCase() + " ")

}
console.log(capitalizedLetters)

let reverse = ""
for (i = (hacker2.length - 1); i >= 0; i--) {
    reverse += hacker2[i]
}
console.log(reverse)

let comparing = hacker2[0].localeCompare(hacker3[0])
console.log(comparing)
if (comparing == 0) {
    console.log(`Los nombres son iguales`)
} else if (comparing == 1) {
    console.log(`${hacker3} va primero`)
} else {
    console.log(`${hacker2} va primero`)
}

//BONUS

let textInWords1 = text1.split(" ")
console.log(textInWords1.length)
let count = 0
for (i = 0; i < textInWords1.length; i++) {
    if (textInWords1.includes('et')) {
        count++
    }
}
console.log(count)