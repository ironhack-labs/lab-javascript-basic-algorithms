// Iteration 1: Names and Input
let hacker1 = "Luis"
let hacker2 = "Emily"

console.log("The driver's name is", hacker1)
console.log("The navigators's name is", hacker2)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else
{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let driver = ""
for(let i = 0; i < hacker1.length; i++){
  driver += hacker1[i].toUpperCase() + ' '
}
console.log(driver)


const lastIndex = hacker1.length -1

let driverRe = ""
for(let i = lastIndex; i >= 0 ; i--){
  driverRe += hacker1[i] 
}
console.log(driverRe)


if (hacker1.localeCompare(hacker2) === -1 ) {
  console.log("Yo, the navigator goes first, definitely.") 
}
else if (hacker1.localeCompare(hacker2) === 1 ){
  console.log("The driver's name goes first.")
}
else 
{
  console.log("What?! You both have the same name?")}

  