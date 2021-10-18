// Iteration 1: Names and Input
const hacker1 = "David";
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Juan Antonio";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
const hacker1Length = hacker1.length

const hacker2Length = hacker2.length
if(hacker1Length > hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length} characters`)
}else if(hacker2Length > hacker1Length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
}else{
    console.log("Wow, you both have equally long names, XX characters!")
}


// Iteration 3: Loops
let driverCapital= "";
let navigationReverse = hacker2.split("").reverse().join("")
for(let i=0; i<hacker1Length; i++){
    driverCapital += (hacker1[i].toUpperCase()+" ")
}
for(let j=0; j<hacker2Length; j++){
    navigationReverse += hacker2[j]
}

console.log(navigationReverse)