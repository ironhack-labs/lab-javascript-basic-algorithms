// Iteration 1: Names and Input
const hacker1 = "Juan"
console.log(`"The driver's name is ${hacker1}"`)
const hacker2 = "Chrome"
console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals
const driver = "Juan"
const navigator = "Chrome"

if (driver.length > navigator.length) {
  console.log(`"The driver has the longest name, it has ${driver.length} characters."`)
  } else if (driver.length < navigator.length) {
  console.log(`"It seems that the navigator has the longest name, it has ${navigator.length} characters."`)
  } else if (driver.length = navigator.length) {
  console.log(`"It seems that the navigator has the longest name, it has ${navigator.length} characters."`)
  } else {
  console.log("The name isn´t valid")
}

// Iteration 3: Loops
const driver = "Juan"
const navigator = "Chrome"

/* Parte 3.1 */
const upperCase = driver.toUpperCase()
console.log(upperCase[0] + " " + upperCase[1] + " " + upperCase[2] + " " + upperCase[3])

/* Parte 3.2 */
console.log(navigator[5] + navigator[4] + navigator[3] + navigator[2] + navigator[1] + navigator[0])


/* Parte 3.3 */
let order = driver.localeCompare(navigator)

switch (order) {
  case (order = 1):
  console.log("Yo, the navigator goes first definitely.")
  break
  case (order = -1):
  console.log("The driver's name goes first.")
  break
  default:
  console.log("What?! You both have the same name?")
}
