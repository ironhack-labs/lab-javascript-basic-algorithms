// Iteration 1: Names and Input
const hacker1 = 'Lucas';
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = 'Volney & Thiarhes';
console.log(`The navigator's are ${hacker2}.`);

// Iteration 2: Conditionals
const hackerLonger1 = hacker1.length;
const hackerLonger2 = hacker2.length;


if(hackerLonger1 > hackerLonger2) {
  console.log(`The driver has the longest name, it has ${hackerLonger1} characters.`);
} else if(hackerLonger1 < hackerLonger2){
  console.log(`It seems that the navigator has the longest name, it has ${hackerLonger2} characters.`);
} else {
  console.log(`Wow, you both have equaly long names, ${hackerLonger1} characteres!`)
}
// Iteration 3: Loops

//3.1
let hacker1Space = hacker1.toUpperCase().split("").join(" ");
console.log(hacker1Space);

//3.2
const str = hacker2;
const newStr = str.split('');
console.log(newStr.reverse().join(''));

//3.3
if(hacker1 > hacker2) {
  console.log(`The ${hacker1} goes first.`);
} else if(hacker1 < hacker2) {
  console.log(`Yo,the ${hacker2} goes first definitely.`);
} else if(hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`)
}

