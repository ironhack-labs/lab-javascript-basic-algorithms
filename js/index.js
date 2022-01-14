// Iteration 1: Names and Input

const hacker1 = "Zero Cool"

console.log(`The drive's name is ${hacker1}`)

const hacker2 = "Acid Burn"

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has XX characters.')
} else if (hacker1.length < hacker2.length) {
    console.log('It seems that the navigator has the longest name, it has XX characters.')
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// Iteration 3.1

let driverSpace = ''

for (let i = 0; i < hacker1.length; i++) {
  if (i + 1 < hacker1.length) {
    driverSpace += hacker1[i] + ' '
  } else {
    driverSpace += hacker1[i]
  }
}

console.log(driverSpace.toUpperCase())

// Iteration 3.2

let navigatorReverse = ''

for (let i = hacker2.length-1; i >= 0; i--) {
  navigatorReverse += hacker2[i]
}

console.log(navigatorReverse)

// Iteration 3.3

if (hacker1 !== hacker2) {
  let names = [hacker1, hacker2]
  names.sort()
  if (names[0] === hacker1) {
    console.log("The driver's name goes first.")
  } else {
    console.log("Yo, the navigator goes first definitely.")
  }
} else {
  console.log("What?! You both have the same name?")
}

// Bonus 1

