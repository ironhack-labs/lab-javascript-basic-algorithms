// Iteration 1: Names and Input
const hacker1="Razi"
console.log(`The driver's name is ${hacker1}`)
const hacker2="karthik"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let str=""
for(let i=0;i<hacker1.length;i++){
  let char = hacker1[i];
  str=str+ char.toUpperCase()+" "
}
console.log(str)
let reversed=""
for(let i=hacker2.length-1;i>=0;i--){
  reversed=reversed+hacker2[i]
}
console.log(reversed)
if(hacker1 === hacker2){
  console.log("What?! You both have the same name?")
}else if(hacker2 > hacker1){
  console.log("Yo, the navigator goes first, definitely.")
}else{
  console.log("The driver's name goes first.")
}