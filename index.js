// Iteration 1: Names and Input
const hacker1 = "Joan"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Alejandro"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
const hacker1Upper = hacker1.toUpperCase()
let newHacker1 = ""
for (i = 0; i <= hacker1.length - 1; i++) {
    newHacker1 += hacker1Upper[i] + " "
}
console.log(newHacker1)

let newHacker2 = ""
for (i = hacker2.length - 1; i >= 0; i--) {
    newHacker2 += hacker2[i]
}
console.log(newHacker2)

const sortedNames = [hacker1, hacker2].sort()

if (sortedNames[0] === sortedNames[1]) {
    console.log('What?! You both have the same name?')
} else if (sortedNames[0] === hacker2) {
    console.log('Yo, the navigator goes first, definitely.')
} else {
    console.log("The driver's name goes first.")
}

// Bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in fermentum urna, vitae malesuada magna. Pellentesque maximus aliquet dui. Praesent tempus est vitae lacus efficitur varius. Morbi ullamcorper feugiat libero, non porta arcu euismod rhoncus. Nulla nec accumsan odio, in pellentesque felis. Etiam auctor magna quis convallis imperdiet. Duis varius, massa aliquam congue tempor, erat mauris pellentesque nibh, vel fringilla lectus felis in ex. Duis accumsan laoreet interdum. Sed id ipsum finibus, convallis nisl non, vehicula augue. Proin sodales commodo quam, nec accumsan sapien pellentesque molestie. Aliquam vel sagittis lorem. Cras pellentesque nulla vel lacus iaculis pharetra. Proin aliquet sapien augue, ut fermentum ante molestie in. Suspendisse egestas nisl sit amet cursus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tincidunt arcu quis nisl lobortis accumsan. Phasellus efficitur bibendum tellus vel facilisis. Morbi turpis felis, blandit in nibh sed, sodales dignissim velit. Nam vestibulum diam sed auctor placerat. Donec aliquam arcu eu augue feugiat, sed finibus orci mattis. In faucibus feugiat libero, nec posuere diam pellentesque mollis. Pellentesque aliquet bibendum ornare. Vestibulum nec massa ut ligula blandit pellentesque. Aliquam in tristique ligula. Curabitur feugiat hendrerit hendrerit. Duis tincidunt leo eu lorem eleifend, sed venenatis elit tempus. Donec pellentesque mauris vitae felis venenatis, et placerat nunc fringilla. Duis fermentum, odio eu facilisis placerat, libero ipsum eleifend eros, nec porta nibh dui at diam."
const countLongText = longText.split(" ")
console.log("There are", countLongText.length, "words")
let etWord = 0
for (i = 0; i <= countLongText.length - 1; i++) {
    if (countLongText[i] === "et") {
        etWord++
    }
}
console.log("et appears", etWord, "times")

// Bonus 2
let phraseToCheckWithoutSpaces = ""
let phraseToCheck = "step on no pets"
for (i = 0; i <= phraseToCheck.length - 1; i++)
    if (phraseToCheck[i].match("^[a-zA-Z]+$")) {
        phraseToCheckWithoutSpaces += phraseToCheck[i]
    }
let phraseToCheckWithoutSpacesLower = phraseToCheckWithoutSpaces.toLowerCase()



for (i = 0, j = phraseToCheckWithoutSpacesLower.length - 1; i <= j; i++, j--) {
    if (phraseToCheckWithoutSpacesLower[i] !== phraseToCheckWithoutSpacesLower[j]) {
        console.log("Not a palindrome!")
        break
    } else if (([j] - [i]) < 2) {
        console.log("It's a palindrome!")
    }
}