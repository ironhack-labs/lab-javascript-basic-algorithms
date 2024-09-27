// Iteration 1: Names and Input
const hacker1 = 'Jorge'
console.log('The drivers name is', hacker1)
const hacker2 = 'Chiara'
console.log('The navigators name is', hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has', hacker1.length, 'characters.')
} else if (hacker1.length < hacker2.length) {
    console.log('It seems that the navigator has the longest name, it has', hacker2.length, 'characters.')
} else if (hacker1.length === hacker2.length) {
    console.log('Wow, you both have equally long names,', hacker1.length, 'characters!')
}

// Iteration 3: Loops
// 3.1
let finalName = ''
for (let i = 0; i < hacker1.length; i++) {
    finalName += hacker1[i]
    if (i < hacker1.length - 1) {
        finalName += ' '
    }
    finalName = finalName.toUpperCase()
}

console.log(finalName)


//3.2
let reverseName = ''
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseName += hacker1[i]
}
console.log(reverseName)


//3.3
for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first, definitely")
        break
    } else if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.")
        break
    }
    console.log("What?! You both hace the same name?")
    break
}

//Bonus 1
const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis semper lectus, ac pulvinar magna. Aliquam condimentum vulputate placerat. Etiam sodales ligula hendrerit rhoncus vehicula. Sed vel cursus lectus. Etiam a mi eros. Nulla ultrices nec felis nec dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut neque fermentum leo convallis molestie condimentum sed libero. Proin fermentum mi diam, in tincidunt nibh consectetur non. Cras tempor nisi sit amet lacinia venenatis. Phasellus eu iaculis orci.'

let wordCount = 0
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === ' ') {
        wordCount++
    }
}
console.log('total words:', wordCount + 1)
