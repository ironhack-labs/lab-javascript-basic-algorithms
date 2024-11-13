// Iteration 1: Names and Input

const hacker1 = "Maria"
const hacker2 = "Miguel"

console.log(`the navigator's name is ${hacker1}`)
console.log(`the driver's name is ${hacker2}`)
// Iteration 2: Conditionals

let chars1 = hacker1.length
let chars2 = hacker2.length
 

if (chars1 > chars2) {
    console.log(`The hacker1 has the longest name, it has ${chars1} characters`)
} else if (chars2 > chars1) {
    console.log(`It seems that the hacker2 has the longest name, it has ${chars2} characters.`)
}

// Iteration 3: Loops 


let bySpaceBox = ""
for (let i = 0; i < hacker1.length ; i++){
    bySpaceBox += hacker1[i].toUpperCase() + " "
    
} 
console.log(bySpaceBox)


//Iteration 3.2
let reversedBox = ""
for (let j = hacker2.length - 1 ; j>=0 ; j --){
    reversedBox += hacker2[j]
    
}
console.log(reversedBox)



//Iteration 3.3
let ordenLexico1 = hacker2.localeCompare(hacker1)
let ordenLexico2 = hacker1.localeCompare(hacker2)

if (ordenLexico1 > ordenLexico2){
    console.log("Yo, the navigator goes first, definitely")
} else if (ordenLexico2 > ordenLexico1){
    console.log("The driver's name goes first.")
}else if (!ordenLexico1 && !ordenLexico2){
    console.log("What?! You both have the same name?")
}







