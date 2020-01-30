// Iteration 1: Names and Input
let hacker1 = 'Adam'

let hacker2 = 'Max'

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

// Iteration 3: Loops

let result = ''

for (i = 0; i < hacker1.length; i++){
  
  result += hacker1[i].toUpperCase() + " " 
}
console.log(result)

let reversedResult = ""

for ( let i = hacker2.length - 1; i >= 0; i--){
  reversedResult += hacker2[i]
   
}

console.log(reversedResult)
