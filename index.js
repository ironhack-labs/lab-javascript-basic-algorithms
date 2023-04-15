// Iteration 1: Names and Input
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Andres"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

let nombre1 = hacker1.length;
let nombre2 = hacker2.length;

if (nombre1 >= nombre2){
  console.log(`The driver has the longest name, it has ${nombre1} characters!`);
}
else if (nombre2 >= nombre1) {
  console.log(`It seems that the navigator has the longest name, it has ${nombre2} characters.`)
}

else {
  console.log(`Wow, you both have equally long names, ${nombre1} characters!`)
}
// Iteration 3: Loops

let capital = hacker1.toUpperCase()
let separar = capital.split("").join("")
console.log(separar)

let minus = hacker1.toLowerCase()

let rever = minus.split("")
console.log(rever.reverse().join(""))

if (hacker1.localeCompare(hacker2 === true)) {
  console.log(`The driver's name goes first.`)
}

else if(hacker2.localeCompare(hacker1 === true)){
  console.log(`Yo, the navigator goes first, definitely.`)
}

else{
  console.log(`What?! You both have the same name?`)
}