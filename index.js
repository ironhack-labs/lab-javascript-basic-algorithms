// Iteration 1: Names and Input
const hacker1 = "Max"
const hacker2 = "Jonh"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length >= hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length <= hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let result = ""

for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase() + " "
}
console.log(result)

let reversed = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversed += hacker2[i]
}
console.log(reversed)


if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
}
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
}
else {
    console.log("What?! You both have the same name?")
}


// BONUS 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo risus quis cursus lacinia. Morbi tempor urna non ex lobortis condimentum. Nullam placerat sem et elit gravida, vitae laoreet dui congue. Sed a venenatis felis, pharetra faucibus turpis. Suspendisse molestie tellus eros, at luctus lectus dapibus id. Morbi pulvinar suscipit dolor, vitae pharetra enim ornare eget. Suspendisse gravida vulputate est, a ultrices nisl condimentum ac. Proin rutrum est et justo euismod, et imperdiet ipsum malesuada. Phasellus cursus eros quam, non placerat diam molestie at. Cras congue nulla risus.

Nullam lobortis lacus non tellus venenatis, a auctor tortor vehicula. Ut finibus nulla tellus, a porta lectus aliquet vel. Cras nec eros ut lorem venenatis lobortis eu ac libero. Sed quis erat quis massa bibendum scelerisque. Vestibulum arcu lacus, dapibus quis risus nec, consequat aliquam felis. Ut tellus lectus, mollis non rutrum ac, elementum ultricies nisi. In hac habitasse platea dictumst. Maecenas a fermentum nisi, sit amet facilisis libero. Etiam pellentesque, elit ut maximus placerat, lorem risus commodo est, gravida mollis orci felis ut magna.

Sed ac purus elit. Nam vehicula placerat sapien. Sed commodo porttitor nulla, ut viverra tellus sagittis et. Nunc sit amet ante a mi tincidunt finibus. In elementum mollis nisi, sit amet vulputate mi tempus non. Maecenas condimentum vitae tellus nec auctor. Sed dictum diam et lorem aliquet pharetra. Cras magna nibh, tempus at vehicula vel, bibendum quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

const paragraph = longText.split(" ")
console.log(paragraph.length)

let count = 0

for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === "et") {
        count++
    }
}
console.log(count)

// BONUS 2

const phraseToCheck = "taco cat"

const newPhrase = phraseToCheck.toLowerCase().replaceAll(" ","")
const backPhrase = newPhrase.split("").reverse().join("")

console.log(newPhrase===backPhrase)