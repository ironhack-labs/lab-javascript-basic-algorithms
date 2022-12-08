// Iteration 1: Names and Input
let hacker1 = prompt("Driver's name:")
let hacker2 = prompt("Navigator's name:")


console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

let hacker1 = prompt("Driver's name:")
let hacker2 = prompt("Navigator's name:")

if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if(hacker1.length == hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
  console.log("invalid submission")
}

// Iteration 3: Loops

let hacker1 = prompt("Driver's name:")
let hacker2 = prompt("Navigator's name:")



//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let newUppercaseWithSpaces = ''

for (let i = 0; i < hacker1.length; i++) {
  newUppercaseWithSpaces += hacker1[i].toLocaleUpperCase() + " "
}

console.log(newUppercaseWithSpaces)

// 3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".
let reverseNavigatorsName = ''

for (let i = 0; i < hacker2.length; i++) {
  reverseNavigatorsName += hacker2[hacker2.length - i - 1]
}

console.log(reverseNavigatorsName)

// 3.3 Depending on the lexicographic order of the strings, print different output:


switch((hacker1.localeCompare(hacker2))){
  case -1:
    console.log("The driver's name goes first.")
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely. ")
    break;
  default:
    console.log("What?! You both have the same name?")
}