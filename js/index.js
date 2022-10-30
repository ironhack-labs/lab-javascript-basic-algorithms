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


 //Bonus 1
 //1.1 y 1.2
let firstParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let textDivided = firstParagraph.split(' ')
let numWords = 0
for (let i = 0; i < textDivided.length; i ++) {
  numWords += 1
}

console.log(numWords)

//1.3
let etWord = 0

for (i = 0; i < textDivided.length; i ++) {
  if (textDivided[i] === 'et') {
    etWord += 1
  }
}

console.log (etWord)

//Bonus 2

let phraseToCheck = 'step on no pets'
let allInOne = ''

for (let i = 0; i < phraseToCheck.length; i ++) {
  if (phraseToCheck[i] === ' ') {
      continue    
  } else {
    allInOne += phraseToCheck[i]
  }
}

//console.log (allInOne)

let reversePhrase = ''

for (let i = allInOne.length - 1; i >= 0; i --) {
  reversePhrase += allInOne[i]
}

//console.log (reversePhrase)

if (allInOne === reversePhrase) {
  console.log ("It's a Palindrome!")
} else {
  console.log ("Sorry, it's not a Palindrome")
}