// Iteration 1: Names and Input
let hacker1 = "John"
let hacker2 = "Trudy"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let upperCaseHacker1 = ""
for (let i = 0; i < hacker1.length; i++) {
  upperCaseHacker1 += hacker1[i].toUpperCase() + " "
}
console.log(upperCaseHacker1)

let reverseHacker2 = ""
for (i = hacker2.length - 1; i >= 0; i--) {
  reverseHacker2 += hacker2[i]
}
console.log(reverseHacker2)

let lexicographhicOrder = hacker1.localeCompare(hacker2);

if (lexicographhicOrder === 1) {
  console.log("Yo, the navigator goes first, definitely.")
} if (lexicographhicOrder === -1) {
  console.log("The driver's name goes first.")
} if (lexicographhicOrder === 0) {
  console.log("What?! You both have the same name?")
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue laoreet leo, at etncidunt sem luctus eu. Nullam interdum nisl in velit consectetur rhoncus.

Fusce porttitor, elit nec vulputate hendrerit, leo lectus rutrum massa, et. vulputate magna lorem in turpis. Curabitur ullamcorper sagittis urna, facilisis fringilla tellus sodales in. Vestibulum ante ipsum primis in faucibus orci luctus et. ultrices posuere cubilia curae; Pellentesque aliquet metus ut lectus sodales viverra.

Cras euismod hendrerit turpis, eget vehicula sem conguet fringilla. Donec bibendum vestibulum lacus, et, lacinia elit gravida pulvinar. Aenean ac velit dignissim mauris bibendum elementum a a nisi. Pellentesque scelerisque, lectus et ornare tempus, nulla lectus consectetur ligula, sit amet congue tellus nibh nec leo. Integer vitae sodales nisi, ac placerat turpis. Vivamus nec turpis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.`

function numberOfWords(text) {
  console.log(text.split(" ").length)
}

numberOfWords(longText)

function countEt(text) {
  let etcountSpace = text.split(" et ").length - 1;
  let etcountComma = text.split(" et,").length - 1;
  let etcountDot = text.split(" et.").length - 1;

  return etcountSpace + etcountComma + etcountDot;
}

console.log(countEt(longText))


// Bonus 2
function palindrome(text) {
  text = text.toLowerCase()
  let cleanText = ""
  let reverseText = ""

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " " && text[i] !== "," && text[i] !== "." && text[i] !== "?" && text[i] !== "!" && text[i] !== "'" && text[i] !== "\"") {
      cleanText += text[i]
    }
  }

  for (i = cleanText.length - 1; i >= 0; i--) {
    reverseText += cleanText[i]
  }
  if (reverseText === cleanText) {
    console.log("It's a palindrome!")
  } else {
    console.log("It's not a palindrome!")
  }
}

palindrome("Amor, Roma")
palindrome("A man, a plan, a canal, Panama!")
palindrome("Was it a car or a cat I saw?")
palindrome("step on no pets")
palindrome("No 'x' in Nixon")

