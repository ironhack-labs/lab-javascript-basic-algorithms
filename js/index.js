// Iteration 1: Names and Input

const hacker1 = "Jon";

console.log(`The driver's name is ${hacker1}`)


const hacker2 = "David";

console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if( hacker1.length > hacker2.length ) {

    console.log(`The driver has the longest name, it has ${hacker1.lenght} characters`)
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }


// Iteration 3: Loops

const hacker1 = "Jon";

console.log(`The driver's name is ${hacker1}`)


const hacker2 = "David";

console.log(`The navigator's name is ${hacker2}`)
console.log("---------------")
let shortestName

if( hacker1.length > hacker2.length ) {

  console.log(`The driver has the longest name, it has ${hacker1.lenght} characters`)
  shortestName = hacker2
} else if (hacker1.length < hacker2.length){
  shortestName = hacker1
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  shortestName = hacker1
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}
console.log("---------------")
let driver = ""
let navigator = ""

for (let i in hacker1){
  driver += hacker1[i] + " "  
}
console.log(driver.toUpperCase())

for (let i = hacker2.length -1; i >= 0; i--) {
  navigator += hacker2[i]
}

console.log(navigator)
console.log("---------------")




if (hacker1.toUpperCase() === hacker2.toUpperCase()){
  console.log("What?! You both have the same name?")
} else {
  for(let i = 0; i < shortestName.length; i++){
  if (hacker1[i].toUpperCase() < hacker2[i].toUpperCase()){
    console.log("The driver's name goes first.")
    break;
  }else {
        console.log("Yo, the navigator goes first definitely.")
        break;
    }
  }
}