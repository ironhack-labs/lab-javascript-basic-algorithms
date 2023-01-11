// Iteration 1: Names and Input
let hacker1 = "Alexis"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Mariel"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  
  else if(hacker2.length > hacker1.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  
  else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }

// Iteration 3: Loops
let driver = "john" ;
let allUp = "";
for (let i=0;i<driver.length;i++){
  allUp = allUp + " " +driver[i].toUpperCase()
  
}
console.log(allUp)

let driver = "John";
let result = ""
for (let i = driver.length - 1; i >= 0; i--) {
  result+= driver[i]
  
}
console.log(result)

let driver = "John";
let navigator = "Mariel";

if (driver[0].toUpperCase() < navigator[0].toUpperCase()){
  console.log("The driver's name goes first.")
}
else if (driver[0].toUpperCase() > navigator[0].toUpperCase()){
  console.log("The navigator's name goes first.")
}
else{console.log("What?! You both have the same name?")}
