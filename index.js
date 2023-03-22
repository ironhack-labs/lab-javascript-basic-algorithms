// Iteration 1: Names and Input
let hacker1 = "Ana"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Ana"
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals 

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

//Iteration 3: Loops

let nameWithSpaces = ""
for (let i = 0; i < hacker1.length; i++){
  nameWithSpaces += hacker1[i].toUpperCase() + " "
}
console.log(nameWithSpaces)

let nameInReverse = ""
for (let i = hacker2.length-1; i >= 0; i--) {
  nameInReverse += hacker2[i]
}
console.log(nameInReverse)

let whoIsFirst = hacker1.localeCompare(hacker2)
if (whoIsFirst === 0) {
  console.log("What?! You both have the same name?")
}
else if(whoIsFirst === -1){
  console.log("The driver's name goes first.")
}
else if(whoIsFirst === 1){
  console.log("Yo, the navigator goes first, definitely.")
}

//bunus 1

// count words
let longText =  "Lorem ipsum dolor sit amet"

let spaceCount = 0
for (let i = 0; i < longText.length -1; i ++) {
  if (longText[i] === " ") {
    spaceCount++
  }
}
let wordCount = spaceCount +1
console.log(wordCount)

// count et

let numberOfEt = 0
for (let i = 0; i < longText.length -1; i ++) {
  let twoChars = longText[i] + longText[i +1] 
  if (twoChars === "et"){
    numberOfEt++
  }
}
console.log(numberOfEt)

// bonus 2

let phraseToCheck= "A man, a plan, a canal, Panama!"

let justLetters = phraseToCheck.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
let reversed = justLetters.split("").reverse().join("").toLowerCase()
if (justLetters === reversed) {
  console.log("Yay, it's a palindrome")
}
else {
  console.log("Sad times")
}
