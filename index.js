// Iteration 1

// 1.1
const hacker1 = "Paulius"
// 1.2
console.log("The driver name is " + hacker1)
// 1.3
const hacker2 = "Pim"
// 1.4
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2

// 2.1
if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3

//3.1
const nameUpper = hacker1.toUpperCase()
let nameSeparated = ""
for (let i = 0; i < nameUpper.length; i++) {
    nameSeparated += nameUpper[i] + " "
}
console.log(nameSeparated)

//3.2
let nameReversed = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    nameReversed += hacker2[i]
}
console.log(nameReversed)


//3.3

switch (hacker1.localeCompare(hacker2)) {
    case -1:
        console.log("The driver's name goes first.");
        break;
    case 1:
        console.log("Yo, the navigator goes first definitely.");
        break;
    case 0:
        console.log("What?! You both have the same name?")
}


// **Bonus 1**

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, lorem pellentesque faucibus commodo, leo neque ullamcorper magna, sit amet eleifend purus erat in dolor. Sed vel fringilla ante. Ut nec egestas leo. In neque mauris, pretium eget elit tristique, ultricies molestie orci. Maecenas odio arcu, ornare in dui nec, sagittis aliquet velit. Proin eget massa elit. Integer vestibulum iaculis risus vitae facilisis. Donec aliquet bibendum tincidunt. Praesent pellentesque nisl justo, nec vulputate nisl bibendum a. Ut imperdiet lorem enim, et dignissim est faucibus sit amet. Pellentesque tristique feugiat cursus. Vivamus luctus rhoncus risus, elementum ornare odio rutrum sit amet. Vestibulum at aliquet quam. Aliquam molestie consequat augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque aliquet, justo et dignissim condimentum, diam neque consectetur metus, et sagittis lorem sem congue libero. Nunc lectus nunc, vestibulum eu justo quis, tempor consectetur neque. Donec tincidunt libero sit amet libero rhoncus, ac vestibulum mi fermentum. Nunc sit amet neque mollis, lobortis justo eu, scelerisque elit. Mauris in posuere erat, id malesuada urna. In viverra justo et laoreet egestas. Nulla erat lacus, varius vitae elit id, interdum cursus ante. Cras eu elit vulputate, convallis nisi consectetur, ultrices purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean velit diam, lobortis sed lorem semper, ornare tempus quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam finibus dignissim luctus. In hac habitasse platea dictumst. Curabitur consectetur suscipit accumsan"



let wordCount = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        wordCount++
    }
}
console.log(wordCount)

let etCount = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText[i - 1] + longText[i] + longText[i + 1] + longText[i + 2] === " et ") {
        etCount++
    }

}
console.log(etCount)


// **Bonus 2**

let phraseToCheck = "A man, a plan, a canal, Panama!"
phraseToCheck = phraseToCheck.toLocaleLowerCase();
phraseToCheck = phraseToCheck.replace(/[^a-zA-Z]/g, '')
console.log(phraseToCheck)
let withoutSpaces = ""
for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === " ") {
        continue;
    } else {
        withoutSpaces += phraseToCheck[i]
    }

}
let reversed = ""
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    if (phraseToCheck[i] === " ") {
        continue;
    } else {
        reversed += phraseToCheck[i]
    }
}
if (withoutSpaces === reversed) {
    console.log("variable value is a Palindrome")
} else {
    console.log("variable value is NOT a Palindrome")
}

