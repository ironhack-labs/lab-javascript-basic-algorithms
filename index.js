let hacker1 = "Emily";
console.log("The driver's name is " + hacker1);
let hacker2 = "Cédric";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
else if (hacker1.length < hacker2.length)
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
else
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)

// Iteration 3: Loops
let driversName = ""
let space = ""
for (let i = 0; i < hacker2.length; i++) {
  if (i !== (hacker2.length - 1)) {
    space = " "
  }
  else {
    space = ""
  }
  driversName = driversName + hacker2[i] + space
}
driversName = driversName.toUpperCase()
console.log(driversName)

let navigatorsName = ""
for (let j = hacker1.length - 1; j >= 0; j--) {
  navigatorsName = navigatorsName + hacker1[j]
}
navigatorsName = navigatorsName.toLowerCase()
console.log(navigatorsName)


let results = hacker2.localeCompare(hacker1)
if (results === -1) {
  console.log("Yo, the navigator goes first, definitely.")
}
else if (results === 1) {
  console.log("The driver's name goes first.")
}
else {
  console.log("What?! You both have the same name?")
}