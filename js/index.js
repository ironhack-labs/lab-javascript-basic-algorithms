// Iteration 1: Names and Input

const hacker1 = "taylor"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "john"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

// taylor -> T A Y L O R
let hacker1_2 = ""
for (i = 0; i < hacker1.length; i++) {
  hacker1_2 += hacker1[i] + " "
}
hacker1_2 = hacker1_2.toUpperCase()

// john -> J O H N
let hacker2_2 = ""
for (i = 0; i < hacker2.length; i++) {
  hacker2_2 += hacker2[i] + " "
}
hacker2_2 = hacker2_2.toUpperCase()

// taylor -> rolyat
let hacker1_3 = ""
for (i = hacker1.length - 1; i >= 0; i--) {
  hacker1_3 += hacker1[i]
}

// john -> nhoj
let hacker2_3 = ""
for (i = hacker2.length - 1; i >= 0; i--) {
  hacker2_3 += hacker2[i]
}

// The driver's name goes first.
if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
  } else if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
  } else {
    console.log("What?! You both have the same name?")
  }

  