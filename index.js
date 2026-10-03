// Iteration 1: Names and Input

const hacker1 = "Javi" // Driver
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Antonio" // Navigator
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

// 3.1 
let newDriversName = ""

for (let i = 0; i < hacker1.length; i++) {
    let char = hacker1[i]
    if (i !== hacker1.length - 1) {
        newDriversName = newDriversName + char.toUpperCase() + " "
    } else {
        newDriversName = newDriversName + char.toUpperCase()
    }
}

console.log(newDriversName)

// 3.2

let newNavigatorsName = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    let char = hacker2[i]
    newNavigatorsName = newNavigatorsName + char;
}

console.log(newNavigatorsName)

// 3.3 

let abc = "abcdefghijklmnopqrstuvwxyz"
let foundIt = 0
let hacker1LowerCase = hacker1.toLowerCase()
let hacker2LowerCase = hacker2.toLowerCase()
let nombreLargo = ""
if (hacker1.length > hacker2.length) {
    nombreLargo = hacker1
} else {
    nombreLargo = hacker2
}

for (let i = 0; i < nombreLargo.length; i++) {
   let driveChar = hacker1[i]
   let navigatorChar = hacker2[i]
    if (driveChar === navigatorChar) {
        if (hacker1 === hacker2) {
            console.log("What?! You both have the same name?")
            break; 
            } 
        } else if (driveChar !== navigatorChar) {
            if (abc.indexOf(driveChar) < abc.indexOf(navigatorChar)) {
                console.log("The driver's name goes first.")
                break;
                } else if (abc.indexOf(driveChar) > abc.indexOf(navigatorChar)) {
                    console.log("Yo, the navigator goes first, definitely.")
                    break;
                } else if (hacker1[i] === undefined) {
                    console.log("The driver's name goes first.")
                    break;
                } else if (hacker2[i] === undefined) {
                    console.log("Yo, the navigator goes first, definitely.")
                    break;
                }
            }
 
}

// Bonus 1 

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum nulla risus. Phasellus quis rutrum turpis, et imperdiet velit. Sed dui augue, lobortis a sem ac, sagittis pulvinar nulla. Vivamus eleifend nibh at varius congue. Vivamus hendrerit sed libero eget lobortis. Suspendisse ut enim sed magna volutpat malesuada non non urna. Nunc faucibus dignissim dictum. Donec vel commodo lectus. Fusce vitae sem eu magna ultrices pulvinar non ut lectus. Nullam mollis, metus sit amet egestas tincidunt, arcu erat lacinia tellus, quis volutpat arcu felis quis diam.
Etiam sodales tristique tortor ac consequat. Proin laoreet sed justo ac condimentum. Nullam nibh nibh, faucibus a ornare at, pretium et neque. Sed malesuada aliquet aliquam. Sed pellentesque leo ac augue molestie dapibus. Nulla volutpat risus ac sem rhoncus, ac fringilla metus malesuada. Mauris pellentesque, urna eget pulvinar tincidunt, sapien dolor tempor purus, ut feugiat felis nulla non libero. Donec tristique maximus ligula quis aliquet. Donec condimentum sapien id commodo suscipit. Vestibulum est lacus, ullamcorper at consequat vel, pretium ut odio. Integer vel suscipit justo. Nam pretium sollicitudin aliquet. Etiam quam arcu, finibus sit amet euismod a, condimentum sed arcu. Nunc ornare sagittis aliquet.
In facilisis tellus cursus tristique hendrerit. Integer sit amet ullamcorper augue, eu luctus quam. Donec at semper ipsum. Praesent gravida arcu sem, imperdiet finibus odio pharetra at. Morbi vel nulla dignissim, egestas ipsum at, hendrerit nisi. Pellentesque nec velit magna. Nullam ac risus id tortor posuere malesuada. Vivamus sed lacus vitae diam suscipit feugiat at at arcu. Praesent sed bibendum tellus. Vestibulum molestie neque feugiat dolor ultrices vehicula. Nullam bibendum tellus diam, sit amet venenatis enim vulputate sit amet. Nam at sagittis elit, ut luctus ante. Pellentesque sit amet feugiat massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`

let countWords = 1 // Por la palabra del inicio

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        countWords++
    }
}

console.log(countWords)

let longTextLowerCase = longText.toLowerCase()
let countEt = 0

for (i = 0; i < longTextLowerCase.length; i++) {
    if (longTextLowerCase[i-1] === " " && longTextLowerCase[i] === "e" && longTextLowerCase[i+1] === "t" && longTextLowerCase[i+2] === " ") {
        countEt++
    }
}
console.log(countEt)

// Bonus 2

let phraseToCheck = "No 'x' in Nixon"
let phraseToCheckLowerCase = phraseToCheck.toLowerCase()
let phraseToCheckNoSpecial = ""
let phraseToCheckBackwards = ""

for (let i = phraseToCheckLowerCase.length - 1; i >= 0; i--) {
    let char = phraseToCheckLowerCase[i]
    for (let j = 0; j < abc.length; j++) {
        if (char === abc[j]) {
            phraseToCheckNoSpecial = phraseToCheckNoSpecial + abc[j]
        }
    }
}

for (let i = phraseToCheckNoSpecial.length - 1; i >= 0; i--) {
    phraseToCheckBackwards = phraseToCheckBackwards + phraseToCheckNoSpecial[i]
}

if (phraseToCheckNoSpecial === phraseToCheckBackwards) {
    console.log("It's a palindrome!")
} else {
    console.log("It's not a palindrome!")
}