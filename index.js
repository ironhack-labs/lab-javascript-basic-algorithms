console.log("I'm ready!")
// Iteration 1: Names and Input
let hacker1 = "Juan Pablo"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Luis"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters `)
} 

else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters! `)
} 
   

// Iteration 3: Loops

//3.1

let nameFormatted = "";

for (let i=0; i<hacker1.length; i++){

  nameFormatted += hacker1[i].toUpperCase()+" "; 
  
}

console.log(nameFormatted)

//3.2

let nameInverted = "";

for (let i=hacker2.length-1; i>=0; i--){

  nameInverted += hacker2[i]; 
  
}

console.log(nameInverted)

//3.3
for (let i=0; i<hacker1.length&&hacker2.length; i++){ 
  
  let caseDraw = "What?! You both have the same name?"
  
  let caseNavigatorWin = "Yo, the navigator goes first, definitely."
  
  let caseDriverWin = "The driver's name goes first."
  
  let currentCompare = hacker2[i].localeCompare(hacker1[i])

  if (hacker1===hacker2){   
    console.log(caseDraw)
  }  
  if(currentCompare < 0){  
    console.log(caseNavigatorWin)
    break
  }  
  if(currentCompare > 0){   
    console.log(caseDriverWin)
    break
  }  
}