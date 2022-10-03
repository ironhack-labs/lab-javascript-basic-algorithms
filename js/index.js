// Iteration 1: Names and Input
//
const hacker1= "Ricardo"
console.log(`The driver's name is ${hacker1}`)
const hacker2= "Flávia"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if(hacker2.length > hacker1.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
    console.log(`Wow, you both have equally long names,${hacker2.length} characters`)
}
// Iteration 3: Loops
let separatedHacker1 = "";
for(let i= 0; i < hacker1.length; i++){
    separatedHacker1= separatedHacker1 + hacker1[i] + " ";
}
console.log(separatedHacker1.toUpperCase())


let reverseHacker2 = "";
for(let i= (hacker2.length -1); i >= 0; i--){
    reverseHacker2= reverseHacker2 + hacker2[i];
}
console.log(reverseHacker2)




if((hacker2.localeCompare(hacker1)) === 1){
    console.log("The driver's name goes first.")
}
else if((hacker1.localeCompare(hacker2)) === 1){
    console.log("Yo, the navigator goes first definitely.")
}
else{
    console.log("What?! You both have the same name?")
}

