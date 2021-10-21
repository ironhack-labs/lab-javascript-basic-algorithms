// Iteration 1: Names and Input

let hacker1 = "Virginia"
let hacker2 = "Alejandro"

console.log (`The driver's name is ${hacker1}`);

console.log(`The driver's name is ${hacker2}`)


// Iteration 2: Conditionals

let hacker1 = "Virginia"
let hacker2 = "Alejandro"

if (` ${hacker1.length} > ${hacker2.length} `) {

console.log(`The driver has the longest name, it has ${hacker2.length} characters.` )

}

else if (` ${hacker1.length} > ${hacker2.length} `) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker1.length}  characters.`)
}

else {
  console.log (`Wow, you both have equally long names ${hacker1.length || hacker2.length}`
  )

}




// Iteration 3: Loops

let driver1 = ""
let driverReversed = ""

for (let i = 0; i < hacker2.length; i++) {
  driver1 = driver1 + hacker2[i].split('') + " "
  driver1 = driver1.toUpperCase()
}
  console.log(driver1)


 for (let i = driver1.length-2; i >= 0; i--) {
  driverReversed = driverReversed + driver1[i] 
 }
  console.log(driverReversed)
    
