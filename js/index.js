// Iteration 1: Names and Input
let hacker1 = "Tamao"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Tara"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let firstLength = hacker1.length
let secondLength = hacker2.length
if (hacker1.length > hacker2.length) {
console.log (`The driver has the longest name, it has ${firstLength}characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log (`It seems that the navigator has the longest name, it has  ${secondLength}  characters`)
} else {
  console.log(`Wow, you both have equally long names, ${firstLength}  characters!`)
}


// Iteration 3: Loops

let characters = ""
for (let i = 0; i <= hacker1.length -1; i ++) {
  characters = characters + " " + hacker1[i].toUpperCase()
}
console.log(characters)
let reverseName = ""
for (let i = hacker2.length -1; i >= 0; i --) {
  reverseName = reverseName + hacker2[i]
}
console.log(reverseName)

let result = ""
for (let i = 0; i < hacker1.length-1 ; i++) {
  for (let i = 0; i < hacker2.length-1 ; i++) {

if (hacker1[i] < hacker2[i]) {
  result = "The driver's name goes first."
}
else if (hacker1[i] > hacker2[i]) {
  result = "Yo, the navigator goes first definitely."
} else
  result = "What?! You both have the same name?"
  }
}

console.log(result)