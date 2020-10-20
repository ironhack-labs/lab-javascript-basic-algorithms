
// Iteration 1: Names and Input

const hacker1 = "abcdd"
const hacker2 = "abcde"

console.log(`The drivers name is ${hacker1}`)
console.log("The navigators name is" + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length ) {
    console.log(`It seems that the navigator has the longeset name, is has ${hacker2.length}`)
} else {
    console.log(`Wow, you both have equally long names ${hacker2.length}`)
}

// Iteration 3: Loops

let name = ""

 for (let i = 0; i < hacker1.length; i++) {
  
   let capitalizeL = hacker1.charAt(i).toUpperCase(i)
    name += capitalizeL + " "
   console.log(name)
 }


function reverseName(string) {
  let splitString = string.split("")
  let reverseString = splitString.reverse()
  let newString = reverseString.join("")
  console.log(newString)
}

reverseName(hacker2)


if (hacker2 === hacker1) {
  console.log("What?! You both have the same name?")
} else if (hacker1 < hacker2) {
  console.log("The driver's name goes first")
} else {
  console.log("Yo, the navigator goes first definitely.")
}