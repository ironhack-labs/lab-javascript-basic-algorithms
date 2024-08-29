// Iteration 1: Names and Input
const hacker1= "Favas";
const hacker2= "Eduard";

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
const lengthHacker1 = hacker1.length;
const lengthHacker2 = hacker2.length;

if(lengthHacker1>lengthHacker2){
    console.log(`The driver has the longest name, it has ${lengthHacker1} characters.`)
    
     }
    else if(lengthHacker1<lengthHacker2){
        console.log(` It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`)
    
    }else{
    
    console.log("What?! You both have the same name?")
    }
    
// Iteration 3: Loops
let result1 = "";
for(let count1 = 0; count1<hacker1.length; count1++){
    result1 +=hacker1[count1]+" ";
}
  console.log(result1.trim())

  let result2 = "";
  for(let lastLetter = hacker2.length-1;0<= lastLetter; lastLetter--){
    result2 += hacker2[lastLetter];
}
console.log(result2)
