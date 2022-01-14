// Iteration 1: Names and Input

const hacker1 = "Zero Cool"

console.log(`The drive's name is ${hacker1}`)

const hacker2 = "Acid Burn"

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has XX characters.')
} else if (hacker1.length < hacker2.length) {
    console.log('It seems that the navigator has the longest name, it has XX characters.')
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// Iteration 3.1

let driverSpace = ''

for (let i = 0; i < hacker1.length; i++) {
  if (i + 1 < hacker1.length) {
    driverSpace += hacker1[i] + ' '
  } else {
    driverSpace += hacker1[i]
  }
}

console.log(driverSpace.toUpperCase())

// Iteration 3.2

let navigatorReverse = ''

for (let i = hacker2.length-1; i >= 0; i--) {
  navigatorReverse += hacker2[i]
}

console.log(navigatorReverse)

// Iteration 3.3

if (hacker1 !== hacker2) {
  let names = [hacker1, hacker2]
  names.sort()
  if (names[0] === hacker1) {
    console.log("The driver's name goes first.")
  } else {
    console.log("Yo, the navigator goes first definitely.")
  }
} else {
  console.log("What?! You both have the same name?")
}

// Bonus 1

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas sagittis eros. Donec a nisl blandit, elementum velit eu, tempor dolor. Nam ac iaculis orci, ac tempus velit. Proin nulla ipsum, pharetra ac dui vel, ullamcorper mollis felis. Morbi imperdiet scelerisque risus, quis mollis est efficitur eget. Curabitur pretium orci ac nisi ornare pharetra. Curabitur non nisl in justo condimentum gravida. Vivamus eget libero lacinia, rhoncus risus non, elementum magna.

Maecenas dui dolor, pharetra vitae ultrices id, posuere in eros. In at luctus augue, sit amet dictum dui. Curabitur ac nibh metus. Morbi urna orci, varius sit amet massa vitae, imperdiet accumsan dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus fringilla velit sem, ac eleifend dolor scelerisque vel. Curabitur eu nunc quis dolor sollicitudin lobortis quis eu ipsum. Integer et leo vehicula, bibendum nibh non, vulputate tortor. Proin quis ante at odio sodales commodo. Integer ligula dui, tempor ac odio in, egestas ullamcorper quam. Sed magna lacus, pretium vel ultricies vel, vestibulum id mi. Vivamus id pellentesque augue, sed aliquam lectus. Aenean commodo vulputate convallis.

Nunc ultricies elementum nisl, iaculis porttitor ante rhoncus at. Suspendisse pretium augue a ligula aliquet, eu condimentum est lacinia. Fusce fermentum pellentesque nibh, vel dictum nibh dictum vitae. Nulla facilisi. Cras vitae purus aliquet lacus semper dictum. Fusce rutrum nisi massa, id molestie ante placerat non. Etiam a erat vel ex rhoncus porta. Vivamus non lacus in est aliquet finibus vitae eget urna.`

const words = lorem.split(' ')
console.log(`Number of words: ${words.length}`)

let etCount = 0
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'et') {
    etCount++
  }
}
console.log(`Et count: ${etCount}`)

// Bonus 2

let phraseToCheck = 'tenet'

let palindrome = true
for (let i = 0; i <= Math.floor(phraseToCheck.length / 2); i++) {
  if (phraseToCheck[i] !== phraseToCheck[(phraseToCheck.length - 1) - i]) {
    palindrome = false
    break
  }
}

if (palindrome === true) {
  console.log(`${phraseToCheck} is a palindrome!`)
} else {
  console.log(`${phraseToCheck} is not a palindrome :(`)
}