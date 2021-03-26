// Iteration 1: Names and Input
let hacker1 = "Mayhem";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Chai Latte"
console.log (`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);} 
    
    else if (hacker1.length < hacker2.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`);}
    
    else {console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);}

 
// Iteration 3: Loops

hacker1 = hacker1.toUpperCase();
let spacedHacker1 = "";
for(let i=0; i<hacker1.length; i++){
  spacedHacker1 += hacker1[i] + " ";
}
console.log(spacedHacker1);

let reversedHacker2 = "";
for(let i=hacker2.length-1; i>=0; i--){
  reversedHacker2 += hacker2[i];
}
console.log(reversedHacker2);

if (hacker2.localeCompare(hacker1) === 1){
    console.log("The driver\'s name goes first.");
  } else if (hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely.");
  } else {
  console.log("What?! You both got the same name?");
  }