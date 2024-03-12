// iteration 1

let hacker1 = "Skandar"
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Jack"
console.log(`The navigator's name is ${hacker2}.`)

//iteration 2

let driverLength = hacker1.length
let navigatorLength = hacker2.length

if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name, it has ${driverLength} characters.`
  )
} else if (driverLength < navigatorLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorLength} characters.`
  )
} else {
  console.log(
    `Wow, you both have equally long names, ${driverLength} characters!`
  )
}

// iteration 3
//3.1
let newDriverName = "".toUpperCase()

for (let i = 0; i < hacker1.length; i++) {
  newDriverName += hacker1.charAt(i) + " "
}
console.log(newDriverName)

//3.2

let newNavigatorName = "ckaj"

//3.3
if (newDriverName[0] < newNavigatorName[0]) {
  console.log("The driver's name goes first")
} else if (newDriverName[0] > newNavigatorName[0]) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}
