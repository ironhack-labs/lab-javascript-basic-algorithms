// Iteration 1: Names and Input
let hacker1 = "Adam";
let hacker2 = "Adamm";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name, it has ${driverLength} characters.`
  );
} else if (navigatorLength > driverLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorLength} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driverLength} characters!`
  );
}
// Iteration 3: Loops
let driverName = ""
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " " 
}
console.log(driverName);

let navigatorName = ""
for (let i = hacker2.length -1; i >= 0; i--) {
  navigatorName += hacker2[i]
}
console.log(navigatorName)

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?")
}
// Bonus 1

const longText = `
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
`
let textArray = longText.split(" ")
console.log(textArray.length)
let count = 0
for (let i = 0; i < textArray.length; i++) {
  if (textArray[i] === "et") {
    count++
  }
}
console.log(count)

// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!rfw"
let newPhraseToCheck = ""
let phraseToCheckLowerCased = phraseToCheck.toLowerCase()
for (let i = 0; i < phraseToCheckLowerCased.length; i++) {
  if (phraseToCheckLowerCased[i] >= "a" && phraseToCheckLowerCased[i] <= "z") {
    newPhraseToCheck += phraseToCheckLowerCased[i]
  }
}
console.log(newPhraseToCheck)
let reversed = ""
for (let i = newPhraseToCheck.length - 1; i >= 0; i--) {
  reversed += newPhraseToCheck[i]
}
console.log(newPhraseToCheck === reversed)