// Iteration 1: Names and Input

let hacker1 = "Adrian"
console.log(`The driver's name ${hacker1}`)
let hacker2 = "Adria"
console.log(`The navigator's name ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }

// Iteration 3: Loops

//Split Hacker1 Name
let splitHacker1 = hacker1.split("")
let joinHacker1Array = splitHacker1.join(" ")
console.log(joinHacker1Array.toUpperCase())

//Split Hacker2 Name
let splitHacker2 = hacker2.split("")
let reverseHacker2Array = splitHacker2.reverse()
let joinHacker2Array = reverseHacker2Array.join("")
console.log(joinHacker2Array)

//Lexicographic Order
console.log(hacker1.localeCompare(hacker2))
if ((hacker1.localeCompare(hacker2)) == -1) {
  console.log("The driver's name goes first.")
} else if ((hacker1.localeCompare(hacker2)) == 1){
 console.log("Yo, the navigator goes first definitely.") 
} else {
  console.log("What?! You both have the same name?")
}