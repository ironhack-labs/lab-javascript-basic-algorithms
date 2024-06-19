// Iteration 1: Names and Input

let hacker1 = "Juan"

console.log( `el nombre del conductor es ${hacker1}`)

let hacker2 = "Maria"

console.log(`${hacker2} Es la navegadora`)

// Iteration 2: Conditionals

let charHacker1 = hacker1.length
let charHacker2 = hacker2.length

if (charHacker1 > charHacker2) {
    console.log (`el conductor tiene el nombre más largo, tiene ${charHacker1} caracteres`)
} else if (charHacker2 > charHacker1) {
    console.log (`el navegador tiene el nombre más largo, tiene ${charHacker2} caracteres`)
}else {
    console.log (`Wow tienen el misma cantidad de caracteres, ${charHacker2} caracteres`)
}

// Iteration 3: Loops

let hacker1Caps = hacker1.toUpperCase()
let spacedHacker1 = " "

for (let i = 0; i < hacker1Caps.length; i++) {
    spacedHacker1 += hacker1Caps[i]

    if (i < hacker1Caps.length - 1) {
        spacedHacker1 += " "
    } 
}

console.log (spacedHacker1)

let hacker2Reverso = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverso += hacker2[i]
}

console.log(hacker2Reverso)

if (hacker1[0] < hacker2[0]) {
    console.log (`el nombre del conductor va primero`)
} else if (hacker1[0] > hacker2[0]) {
    console.log (`el nombre del navegador va definitivamente primero`)
} else if (hacker1 === hacker2){
    console.log (`wow tienen el mismo nombre`)
}

// el numero de la letra que es menor, va primero


