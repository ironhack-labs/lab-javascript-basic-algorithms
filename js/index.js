// Iteration 1: Names and Input

const hacker1 = "Carlos" // Driver's name.
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Eduardo" // Navigator's name.
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
  
  console.log(hacker1.length)
  console.log(hacker2.length)
  

// Iteration 3: Loops

// 3.1

let driversName = ""

for (let i = 0; i < hacker1.length; i ++) {
  driversName += hacker1[i].toUpperCase() + " ";
}

console.log(driversName);

// 3.2

let navigatorsName = ""

for (i = hacker2.length -1; i >= 0; i--) {
  navigatorsName += hacker2[i];
}

console.log(navigatorsName)

// 3.3

if (hacker1.localeCompare(hacker2) == 1) {
    console.log("The driver's name goes first.")
  } else if (hacker1.localeCompare(hacker2) == -1) {
    console.log("Yo, the navigator goes first definitely.")
  } else if (hacker1.localeCompare(hacker2)== 0) {
    console.log("What?! You both have the same name?")
  }