console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = 'Adrian'

console.log(`"The driver's name is ${hacker1}"`)

const hacker2 = 'Luis'

console.log(`"The navigator's name is ${hacker2}"`)


// Iteration 2: Conditionals
hacker1.length
hacker2.length

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let driverName = ''

for (let i = 0; i < hacker1.length; i++) {
    driverName += hacker1[i] + ' '
}
console.log(driverName.toUpperCase())

// 3.2 Print all the characters of the navigator's name, in reverse order.
let hackerLength = hacker2.length - 1
let navigatorName = ''

for (let i = hackerLength; i >= 0; i--) {
    const word = hacker2[i]
    navigatorName += word
}
console.log(navigatorName)

// 3.3 Depending on the lexicographic order of the strings
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
  } else {
    console.log("What?! You both have the same name?")
  }


  // Bonus 1:
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet neque et ipsum tristique auctor. Pellentesque leo massa, egestas in varius ut, fermentum dignissim nunc. In vel tincidunt ex, quis faucibus dolor. In at vehicula nulla. Pellentesque dui mauris, consequat in ipsum et, viverra euismod risus. Donec pellentesque nisl in neque gravida mollis. Phasellus posuere mattis tincidunt. Proin erat leo, hendrerit at purus eget, aliquam tincidunt nunc. Ut sit amet imperdiet ipsum, sit amet bibendum turpis. Sed sagittis commodo euismod. Curabitur faucibus accumsan condimentum. Cras accumsan rutrum arcu, id malesuada odio pharetra in. In hac habitasse platea dictumst.

Vivamus et enim pellentesque, dictum lectus id, molestie felis. Donec feugiat facilisis gravida. Donec vulputate condimentum nisl vitae ornare. Aenean tincidunt efficitur tellus, nec semper enim interdum a. Vestibulum tempor, ipsum at vestibulum vehicula, lorem nunc mollis erat, at ornare sem nunc id turpis. Phasellus sagittis ultrices diam congue semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum venenatis nulla sed gravida. Nullam vestibulum nulla in risus placerat aliquet.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In fermentum nisl ac turpis suscipit, vel mattis augue aliquam. Donec pharetra egestas dui sit amet gravida. Curabitur nec tortor tortor. Donec molestie, purus eget maximus euismod, sapien turpis efficitur nunc, vel posuere elit risus vitae massa. Donec est tortor, pulvinar sed odio vitae, accumsan varius purus. Proin volutpat elementum libero, eget blandit purus cursus vitae.`

let words = 0

let paragraphWordByWord = paragraph.split(' ')

for (let i = 0; i < paragraphWordByWord.length; i++) {
  words++
}

console.log(words)

let countEt = 0

for (let i = 0; i < paragraphWordByWord.length; i++) {
  if (paragraphWordByWord[i] === 'et' || paragraphWordByWord[i] === 'et.' || paragraphWordByWord[i] === 'et,') {
    countEt++
  }
}

console.log(countEt)

// Bonus 2:
const phraseToCheck = 'Amor, Roma'

let phraseLowCase = phraseToCheck.toLowerCase()

let palindrome = phraseLowCase.split(', ')

let test = ''

for (let i = 0; i < palindrome.length / 2; i++)
    if (test[i] === test[phraseToCheck.length - 1 - i]) {
        console.log('It is a palindrome.')
    } else {
        console.log('Not a palindrome.')
    }

    console.log(test)