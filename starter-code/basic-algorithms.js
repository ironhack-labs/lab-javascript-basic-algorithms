// Names and Input
var hacker1 = "Inna";
console.log(`The driver's name is ${hacker1}`);
var hacker2 = "Sat";
hacker2 = window.prompt("What is your name?", "hackername");
console.log(`The navigator's name is ${hacker2}`);

//Conditionals

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker2.length > hacker1.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}
else if(hacker2.length == hacker1.length){
  console.log(`Wow, you both got equally long names, ${hacker2.length} characters!`);
}


console.log(hacker1.toUpperCase().split('').join(' '))

console.log(hacker2.split('').reverse().join(''))

let nameOrder=hacker1.localeCompare(hacker2)

if (nameOrder == 1) {
  console.log(`The navigator goes first`);
} else if (nameOrder == -1) {
  console.log(`The driver goes first`);
} else if (nameOrder == 0) {
  console.log(`What? you both have the same name`);
}
// Lorem ipsum generator
userInput = window.prompt("Check for palindrome", "Potential palindrome");

if (userInput.localeCompare(userInput.split('').reverse().join(''))==0) {
  alert('You have a palindrome')
} else {
  alert('This is not a palindrome')
}