// Iteration 1: Names and Input
const hacker1 = "Andrés"

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Andrea"

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
    console.log(`It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops
let upperCaseName = ""
for (let i = 0; i < hacker1.length; i++) {
    upperCaseName += hacker1[i].toUpperCase() + " "
}
console.log(upperCaseName)

let printReverseName = ""
for (let i = 1; i <= hacker2.length; i++) {
    printReverseName += hacker2[hacker2.length - i]
}
console.log(printReverseName)

if (hacker1.localeCompare(hacker2) < 0) {
    console.log(`The driver's name goes first`)
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log(`Yo, the navigator goes first definitely`)
} else {
    console.log(`What?! You both have the same name?`)
}

//BONUS 1
const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum tortor eu neque malesuada, sed vehicula risus congue. Suspendisse blandit nibh sit amet dolor ultrices tincidunt. Curabitur aliquet est velit, id suscipit justo hendrerit sed. Nunc varius in leo ut porta. Nunc sed lorem a nisi cursus convallis. Sed semper sollicitudin lacinia. Aenean convallis, velit et aliquam dignissim, erat elit lobortis enim, ut dignissim sem urna sit amet nisi. Quisque a cursus sapien, sit amet maximus dui.

Phasellus congue ac urna ut commodo. Mauris aliquet velit odio, eget vehicula lectus scelerisque quis. Phasellus finibus facilisis velit, in tempor augue iaculis a. Donec feugiat velit et malesuada gravida. Phasellus sit amet libero eget ipsum pellentesque sodales sed laoreet felis. Suspendisse in quam viverra eros pharetra posuere vitae id dolor. Phasellus consectetur tristique vulputate. Donec laoreet lacinia ante vitae bibendum.

Donec eu viverra velit, non dictum eros. In hac habitasse platea dictumst. In condimentum id risus id tincidunt. Sed turpis lacus, consequat in purus pretium, placerat egestas velit. Phasellus dictum lacus mattis tortor interdum malesuada. Vestibulum facilisis vestibulum ultrices. Integer aliquam diam enim, nec finibus velit condimentum id. Sed ullamcorper vel nunc id molestie.`

const words = paragraphs.split(" ")
console.log(`The number of words is ${words.length}`)

console.log(`The number of times that the latin word "et" appears is ${paragraphs.split(" et ").length - 1}`)

//BONUS 2
let phraseToCheck = "No 'x' in Nixon"
const lowerWord = phraseToCheck.toLowerCase()
let withoutSpaces
let checkLogic


for (i = 0; i < lowerWord.length; i++) {
    withoutSpaces = lowerWord.replace(" ", "");
}

for (let i = 0; i < withoutSpaces.length; i++) {
    if (withoutSpaces[i] === withoutSpaces[withoutSpaces.length - i - 1]) {
        checkLogic = true;
    } else {
        checkLogic = false;
    }
}

if (checkLogic) {
    console.log(`'${phraseToCheck}' is a Palindrome`);
} else {
    console.log(`'${phraseToCheck}' is not a Palindrome`);
}