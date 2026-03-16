// Iteration 1: Names and Input
const hacker1 = "Jeronimo"
const hacker2 = "Andy"

console.log ("The driver's name is " + hacker1)
console.log ("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
const longName1 = hacker1.length
const longName2 = hacker2.length

if (longName1 > longName2){
  console.log ("The driver has the longest name, it has " + longName1 + " characters.")
} else if (longName1 < longName2){
  console.log ("It seems that the navigator has the longest name, it has " + longName2 + " characters.")
}else {
    console.log ("Wow, you both have equally long names, " + longName1 + " characters!")
}


// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++){
  console.log (hacker1[i].toUpperCase() + " ")
}
for (let i = hacker1.length - 1; i < 0; i--){
  console.log (hacker1[i].toUpperCase() + " ")
}

if (hacker1 < hacker2){
  console.log ("The driver's name goes first.")
}else if (hacker2 < hacker1){
  console.log("Yo, the navigator goes first, definitely.")
}else{
  console.log("What?! You both have the same name?")
}