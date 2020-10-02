// Iteration 1: Names and Input
const hacker1 = "Alex"
console.log(`"The driver's name is ${hacker1}"`)
const hacker2 = "Tomas"
console.log(`"The navigator's name is ${hacker2}"`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
}

// Iteration 3: Loops

//Con un for normal
let driverUpper = ""
for (let i = 0; i < hacker1.length; i++) {
    driverUpper += (hacker1.charAt(i)).toUpperCase() + " "
}
console.log(driverUpper);

//Con un for.. of
let driverUpper2 = ""
for (letter of hacker1) {
    driverUpper2 += letter.toUpperCase() + " "
}
console.log(driverUpper2);

let navigatorReverse = ""
for (let i = hacker2.length; i >= 0; i--) {
    navigatorReverse += hacker2.charAt(i)
}
console.log(navigatorReverse)

let stringsOrdered = hacker1 > hacker2
console.log(stringsOrdered)

switch (stringsOrdered) {

    case false:
        console.log("The driver's name goes first.")
        break
    case true:
        console.log("Yo, the navigator goes first definitely.")
        break
    default:
        console.log("What?! You both have the same name?")
}

//Bonus 1

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper metus sem. Curabitur faucibus libero nisi, quis eleifend risus elementum laoreet. Cras bibendum posuere gravida. Suspendisse sit amet eros pretium, suscipit nunc a, ultricies magna. Donec a felis at velit blandit lacinia id laoreet nulla. Nulla sagittis consectetur massa, eu aliquam libero aliquet vel. Pellentesque vitae dolor nec ligula accumsan auctor. Phasellus ultricies nunc feugiat neque egestas, id vulputate massa ultricies. Sed ornare volutpat quam nec ornare. Pellentesque posuere dapibus lectus, ut pharetra tellus luctus a. Donec placerat nibh non tortor scelerisque imperdiet. Nam non vestibulum ex. Donec lectus massa, congue ut ullamcorper in, luctus eget sapien. Donec ullamcorper, enim eget luctus aliquet, leo erat tincidunt tortor, ut feugiat dui neque vel ligula.

Sed ut ante vitae nisl laoreet porttitor in a ligula. Sed porttitor sapien vel finibus semper. In ac lacinia sem. Mauris viverra, libero at feugiat porta, eros leo lobortis turpis, ac consequat tellus lectus nec purus. In auctor purus quis justo viverra, quis vulputate nisl elementum. Curabitur congue dolor eget pellentesque fringilla. Suspendisse at porta tellus. Praesent congue efficitur ex, condimentum malesuada nulla ultricies at. Vestibulum varius pellentesque pulvinar. In at felis cursus, ullamcorper risus vel, consequat urna. 

Aenean non augue elit. Sed vel libero vel justo mattis gravida vitae id massa. Mauris condimentum quis justo a imperdiet. Maecenas molestie tempus quam, quis blandit dolor. Suspendisse tristique sapien lobortis tristique rhoncus. Donec ante massa, mollis vel pharetra vitae, placerat non erat. Duis et tempus nibh. Integer odio nibh, feugiat varius quam congue, vestibulum fermentum felis. Cras egestas sapien et accumsan bibendum. Phasellus est lacus, lobortis a tempor nec, ornare vitae ligula. Aliquam ac aliquet orci, vel mollis lorem.`

let totalWords = 2; //Empiezo en dos para solucionar el hecho de que la primera y la última no tienen espacio

for (let i = 0; i < lorem.length; i++) {
    let isSpace = lorem.charAt(i) === " "
    if (isSpace) {
        totalWords++
    }
}
console.log(`${totalWords} words`)

//Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!"

let cleanPhrase = ""

for (let i = 0; i < phraseToCheck.length; i++) {
    let notLetter = (phraseToCheck.charAt(i)).match(/[a-z]/i) //Con en el Regex vemos si es una letra
    if (!notLetter) continue
    cleanPhrase += (phraseToCheck.charAt(i)).toLowerCase()
}

let phraseReverse = ""

for (let i = phraseToCheck.length; i >= 0; i--) {
    let notLetter = (phraseToCheck.charAt(i)).match(/[a-z]/i) //Con en el Regex vemos si es una letra
    if (!notLetter) continue
    phraseReverse += (phraseToCheck.charAt(i)).toLowerCase()
}

let theSame = cleanPhrase === phraseReverse

if (theSame) console.log("Wow! It's Palindrome")
else console.log("That's not Palindorme")