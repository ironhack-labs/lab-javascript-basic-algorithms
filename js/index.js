// Iteration 1: Names and Input
let hacker1 = "Susanne";
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = "Malte";
console.log(`"The navigator's name is ${hacker2}"`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}
// Iteration 3: Loops
let upperHacker1 = hacker1.toUpperCase(); 
let upperSpaceHacker1 ="";

// console.log (upperHacker1);
for (let i=0; i<upperHacker1.length; i++){
  
    upperSpaceHacker1 = upperSpaceHacker1 + upperHacker1.charAt(i) + " ";
  }
console.log (upperSpaceHacker1);
// console.log(upperSpaceHacker1.length);

let reverseHacker2 = "";
for (let i=hacker2.length; i>=0; i--){
  
    reverseHacker2 = reverseHacker2 + hacker2.charAt(i);
  }
console.log (reverseHacker2);


let compareHacker = hacker1.localeCompare(hacker2);
if ( compareHacker < 0 ){
  
  console.log(`The driver's name goes first.`);
}
else if (compareHacker > 0){
  console.log(`Yo, the navigator goes first definitely.`);
}
else if (compareHacker === 0){
  console.log(`What?! You both habe the same name?`);
}
