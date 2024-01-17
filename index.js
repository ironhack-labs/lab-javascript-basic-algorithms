// Iteration 1: Names and Input
const hacker1 = "Maria"
console.log("The driver name is " + hacker1)
const hacker2 = "Veronica"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}


// Iteration 3: Loops
let nameFormated = ""
for (let i = 0; i < hacker1.length; i++) {
    nameFormated += hacker1[i].toUpperCase(hacker1[i]) + " ";
}
console.log(nameFormated)

let nameReverse = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
    nameReverse += hacker1[i];
}
console.log(nameReverse)


if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.")
} else if (hacker2[0] < hacker1[0]) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}


// Bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet lectus ac nibh laoreet vehicula. Morbi a mauris eget eros mattis aliquam in eu arcu. Quisque hendrerit nisi quis ante suscipit molestie. In hac habitasse platea dictumst. Pellentesque pharetra molestie odio nec bibendum. Aliquam ac tincidunt diam. Nunc congue scelerisque placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam euismod ut sem non volutpat. Morbi a fermentum mi. Curabitur sit amet enim vel odio rutrum varius. Duis condimentum dolor non nunc gravida, vel ornare ipsum tempus. Cras lobortis tellus et mi accumsan, ut euismod erat imperdiet. Duis vulputate diam porta, molestie diam sit amet, ultricies est.Nam lobortis odio dictum porttitor semper. Aliquam non lectus sem. Pellentesque eget est id justo feugiat lacinia. Aliquam erat volutpat. Nulla facilisi. Cras in efficitur mauris. Pellentesque arcu ipsum, pharetra sit amet accumsan scelerisque, vulputate quis massa. Curabitur eu erat nec lorem lacinia pretium ac et dui. Proin laoreet nec nibh eget vestibulum. Mauris consectetur nulla non erat dapibus, eget tempor leo ornare.Fusce maximus, tellus a tristique iaculis, turpis massa volutpat sem, ac ornare lectus risus ut lorem. Maecenas at turpis ante. Etiam leo ante, finibus et lobortis eu, posuere non elit. Ut bibendum sit amet dui eget tempus. Nullam in placerat turpis, vitae pulvinar metus. Etiam non mauris eu elit congue mollis. Duis imperdiet enim nisl, sed auctor orci bibendum at. Etiam id vulputate ipsum. Vivamus consequat rhoncus orci ac commodo. In hac habitasse platea dictumst. Integer sit amet dui pharetra, sagittis mi eu, suscipit lectus. Vivamus volutpat felis sed molestie varius. Vivamus pulvinar magna in vulputate vulputate. Quisque semper nisl sit amet odio egestas, quis tempor est sagittis. Proin semper, augue id maximus gravida, diam tellus feugiat libero, convallis facilisis dolor risus vitae felis."

let counter = 1;

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        counter++
    }
}
console.log(counter)

let counterEt = []

for (let i = 0; i < longText.length; i++) {
    if ((longText[i] === "e") && (longText[i + 1] === "t")) {
        counterEt++
    }
}
console.log(counterEt)


// Bonus 2
const phraseToCheck = "Roma, Amor"
phraseToCheck.toLowerCase()
let phraseNoSpace = phraseToCheck.replaceAll(" ", "")
let phraseWithout = phraseNoSpace.replaceAll(",", "")
let phraseFormatted = phraseWithout.replace(/^[a-zA-Z]+$/, '')
console.log(phraseFormatted)

let firstWord = phraseFormatted.substring(0, phraseFormatted.length / 2).toLowerCase()
let secondWord = phraseFormatted.substring(phraseFormatted.length / 2, phraseFormatted.length).toLowerCase()

console.log(firstWord)
console.log(secondWord)

let secondWordReverse = ""
for (let i = secondWord.length - 1; i >= 0; i--) {
    secondWordReverse += secondWord[i];
}
if (firstWord === secondWordReverse) {
    console.log("The words are Palindrome!")
} else {
    console.log("The words aren't Palindrome!")
}