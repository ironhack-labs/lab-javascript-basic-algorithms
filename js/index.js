// Iteration 1: Names and Input

let hacker1 = "Teresa"
console.log("The driver's name is " + hacker1)

let hacker2 = "Loreto"
console.log("The driver's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let hacker1 = "Teresa"
let hacker1Up = ""
for (let i = 0; i < hacker1.length; i++){
  hacker1Up = hacker1Up + hacker1.charAt(i).toUpperCase() + "";
}
console.log(hacker1Up);

