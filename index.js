// Iteration 1: Names and Input

let hacker1 = "Daniel"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Adam"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

// Iteration 3.1

let spacedName = ""

for (let i = 0; i < hacker1.length; i++){
  spacedName += hacker1[i].toUpperCase() + " "
}

console.log(spacedName)

// Iteration 3.2

let reversedName = ""

for (let i = hacker2.length-1; i >= 0; i--){
  reversedName = reversedName + hacker2[i]
}

console.log(reversedName)

// Iteration 3.3

if (hacker1[0] <= hacker2[0]) {
  console.log("The driver's name goes first.")
} else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first, definitely.")
  } else if (hacker1 === hacker2){
    console.log("What?! You both have the same name?")
  }

// Bonus 1.1

let longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

let newArray = longText.split(" ")

console.log(newArray.length)

let etCount = 0

for (x = 0; x < longText.length; x++){
  if (longText[x] + longText[x+1] === "et"){
    etCount++
  }
}

console.log(etCount)

// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!"

phraseCleaned = ""

for (z = 0; z < phraseToCheck.length; z++){
  if ( phraseToCheck[z] >= "A" && phraseToCheck[z])
  phraseCleaned += phraseToCheck[z].toLowerCase()
}

console.log(phraseCleaned)

let phraseReversed = ""

for (y = phraseCleaned.length -1; y >= 0 ; y--) {
  phraseReversed = phraseReversed + phraseCleaned[y]
}

console.log(phraseReversed)

if (phraseReversed === phraseCleaned) {
  console.log("Yes, it is a Palindrome!")
}