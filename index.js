/***********  Copyright (c) 2023, Walter Eli Bernal Montero ***********/

function print(data) {
  console.log(data)
}

// Iteration 1: Names and Input
let hacker1 = "Walter"
print(`The driver's name is ${hacker1}`)
let hacker2 = "Karla"
print(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  print(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  print(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  )
} else {
  print(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops
const hacker1UpperCase = hacker1.toUpperCase()
var hacker1Separated = ""
for (let char of hacker1UpperCase) {
  hacker1Separated += char
  hacker1Separated += " "
}
print(hacker1Separated)

var hacker2Reverse = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i]
}
print(hacker2Reverse)

let hacker1Lowercase = hacker1.toLowerCase()
let hacker2Lowercase = hacker2.toLowerCase()
for (let i = 0; i < 20; i++) {
  if (hacker1Lowercase[i] < hacker2Lowercase[i]) {
    print("The driver's name goes first")
    break
  } else if (hacker1Lowercase[i] > hacker2Lowercase[i]) {
    print("Yo, the navigator goes first, definitely")
    break
  } else {
    print("What?! You both have the same name?")
    break
  }
}
// Solution with no loop iteration
// if (hacker1Lowercase.localeCompare(hacker2Lowercase) === -1) {
//   print("The driver's name goes first")
// } else if (hacker1Lowercase.localeCompare(hacker2Lowercase) === 0) {
//   print("What?! You both have the same name?")
// } else if (hacker1Lowercase.localeCompare(hacker2Lowercase) === 1) {
//   print("Yo, the navigator goes first, definitely")
// }

// Bonus 1
const longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const longTextLowercase = longText.toLowerCase()
let wordCount = 1
let wordToSearch = "et"
let etCount = 0
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCount++
  }
  if (longTextLowercase.slice(i, i + 2) == wordToSearch) {
    etCount++
  }
}
print(`Text word count: ${wordCount}`)
print(`"et" appearances: ${etCount}`)

// Bonus 2
function phraseToCheck(phrase) {
  let phraseFixed = phrase.replace(/[^a-zA-Z0-9]/g, "") 
  let phraseReverse = ""
  for (let i = phraseFixed.length - 1; i >= 0; i--) {
    phraseReverse += phraseFixed[i]
  } 
  // print(phraseFixed)
  // print(phraseReverse)
  phraseFixed = phraseFixed.toLowerCase()
  phraseReverse = phraseReverse.toLowerCase()
  if (phraseFixed == phraseReverse) {
    print(`"${phrase}" is a palindrome`)
  }
}

let word = "A man, a plan, a canal, Panama!"
phraseToCheck(word)
word = "Race car"
phraseToCheck(word)