// Iteration 1: Names and Input
const hacker1 = "Tomase"
console.log(`“The driver’s name is ${hacker1}“`)
const hacker2 = "Marcos"
console.log(`“The navigator’s name is ${hacker2}“`)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
  }
// Iteration 3: Loops

console.log(hacker1[0].toUpperCase() + " " + hacker1[1].toUpperCase() + " " + hacker1[2].toUpperCase()  + " " + hacker1[3].toUpperCase() + " " + hacker1[4].toUpperCase() + " " + hacker1[5].toUpperCase());

 console.log(hacker2[5] + " " + hacker2[4] + " " + hacker2[3]  + " " + hacker2[2] + " " + hacker2[1] + " " + hacker2[0]);

function  lexicographicorder(){
if (hacker1.length > hacker2.length){
 console.log(`The driver's name goes first`);
 }
 if (hacker1.length < hacker2.length){
 console.log(`Yo, the navigator goes first definitely`);
  }
  else {
 console.log(`What?! You both have the same name?`); }
   
} 

lexicographicorder()