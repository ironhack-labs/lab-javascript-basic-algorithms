// Iteration 1: Names and Input
const hacker1 = "Pablo"
console.log(`The driver´s name is ${hacker1}`)
const hacker2 = "Nacho"
console.log(`The navigator´s name is ${hacker2}`)

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

// Iteration 3.1: Loops

let nameSpace = []
for(let i = 0; i < hacker1.length; i++ ){
  nameSpace.push(hacker1[i].toUpperCase())
}
console.log(nameSpace.join(" "))

// Iteration 3.2: Loops

let backName = []

for(let i = hacker2.length -1; i >= 0; i--){
  backName.push(hacker2[i])
}
console.log(backName.join("")) 

// Iteration 3.3: Loops

const firstLetter = 0;
if (hacker1[firstLetter] < hacker2[firstLetter]){
      console.log(`The driver's name goes first. ${hacker1}.`)
    } else if (hacker1[firstLetter] > hacker2[firstLetter]){
      console.log(`Yo, the navigator goes first definitely. ${hacker2}.`)
    } else {
      console.log(`What?! You both have the same name?`)

    }
