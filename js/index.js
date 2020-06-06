// Iteration 1: Names and Input

let hacker1 = 'Mario';
console.log(`The driver's name is ${hacker1}.` )

let hacker2 = 'Jose';
console.log(`The navigator's name is ${hacker2}.`)
console.log('-------------------------------------------------------------')

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){ 
 console.log(`The driver has the longest name, for "${hacker1}" has ${hacker1.length} characters.`)

} else if (hacker1.length < hacker2.length)
 console.log(`It seems that the navigator has the longest name, for "${hacker2}" has ${hacker2.length} characters.`)

 else if (hacker1.length === hacker2.length)
 console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) 

console.log('--------------------------------------------------------------')
// Iteration 3: Loops
console.log(hacker1.split('').join(' ').toUpperCase())
console.log(hacker2.split('').reverse().join(''))

let lexicoGraphOrder = hacker1.localeCompare(hacker2)
if (lexicoGraphOrder === -1){
   console.log(`The driver's name goes first.`)

} else if (lexicoGraphOrder === 0)
    console.log(`What?! You both have the same name?`)

 else if (lexicoGraphOrder === 1)   
  console.log( `Yo, the navigator goes first definitely.`)