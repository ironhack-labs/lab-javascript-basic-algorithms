// Iteration 1: Names and Input


let  hacker1 = "Paco"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Carlos"
console.log (`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
    } else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
    } else {console.log(`Both have equally long names, ${hacker2.length} characters!`)}

// Iteration 3: Loops
//3.1

let capitalName = hacker1.toUpperCase()
let result = ''

for (let i = 0; i < capitalName.length; i ++) {
  result += capitalName[i]+ ' '
}
console.log(result)

//3.2

let reverseName = ''
let lastIndex = hacker2.length - 1

for (let i = lastIndex; i >= 0 ; i --) {
  reverseName += hacker2[i]
}
console.log(reverseName)

//3.3

if (hacker1 > hacker2) {
  console.log ("The driver's name goes first")
} else if (hacker2 > hacker1) {
  console.log ("Yo, the navigator goes first definitely")
} else { console.log ("What?! You both have the same name?")
       }
