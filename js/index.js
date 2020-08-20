// Iteration 1: Names and Input

let hacker1 = "Michael"
console.log("The driver name is: ", hacker1)
let hacker2 = "Chrome"
console.log("The driver name is: ", hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  } 
  else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else {
    console.log ( `Wow, you both have equally long names, ${hacker1.length} characters.`)
  }

// Iteration 3: Loops

let hackUpp= hacker1.toUpperCase()
let newName = []
let j = 0
let length = hackUpp.length
for ( let i = 0; i < length; i++) {
  if (i % 2 === 1){
    newName.push(" ")
    length++
  } 
  else {
    newName.push(hackUpp[j++])
  }
}

console.log(newName)


let hacker1 = "Michael"
let nameArr = []
for (let i = hacker1.length - 1; i >= 0; i-- ){
  nameArr.push(hacker1[i])
}
console.log(nameArr)


let compare = hacker1.localeCompare(hacker2)
if (compare > 0) {
  console.log(`The driver's name goes first.`)
}
else if (compare < 0) {
  console.log(`Yo, the navigator goes first definitely.`)
}
else {
  console.log (`What?! You both have the same name?`)
}