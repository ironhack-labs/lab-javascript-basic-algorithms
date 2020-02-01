// Iteration 1: Names and Input
let hacker1 = 'Adam'

let hacker2 = 'Max'

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacke1.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Both your hackers have the same length, they both have ${hacker1.length}`)
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


console.log(hacker1.substring(0, 1));

console.log(hacker2.substring(0, 1));

for ()