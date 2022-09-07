// Iteration 1: Names and Input
const hacker1 = "Saskia"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Martin"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log('The driver has the longest name, it has XX characters.')
} if (hacker2.length > hacker1.length){
    console.log('It seems that the navigator has the longest name, it has XX characters.')
} else if (hacker2.length === hacker1.length){
    console.log('Wow, you both have equally long names, 6 characters!')
} 

// Iteration 3: Loops
let spacedName = "";
for(const char of hacker1){
    spacedName += char + ' '
    
}
console.log(spacedName.toUpperCase())

// 3.2 // 

let reversed = "";      
   for (let i = hacker1.length - 1; i >= 0; i--){         
     reversed += hacker1[i];  
   }     

// let the loop begin with the length of our loop - 1. The condition is that as long as i is greater than 0, minus.
// as the loop runs - put each iteration(letter) from hacker1 into the 'reversed' variable. 

  console.log(reversed)

// 3.3 //

const result = hacker1.localeCompare(hacker2) 

if (result === -1){
    console.log("The driver's name goes first.")}
    else if (result === 1){
        console.log("Yo, the navigator goes first definitely.")}
        else {console.log('What?! You both have the same name?')}
        