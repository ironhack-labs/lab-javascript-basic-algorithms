// Iteration 1: Names and Input

let hacker1 = 'mattt'
let hacker2 = 'mattt'


console.log(`The driver's name is ${hacker1}`)
console.log(`The driver's name is ${hacker2}`)
console.log(hacker1.length)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length ) {
 console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names ${hacker2.length} characters.`)
}

// Iteration 3: Loops

let nombres = ['Matt', 'Judit']
nombres.sort()

console.log(nombres)

hacker1.split('').forEach ( char =>  {
    console.log(char.toUpperCase())
})

//console.log(hacker2.split('').reverse().join(''));
let = resultado = hacker1.localeCompare(hacker2)
function ordenlexico(hacker1, hacker2) {
   let = resultado = hacker1.localeCompare(hacker2) 
}

if (resultado < 0) {
    console.log(`The driver's name goes first.`)
}   else if ( resultado > 0 ) {
    console.log(`Yo, the navigator goes first, definitely.`)
}   else {
    console.log(`What?! You both have the same name?`)
}