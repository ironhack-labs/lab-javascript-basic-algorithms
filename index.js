// Iteration 1: Names and Input

// let hacker1 = "Max";

// console.log(`The driver's name is ${hacker1}`);

// let hacker2 = "Daniel";

// console.log(`Then navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// let driver = "Maximum"

// let navigator = "Daniela"

// if (driver.length > navigator.length) {
//   console.log(
//     `The driver has the longest name, it has ${driver.length} characters.`,
//   )
// } else if (driver.length < navigator.length) {
//   console.log(
//     `It seems that the navigator has the longest name, it has ${navigator.length} characters`,
//   )
// } else {
//   console.log(
//     `Wow, you both have equally long names, ${driver} ${driver.length} ${navigator} ${navigator.length} characters!.`,
//   )
// }

// Iteration 3: Loops
// ### Iteration 3: Loops

//   3.1 Print the characters of the driver's name, separated by space, and [in capital letters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), i.e., `"J O H N"`.

//   3.2 Print all the characters of the navigator's name in reverse order, i.e., `"nhoJ"`.

//   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

// - `The driver's name goes first.` <br>
// - `Yo, the navigator goes first, definitely.` <br>
// - `What?! You both have the same name?`

// let space = ""

// for (let i = 0; i < driver.length; i++) {
//   space += driver[i].toUpperCase() + " "
// }

// console.log(space)

// let space2 = ""

// for (let i = 0; i < driver.length; i++) {
//   space2 = space2 + driver[i].toUpperCase() + " "
// }

// console.log(space2)

// let result = driver.toUpperCase().split("").join(" ")

// console.log(result)

// result = ""

// for (let i = 0; i < navigator.length; i++) {
//   result = navigator.split("").reverse().join("")
// }
// console.log(result)

// let reverseName = navigator.split("").reverse().join("")

// console.log(reverseName)

// let reverse = ""

// for (let i = navigator.length - 1; i >= 0; i--) {
//   reverse += navigator[i]
// }

// console.log(reverse)

// let reverseNameV2 = ""

// for (let i = navigator.length - 1; 0 >= i; i--) {
//   reverseName2 += navigator[i]
// }

// console.log(reverseNameV2)

// let reverseName2 = ""

// for (let i = navigator.length - 1; i >= 0; i--) {
//   reverseName2 += navigator[i]
// }

// console.log(reverseName2)

// if (driver < navigator) {
//   console.log("The driver's name goes first.")
// } else if (driver > navigator) {
//   console.log("Yo, the navigator goes first, definitely.")
// } else {
//   console.log("What?! You both have the same name?")
// }

// Iteration 1

let hacker1 = "Maximum"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Daniela"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`,
  )
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
  )
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`,
  )
}

// Iteration 3.1

let spacedName = hacker1.toUpperCase().split("").join(" ")
console.log(spacedName)

// Iteration 3.2

let reversedName = hacker2.split("").reverse().join("")
console.log(reversedName)

// Iteration 3.3

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?")
}
