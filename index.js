// Iteration 1: Names and Input
const hacker1 = "jose"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "carlos"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
console.log(hacker1.length)


if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker1.length < hacker2.length){
    console.log( `It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let sumChar = ""
let char

for(let i = 0;i < hacker1.length; i++){
    char = hacker1[i]
    sumChar += char + " " 
}
console.log(sumChar.toUpperCase())

