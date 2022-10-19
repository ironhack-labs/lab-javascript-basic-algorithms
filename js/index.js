console.log("I'm ready!")

// with Frances Morales
// Iteration 1: Names and Input
//

let hacker1 = "Frances"
let hacker2 = "Pablo"

console.log("The driver's name is " + hacker1)
console.log("The navigator's name is " + hacker2)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
} else {
    console.log(`"The navigator's name is ${hacker1.length}"`)
}

// Iteration 3: Loops

3.1


let UppercaseName = " "
for (let i = 0; i < hacker1.length; i++) {
    let UppercaseLetter = hacker1[i].toUpperCase();
    UppercaseName += `${UppercaseLetter} `
}

console.log(UppercaseName)

3.2



let nameReverse = ""

for (i = hacker2.length - 1; i >= 0; i--) {
    nameReverse += hacker2[i];
}
console.log(nameReverse)


3.3



let names = [hacker1, hacker2];
let sortedNames = names.sort();
console.log(sortedNames);


if (sortedNames[0] === hacker1) {
    console.log(`The driver's name goes first.`)
} else if (sortedNames[0] === hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}


// bonus 1

let pharagraph = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut tristique nisi, non euismod nibh. Donec laoreet augue a nunc commodo, id dignissim turpis aliquam. Maecenas pretium orci vitae condimentum fringilla. Curabitur sagittis tellus convallis lacinia suscipit. Morbi arcu nisi, convallis a tincidunt non, bibendum laoreet erat. Etiam varius eros eu lorem pellentesque rhoncus. Proin eget arcu at leo tristique euismod nec non dolor. Suspendisse lobortis turpis non ligula fermentum, eu tincidunt neque semper. Ut nec fermentum tellus. Morbi sem tellus, dignissim sit amet faucibus a, efficitur at nibh. Donec rutrum sagittis laoreet. Aenean vitae nibh commodo, fringilla odio non, sagittis neque. Integer sed massa a augue cursus elementum vel in nibh. Vivamus in semper risus, vel aliquet est. Vivamus imperdiet non massa ac imperdiet. Ut dictum sem vitae enim cursus, id luctus est venenatis. Fusce imperdiet vel ex eget vehicula. Suspendisse ut nulla orci. Nam tempor risus vel sem molestie condimentum. Sed et odio tincidunt neque faucibus sagittis. Vestibulum iaculis maximus lorem, non rhoncus nisi ultrices nec. Fusce eget cursus metus, eget mollis purus. Donec quis quam pulvinar, dictum turpis quis, mattis enim. Fusce elit ipsum, placerat dictum consequat et, luctus a elit. Donec venenatis euismod ipsum, id laoreet ligula commodo id.Phasellus scelerisque nisi sed nunc posuere, eget vulputate nisi mollis. Suspendisse vitae ante risus. Cras convallis commodo elit, aliquam dictum arcu iaculis eu. Mauris varius libero vel erat fermentum ornare. Curabitur quis ipsum lacus. Nullam mattis elementum nulla in iaculis. Morbi mi enim, gravida eu odio eget, tempor gravida felis. Pellentesque tempor hendrerit sapien, non volutpat arcu interdum a. Morbi non quam ipsum. Ut rutrum ex semper mauris sodales tristique. Pellentesque lobortis dui et lorem placerat aliquet. Duis ut erat ut nunc sodales aliquet sed at lacus. Phasellus metus tortor, posuere at orci sit amet, rutrum efficitur risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam orci nulla, congue in bibendum sed, gravida eu odio."
let words = ""

function wordsCounter(space) {

    for (let i = 0; i < pharagraph.length; i++) {
        if (space[i] === " ") {
            words++
        }

    }
    console.log(words + 1)
}

wordsCounter(pharagraph)



let counter = ""

for (let i = 0; i < pharagraph.length; i++) {
    let firstLetter = pharagraph[i];
    let secondLetter = pharagraph[i + 1];
    if ((firstLetter === "E" || firstLetter === "e") && secondLetter === "t") {
        counter++
    }
}
console.log(`the number of -et- are: ${counter}`)


// bonus 2




const phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseNoSymbols = "";
let reversePhrase = "";
for (i = 0; i < phraseToCheck.length; i++) {
    switch (phraseToCheck[i]) {
        case " ":
            continue;
        case ",":
            continue;
        case "'":
            continue;
        case "?":
            continue;
        case "!":
            continue;
        case ".":
            continue;
        case ":":
            continue;
        case ";":
            continue;
        default:
            phraseNoSymbols += phraseToCheck[i].toLowerCase();
    }
}
console.log(phraseNoSymbols)

let phraseReverse = ""

for (i = phraseNoSymbols.length - 1; i >= 0; i--) {
    phraseReverse += phraseNoSymbols[i];
}
console.log(phraseReverse)

if (phraseNoSymbols === phraseReverse) {
    console.log("the phrase are Palindrome")
} else {
    console.log("Is a normal Phrase")
}


// let pablo = "pablo"
// let pabloReverse = pablo.reverse()
// console.log(pabloReverse)
// let pabloReverse =Array.from(pablo).reverse()
// console.log(pabloReverse)


// console.log( check)


