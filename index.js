// Iteration 1: Names and Input
let hacker1 = "Eduardo"
console.log(`The drive's name is ${hacker1}`)

let hacker2 = "Diego"
console.log(`The navigator's name ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length >= hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  else if (hacker1.length <= hacker2.length)
    {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters` )
  }
  else {
    console.log(`Wow, you both have equally long names,${hacker2.length} characters`)
  } 

// Iteration 3: Loops
let mayusculas
let mayus = hacker1.toUpperCase().split("")
console.log(mayus)

let str = hacker2
let reversed = ""

for (let i = str.length -1; i >= 0; i--){
  reversed += str[i];
}
console.log(reversed);

if (hacker2.localeCompare(hacker1) === 1){
  console.log("The driver's name goes first")
}
else if (hacker1.localeCompare(hacker2) === 1){
  console.log("Yo, the navigator goes first definitely")
}
else {
  console.log("What?! You both have the same name?")
}