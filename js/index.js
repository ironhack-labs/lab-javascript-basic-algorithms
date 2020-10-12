// Iteration 1: Names and Input
let hacker1="Elia"
console.log(`The driver's name is ${hacker1}`)
let hacker2="ceyda"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`)
  } else{
  `Wow, you both have equally long names, ${hacker1.length}  characters!.`}
  

// Iteration 3: Loops
for (let i=0; i<hacker1.length; i++){
    console.log(hacker1.split('').join(' ').toUpperCase());
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function reverseString(str){
let newString ="";
for(var i=str.length -1; i>=0;i--){
  newString += str[i];
}
return newString;
}
reverseString(hacker2)

//3.3 Depending on the lexicographic order of the strings, print: 


let lexicographOrder= hacker1.localeCompare(hacker2);

switch (lexicographOrder){
  case -1:
  console.log(`The driver's name (${hacker1}) goes first.`);
  break;

  case 1:
  console.log(`Yo, the navigator, ${hacker2}, goes first definitely.`);
  break;
  default:
  console.log(`What?! You both have the same name?`);} 