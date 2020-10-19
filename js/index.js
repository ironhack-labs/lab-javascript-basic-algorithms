// Iteration 1: Names and Input

const hacker1 = 'Marcus';
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = 'Fiona';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name. It has ${hacker1.length} characters`);
    
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name. It has ${hacker2.length} characters`);
    
  } else {
    console.log(`Wow, you both ahve equally long names; ${hacker1.length} characters!`);
  

// Iteration 3: Loops

//conditional loops
//3.1
let result = "";
for (let i=0; i <hacker1.length; i++) {
  result += hacker1[i].toUpperCase()+" ";
}

console.log(result);

//3.2 - reverse order
let reverse = "";
for (let i=hacker2.length-1; i >= 0; i--){
  reverse += hacker2.charAt(i);
}

console.log(reverse);

//3.3 lexicographic order, i.e. alphabetical

if (hacker1.charAt(0) < hacker2.charAt(0)){
  console.log(`${hacker1} is first!`);
} else if (hacker1.charAt(0) > hacker2.charAt(0)) {
  console.log(`${hacker2} is first, definitely`);
} else {
  console.log(`${hacker1} and ${hacker2} are the same!`); 
}
