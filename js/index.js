// Iteration 1: Names and Input
const hacker1 = "Andrés"
console.log("The driver's name is " + hacker1)
const hacker2 = "Alexandra"
console.log("The navigator's name is " + hacker2)

console.log(hacker1.length)
console.log(hacker2.length)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, XX characters!`)
}

// Iteration 3: Loops

let hackerCap = hacker1.toUpperCase()
  let horString = ""
  
for (i = 0; i < hackerCap.length;i++) {
  horString += hackerCap[i] + " " 
  }
console.log(horString)

for (i = hacker2.length-1; i >= 0; i--) {
    console.log(hacker2[i])
    }

if (hacker1.localeCompare(hacker2)=== -1) {
  console.log(`The driver's name goes first.`)
} 
else if (hacker1.localeCompare(hacker2) === 1 ) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log (`What?! You both have the same name?`)
}
