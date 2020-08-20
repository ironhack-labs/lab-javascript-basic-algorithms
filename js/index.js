// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.

const hacker1 = "Francisco"

//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`)

//1.3 Create a variable `hacker2` with the navigator's name.

const hacker2 = "Javier"

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

//Depending on which name is longer, print:
//The driver has the longest name, it has XX characters. or
//It seems that the navigator has the longest name, it has XX characters. or
//Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let driverOnCapitals = "" 
for (let i = 0; i < hacker1.length; i++) {
  driverOnCapitals += hacker1.charAt(i)
  driverOnCapitals += " "
}

console.log(driverOnCapitals.toUpperCase())


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let navigatorReverse = ""
for (let i = hacker2.length - 1; i >= 0 ; i--) {
  navigatorReverse += hacker2.charAt(i)
}

console.log(navigatorReverse)

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?

let loopCount = hacker1.length

if (hacker2.length < hacker1.length) {
  loopCount = hacker2.length
}

for (let i = 0; i < loopCount; i++ ) {
  if (hacker1.charAt(i).toLowerCase() < hacker2.charAt(i).toLowerCase() ) {
    console.log("The driver's name goes first.")
    break
  } else if (hacker1.charAt(i.toLowerCase()) > hacker2.charAt(i).toLowerCase()) {
    console.log("Yo, the navigator goes first definitely.")
    break
   
  } else if (i === loopCount - 1) {
  console.log("What?! You both have the same name?")
  }
}
