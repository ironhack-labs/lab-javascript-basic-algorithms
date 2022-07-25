console.log("I'm ready");
// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops


let hacker1 = "John"
console.log(`The drivers name is ${hacker1}`)
let hacker2 = "YYYY"
console.log(`The navigator's name is ${hacker2}`)
if (hacker1.length > hacker2.length){
    console.log(`the driver has the longest name, it has ${hacker1.length} characters`) 
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}  characters`)
} else {
      console.log(`Wow, you both have eqally long names, ${hacker1.length} characters!`)
    
}
let spaceName = ""

for (let i = 0; i < hacker1.length; i++){
    spaceName += `${hacker1.charAt(i)} `
}
console.log(spaceName.toUpperCase())

let reversedName = ""
for (let i = hacker1.length; i > 0; i--){
    reversedName += `${hacker1[i - 1]}`
}
console.log(reversedName)

let compare = "";
if (hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}


