// Iteration 1: Names and Input

let hacker1 = 'Uwe'

console.log(`The driver´s name is ${hacker1}`)

let hacker2 ='Ulf'

console.log(`The driver´s name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}  

// Iteration 3: Loops

let hacker1Cap = hacker1.toUpperCase()
let hacker1Space = ''

for ( let i = 0; i < hacker1Cap.length; i++ ){
  hacker1Space += hacker1Cap[i] + ' '
}

console.log(hacker1Space) 

let hacker1CapFirstLetter = hacker1[0].toUpperCase() + hacker1.slice(1)
let hacker1Backw = ''

for (let i = hacker1CapFirstLetter.length - 1 ; i >= 0; i--){
  hacker1Backw += hacker1CapFirstLetter[i]
}

console.log(hacker1Backw) 

console.log(hacker1Backw) 

let Lex = hacker2.localeCompare(hacker1)

if (Lex === 1){
  console.log(`The driver's name goes first.`)
}
else if (Lex === -1){
  console.log(`Yo, the navigator goes first definitely.`)
}
else {
  console.log(`What?! You both have the same name?`)
}


