// Iteration 1: Names and Input
const hacker1 = "noam"
console.log(`the drivers name is ${hacker1}`)

const hacker2 = "jose"
console.log(`the navigators name is ${hacker2}`)



// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {

    console.log(`the driver has the longest name, it has ${hacker1.length} characters`)
  
}else if (hacker2.length > hacker1.length) {

  console.log(`it seems the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log( `wow, you both qeually long names, ${hacker1.length && hacker2.length} characters`)
}

// Iteration 3: Loops
  

let spaceName = ""
for (let i = 0; i<hacker1.length; i++){
   spaceName+= hacker1.charAt(i)+ " "

}

 console.log(spaceName.toUpperCase().trim())


  let reversedString =''
  
  for (let i = hacker2.length - 1; i >= 0; i--) {
   
    reversedString += hacker2[i]
  
  }

console.log(reversedString);

let names = [hacker1, hacker2]
let sortedNames = names.sort();
console.log(sortedNames) 

if (sortedNames[0] == hacker1){
  console.log("the drivers name goes first.")
} else if (sortedNames[0] == hacker2){
  console.log("yo, the navigator goes first definetly!")
} else if (hacker1 == hacker2) {
  console.log("what?! you both have the same name?")
}
