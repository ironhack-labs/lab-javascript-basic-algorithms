// Iteration 1: Names and Input

var hacker1 = "Anthony";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Explorer";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has de longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
var hacker1Cap = hacker1.toUpperCase();
var wordWithSpaces = hacker1Cap.split('').join(' ');
console.log(`${wordWithSpaces}`);

var reversedString = hacker1.split('').reverse().join('');
console.log(`${reversedString}`);

if (hacker1 > hacker2){
  console.log(`The driver's name goes first.`);
}else if(hacker2 > hacker1){
  console.log(`Yo, the navigator goes first definitely.`);
}else{
  console.log(`What?! You both have the same name?`);
}
