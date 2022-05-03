// Iteration 1: Names and Input
const hacker1 = "Manolito"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "firefox"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.` )
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let driver = ""
for (let i = 0 ; i < hacker1.length ; i++ ){
    driver += hacker1[i] + " "
}
console.log(driver.toUpperCase());



let navigator = ""

for (let j = hacker2.length -1 ; j >= 0 ; j-- ){
    navigator += hacker2[j]
}

console.log(navigator);




if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
    console.log("The driver's name goes first.")
  } else if (hacker1.toUpperCase() > hacker2.toUpperCase()) {
    console.log("Yo, the navigator goes first definitely.")
  } else {
    console.log("What?! You both have the same name?")
  }







console.log ( "I'm ready" ) ;


