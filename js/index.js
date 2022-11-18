console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Feliciano"
console.log(`The drivers name is ${hacker1}`)

let hacker2 = "Dino"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }


// Iteration 3: Loops

let charSeparated = ""
for (let i = 0; i < hacker1.length; i++) {
  charSeparated += hacker1[i] += " "
}
console.log(`${charSeparated.toUpperCase()}`)

let navigatorReverse = ""
for (let i = hacker2.length-1; i > -1; i--) {
  navigatorReverse += hacker2[i]
}
console.log(`${navigatorReverse}`)


for (let i = 0; i < hacker1.length+1; i++) {
    if (hacker1 === hacker2) {
      console.log("What?! You both have the same name?")
      break
    } else if (hacker1[i] > hacker2[i] || hacker2[i] === undefined) {
      console.log("Yo, the navigator goes first definitely.");
      break
    } else if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
      console.log("The driver's name goes first.");
      break
    } 
  }
